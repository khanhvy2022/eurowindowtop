import posts from "@/data/blogPosts.json";

export interface BlogPost {
  year: string;
  month: string;
  slug: string;
  /** Exact path used on Blogger, e.g. /2026/07/some-post.html — never change it. */
  path: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  labels: string[];
  image: string | null;
  content: string;
}

export const blogPosts = posts as BlogPost[];

/** Vietnamese-aware slug for label URLs: "Giới Thiệu" -> "gioi-thieu". */
export function labelToSlug(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllLabels(): { label: string; slug: string; count: number }[] {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const p of blogPosts) {
    for (const label of p.labels) {
      const slug = labelToSlug(label);
      const item = map.get(slug) ?? { label, slug, count: 0 };
      item.count++;
      map.set(slug, item);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function getPostByParts(year: string, month: string, slugWithExt: string) {
  return blogPosts.find((p) => p.path === `/${year}/${month}/${slugWithExt}`);
}

export function getPostsByLabelSlug(slug: string) {
  return blogPosts.filter((p) => p.labels.some((l) => labelToSlug(l) === slug));
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const others = blogPosts.filter((p) => p.path !== post.path);
  const scored = others
    .map((p) => ({ p, score: p.labels.filter((l) => post.labels.includes(l)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.published.localeCompare(a.p.published));
  const picked = scored.slice(0, limit).map((x) => x.p);
  for (const p of others) {
    if (picked.length >= limit) break;
    if (!picked.includes(p)) picked.push(p);
  }
  return picked;
}

export function formatDateVi(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  });
}
