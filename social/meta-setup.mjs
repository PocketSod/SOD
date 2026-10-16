/**
 * meta-setup.mjs — one-time setup for social/publish.mjs (run in your own terminal)
 *
 *   node social/meta-setup.mjs
 *
 * Prompts for your Meta App ID, App Secret and a short-lived user token from Graph API Explorer,
 * swaps it for a non-expiring Page token, finds the Page and linked Instagram account, and stores
 * META_PAGE_TOKEN / META_PAGE_ID / META_IG_ID as GitHub Actions secrets on PocketSod/SOD via gh.
 * Tokens are never printed or written to disk.
 */
import { createInterface } from 'readline';
import { execFileSync } from 'child_process';

const GRAPH = 'https://graph.facebook.com/v26.0';
const REPO = 'PocketSod/SOD';
const GH = process.platform === 'win32' ? 'C:/Program Files/GitHub CLI/gh.exe' : 'gh';

function ask(question, hidden = false) {
  const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  if (hidden) rl._writeToOutput = s => { if (s.includes(question)) process.stdout.write(s); };
  return new Promise(resolve => rl.question(question, a => { rl.close(); if (hidden) console.log(); resolve(a.trim()); }));
}

async function graphGet(path, params) {
  const res = await fetch(`${GRAPH}/${path}?${new URLSearchParams(params)}`);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) throw new Error(`${path}: ${json.error?.message ?? res.status}`);
  return json;
}

async function pickPage(userToken) {
  const { data } = await graphGet('me/accounts', { fields: 'id,name,access_token,instagram_business_account{id,username}', access_token: userToken });
  if (!data?.length) throw new Error('No Facebook Pages found. Grant pages_show_list for the PocketSod Page and try again.');
  data.forEach((p, i) => console.log(`  ${i + 1}. ${p.name} (${p.id})`));
  const choice = data.length === 1 ? 1 : Number(await ask('Which Page? Enter its number: '));
  const page = data[choice - 1];
  if (!page) throw new Error('Invalid choice');
  return page;
}

function setSecret(name, value) {
  const ghToken = execFileSync(GH, ['auth', 'token', '--user', 'PocketSod'], { encoding: 'utf8' }).trim();
  execFileSync(GH, ['secret', 'set', name, '--repo', REPO], { input: value, env: { ...process.env, GH_TOKEN: ghToken }, stdio: ['pipe', 'ignore', 'inherit'] });
  console.log(`  saved ${name}`);
}

async function main() {
  const appId = await ask('Meta App ID: ');
  const appSecret = await ask('Meta App Secret (hidden): ', true);
  const shortToken = await ask('User token from Graph API Explorer (hidden): ', true);

  const { access_token: longToken } = await graphGet('oauth/access_token', {
    grant_type: 'fb_exchange_token', client_id: appId, client_secret: appSecret, fb_exchange_token: shortToken,
  });
  const page = await pickPage(longToken);
  const ig = page.instagram_business_account;
  console.log(`Page: ${page.name} (${page.id})`);
  console.log(ig ? `Instagram: @${ig.username} (${ig.id})` : 'Instagram: none linked — posts will go to Facebook only until you link one and rerun this.');

  setSecret('META_PAGE_TOKEN', page.access_token);
  setSecret('META_PAGE_ID', page.id);
  if (ig) setSecret('META_IG_ID', ig.id);
  console.log('Done. The daily GitHub Action can now publish.');
}

main().catch(err => { console.error(`Setup failed: ${err.message}`); process.exit(1); });
