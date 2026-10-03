/**
 * Canonical origin of the site.
 *
 * Must match the domain Google already indexes for the old Blogger blog
 * (https://www.eurowindow.top — with "www"), so canonical tags, sitemap and
 * structured data keep pointing at the same URLs after moving to Vercel.
 * Override with NEXT_PUBLIC_SITE_URL only if the primary domain changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.eurowindow.top"
).replace(/\/+$/, "");
