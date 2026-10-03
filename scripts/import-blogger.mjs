// Export all Blogger posts (from the public JSON feed) into src/data/blogPosts.json
// Usage: node scripts/import-blogger.mjs
// Re-run any time before the DNS switch to pick up new posts.
import fs from "node:fs";
import path from "node:path";

const BLOG = "https://www.eurowindow.top";
const OUT = path.resolve("src/data/blogPosts.json");

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(text, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).trim() + "…";
}

// Make links to the old blog relative so they stay internal after the move.
function localizeLinks(html) {
  return html
    .replace(/https?:\/\/(www\.)?eurowindow\.top(?=[/"'?#])/gi, "")
    .replace(/(href=["'])(\/[^"']*?)\?m=1(["'])/gi, "$1$2$3");
}

// Blogger thumbnails are tiny (s72-c); request a larger version.
function biggerImage(url) {
  return url.replace(/\/s\d+(-c)?\//, "/s1200/").replace(/=s\d+(-c)?$/, "=s1200");
}

async function fetchAll() {
  const all = [];
  let start = 1;
  while (true) {
    const url = `${BLOG}/feeds/posts/default?alt=json&max-results=150&start-index=${start}`;
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`Feed ${res.status} at ${url}`);
    const data = await res.json();
    const entries = data.feed.entry || [];
    all.push(...entries);
    if (entries.length < 150) break;
    start += 150;
  }
  return all;
}

const entries = await fetchAll();

const posts = entries
  .map((e) => {
    const href = (e.link.find((l) => l.rel === "alternate") || {}).href;
    if (!href) return null;
    const u = new URL(href);
    const m = u.pathname.match(/^\/(\d{4})\/(\d{2})\/([^/]+)\.html$/);
    if (!m) return null;
    const content = (e.content || e.summary || { $t: "" }).$t;
    const firstImg = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    const thumb = e.media$thumbnail?.url;
    const image = thumb ? biggerImage(thumb) : firstImg ? firstImg[1] : null;
    return {
      year: m[1],
      month: m[2],
      slug: m[3],
      path: u.pathname,
      title: e.title.$t.trim(),
      description: excerpt(stripHtml(content)),
      published: e.published.$t,
      updated: e.updated.$t,
      labels: (e.category || []).map((c) => c.term),
      image,
      content: localizeLinks(content),
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.published.localeCompare(a.published));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(posts, null, 1), "utf8");
console.log(`Exported ${posts.length}/${entries.length} posts -> ${OUT}`);
