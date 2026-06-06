/**
 * screenshot-export.mjs — capture individual social post cards at exact dimensions
 * Usage: node screenshot-export.mjs <card-number> [label]
 * Example: node screenshot-export.mjs 4 portfolio
 */
import http from 'http';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const shotDir = join(__dir, 'temporary screenshots');
mkdirSync(shotDir, { recursive: true });

const cardNum = parseInt(process.argv[2] || '1');
const label   = process.argv[3] || `card-${cardNum}`;

// Card dimensions per post number
const dims = {
  1: { w: 1200, h: 628 },
  2: { w: 1080, h: 1080 },
  3: { w: 1200, h: 628 },
  4: { w: 1080, h: 1080 },
  5: { w: 1200, h: 628 },
  6: { w: 1080, h: 1080 },
};
const { w, h } = dims[cardNum] || { w: 1200, h: 628 };

const url = `http://localhost:3001/social-posts.html?card=${cardNum}`;

const nums = readdirSync(shotDir).filter(f => f.endsWith('.png'))
  .map(f => { const m = f.match(/^screenshot-(\d+)/); return m ? +m[1] : 0; });
const n = nums.length ? Math.max(...nums) + 1 : 1;
const fname = `screenshot-${n}-${label}.png`;
const outPath = join(shotDir, fname);

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const DBG_PORT = 9224;

const proc = spawn(EDGE, [
  `--remote-debugging-port=${DBG_PORT}`,
  '--headless', '--disable-gpu', '--no-sandbox',
  '--disable-extensions',
  `--window-size=${w},${h}`,
  url,
], { stdio: 'ignore', detached: false });

const delay = ms => new Promise(r => setTimeout(r, ms));
await delay(3500);

const targets = await new Promise((res, rej) => {
  http.get(`http://localhost:${DBG_PORT}/json`, r => {
    let d = ''; r.on('data', c => d += c);
    r.on('end', () => { try { res(JSON.parse(d)); } catch(e) { rej(e); } });
  }).on('error', rej);
});

const target = targets.find(t => t.type === 'page');
if (!target) throw new Error('No page target found');

const ws = new WebSocket(target.webSocketDebuggerUrl);
let msgId = 0;
const pending = new Map();

ws.addEventListener('message', ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  }
});

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++msgId;
  pending.set(id, { resolve, reject });
  ws.send(JSON.stringify({ id, method, params }));
});

await new Promise(r => ws.addEventListener('open', r));

// Set exact viewport
await send('Emulation.setDeviceMetricsOverride', {
  width: w, height: h, deviceScaleFactor: 1, mobile: false
});
await delay(500);

const { data } = await send('Page.captureScreenshot', {
  format: 'png', captureBeyondViewport: false
});

writeFileSync(outPath, Buffer.from(data, 'base64'));
console.log(`Saved: ${outPath}`);

ws.close();
proc.kill();
process.exit(0);
