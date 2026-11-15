// The blog is served from the "blog." subdomain in production, and from /blog on
// the main site (and locally). These helpers build links that work in both places.
export const isBlogHost = window.location.hostname.split(".")[0] === "blog";

export const blogHref = (slug = "") =>
  isBlogHost ? `/${slug}` : slug ? `/blog/${slug}` : "/blog";

export const mainSiteHref = (path = "/") =>
  isBlogHost
    ? `${window.location.protocol}//${window.location.host.replace(/^blog\./, "www.")}${path}`
    : path;
