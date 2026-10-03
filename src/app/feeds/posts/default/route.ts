import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const alt = searchParams.get("alt");

  // If requested as JSON (common in Blogger widgets)
  if (alt === "json") {
    return NextResponse.json({
      version: "1.0",
      encoding: "UTF-8",
      feed: {
        title: { $t: "Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành." },
        subtitle: { $t: "Giải pháp tổng thể về cửa và vách kính hàng đầu Việt Nam" },
        link: [
          { rel: "alternate", type: "text/html", href: SITE_URL },
          { rel: "self", type: "application/json", href: `${SITE_URL}/feeds/posts/default?alt=json` },
        ],
        author: [{ name: { $t: "Eurowindow" } }],
        entry: blogPosts.slice(0, 50).map((post) => ({
          title: { $t: post.title },
          summary: { $t: post.description },
          published: { $t: post.published },
          updated: { $t: post.updated },
          link: [{ rel: "alternate", type: "text/html", href: `${SITE_URL}${post.path}` }],
          category: post.labels.map((term) => ({ term })),
        })),
      },
    });
  }

  // Standard RSS/Atom XML response for feed readers and search crawlers
  const xmlItems = blogPosts
    .slice(0, 50)
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}${post.path}</link>
      <guid isPermaLink="true">${SITE_URL}${post.path}</guid>
      <pubDate>${new Date(post.published).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      ${post.labels.map((l) => `<category>${l}</category>`).join("")}
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Eurowindow - Tiên Phong. Kiến Tạo. Đồng Hành.</title>
    <link>${SITE_URL}</link>
    <description>Tin tức, dự án và giải pháp cửa vách kính hàng đầu Việt Nam</description>
    <language>vi</language>
    <atom:link href="${SITE_URL}/feeds/posts/default" rel="self" type="application/rss+xml"/>
    ${xmlItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
