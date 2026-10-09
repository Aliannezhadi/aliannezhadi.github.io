
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aliannezhadi.github.io";

  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/en/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/de/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
