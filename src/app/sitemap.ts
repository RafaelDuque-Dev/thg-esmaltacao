import type { MetadataRoute } from "next";
import { company } from "@/data/company";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: company.url, changeFrequency: "monthly", priority: 1 }, { url: `${company.url}/privacidade/`, changeFrequency: "yearly", priority: 0.2 }]; }
