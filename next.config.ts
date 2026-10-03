import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Blogger Label URLs: /search/label/:label -> /tin-tuc?label=:label (301 Permanent)
      {
        source: "/search/label/:label",
        destination: "/tin-tuc?label=:label",
        permanent: true,
      },
      // Blogger Legacy Page URLs: Preserve link equity from old static pages (301 Permanent)
      {
        source: "/p/sitemap.html",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/p/bieu-mau-lh.html",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/p/formnamecontact-form.html",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/p/anh-du-an.html",
        destination: "/cong-trinh",
        permanent: true,
      },
      {
        source: "/p/anh-cua-eurowindow.html",
        destination: "/san-pham",
        permanent: true,
      },
      {
        source: "/p/hinh-anh-cua-eurowindow.html",
        destination: "/san-pham",
        permanent: true,
      },
      {
        source: "/p/anh-baner.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/p/blog-page.html",
        destination: "/tin-tuc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
