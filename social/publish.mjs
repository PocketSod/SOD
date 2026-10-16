/**
 * publish.mjs — post weekly cards to the PocketSod Facebook Page and Instagram
 *
 * Usage:
 *   node social/publish.mjs                 # publish every post dated today (America/New_York)
 *   node social/publish.mjs --id w1-en      # publish one post by id
 *   node social/publish.mjs --dry-run       # show what would be posted, call nothing
 *
 * Env: META_PAGE_TOKEN, META_PAGE_ID, META_IG_ID (META_IG_ID optional: skips Instagram if unset)
 * Posts come from social/weekly/posts.json. Images must already be live on pocketsod.com.
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const GRAPH = 'https://graph.facebook.com/v26.0';
const posts = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'weekly/posts.json'), 'utf8'));

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const onlyId = args.includes('--id') ? args[args.indexOf('--id') + 1] : null;
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(new Date());

const delay = ms => new Promise(r => setTimeout(r, ms));

async function graph(path, params, method = 'POST') {
  const body = new URLSearchParams({ ...params, access_token: process.env.META_PAGE_TOKEN });
  const url = method === 'GET' ? `${GRAPH}/${path}?${body}` : `${GRAPH}/${path}`;
  const res = await fetch(url, method === 'GET' ? {} : { method, body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) throw new Error(`${path}: ${json.error?.message ?? res.status}`);
  return json;
}

async function postToFacebook(post) {
  const { id } = await graph(`${process.env.META_PAGE_ID}/photos`, { url: post.image, caption: post.caption });
  return id;
}

async function postToInstagram(post) {
  const ig = process.env.META_IG_ID;
  const { id: container } = await graph(`${ig}/media`, { image_url: post.image, caption: post.caption });
  for (let i = 0; i < 20; i++) {
    const { status_code } = await graph(container, { fields: 'status_code' }, 'GET');
    if (status_code === 'FINISHED') break;
    if (status_code === 'ERROR' || i === 19) throw new Error(`Instagram container ${container} status ${status_code}`);
    await delay(3000);
  }
  const { id } = await graph(`${ig}/media_publish`, { creation_id: container });
  return id;
}

async function publish(post) {
  if (dryRun) return console.log(`[dry run] ${post.id} → ${post.image}\n${post.caption}\n`);
  console.log(`${post.id}: Facebook ${await postToFacebook(post)}`);
  if (process.env.META_IG_ID) console.log(`${post.id}: Instagram ${await postToInstagram(post)}`);
}

const due = posts.filter(p => (onlyId ? p.id === onlyId : p.date === today));
if (!due.length) console.log(onlyId ? `No post with id ${onlyId}` : `Nothing scheduled for ${today}`);
if (!dryRun && due.length && !(process.env.META_PAGE_TOKEN && process.env.META_PAGE_ID)) {
  console.error('META_PAGE_TOKEN and META_PAGE_ID must be set');
  process.exit(1);
}

let failed = false;
for (const post of due) {
  try { await publish(post); }
  catch (err) { failed = true; console.error(`${post.id} failed: ${err.message}`); }
}
process.exit(failed || (onlyId && !due.length) ? 1 : 0);
