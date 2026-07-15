import { useEffect } from "react";

type Meta = {
  title: string;
  description: string;
  /** Path only, e.g. "/", "/about". Resolved relative to current origin. */
  path?: string;
  ogType?: "website" | "article";
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Set per-page SEO tags: title, description, canonical, Open Graph and Twitter.
 * Runs client-side; social crawlers without JS still see the static index.html defaults.
 */
export function usePageMeta({ title, description, path = "/", ogType = "website" }: Meta) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", ogType);
    upsertMeta('meta[property="og:url"]', "property", "og:url", path);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    upsertCanonical(path);
  }, [title, description, path, ogType]);
}
