import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./blog.css";
import BlogNav from "./BlogNav";
import {
  pageProjects,
  statusLabels,
  type Category,
  type Project,
} from "../../data/projects";
import { blogHref, mainSiteHref } from "../../lib/blog";

type Entry = {
  key: string;
  href: string;
  title: string;
  text: string;
  cover?: string;
  hasGuide: boolean;
  draft?: boolean;
  label?: string;
  search: string;
};

const fromProject = (p: Project): Entry => ({
  key: p.slug,
  href: blogHref(p.postPath ?? p.slug),
  title: p.title,
  text: p.tagline,
  cover: p.cover,
  hasGuide: !!p.hasGuide,
  draft: !!p.guideDraft,
  label: statusLabels[p.status],
  search: [p.title, p.tagline, p.category, ...(p.tech ?? [])].join(" ").toLowerCase(),
});

const sections: { id: string; title: string; entries: Entry[] }[] = [
  {
    id: "hardware",
    title: "Hardware",
    entries: pageProjects.filter((p) => p.category === ("hardware" as Category)).map(fromProject),
  },
  {
    id: "game-dev",
    title: "Game Dev",
    entries: pageProjects.filter((p) => p.category === ("game-dev" as Category)).map(fromProject),
  },
];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [guidesOnly, setGuidesOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections.map((s) => ({
      ...s,
      entries: s.entries.filter(
        (e) => (!guidesOnly || e.hasGuide) && (!q || e.search.includes(q)),
      ),
    }));
  }, [query, guidesOnly]);

  const total = filtered.reduce((n, s) => n + s.entries.length, 0);

  return (
    <div className="bl-root">
      <BlogNav />

      <main className="bl-wrap">
        <header className="bl-hero">
          <p className="bl-kicker">Build logs &amp; guides</p>
          <h1 className="bl-title">BLOG</h1>
          <p className="bl-lede">
            Everything I've built — boards, robots and games. Projects with a
            guide walk through the build step by step from my journal; the rest
            explain what the project is and how it works.
          </p>

          <div className="bl-tools">
            <input
              type="search"
              className="bl-search"
              placeholder="Search projects, chips, tools…"
              aria-label="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="bl-toggle"
              aria-pressed={guidesOnly}
              onClick={() => setGuidesOnly((v) => !v)}
            >
              Only with guides
            </button>
          </div>
          <p className="bl-count" aria-live="polite">
            {total} {total === 1 ? "result" : "results"}
          </p>
        </header>

        {total === 0 && (
          <p className="bl-empty">Nothing matches “{query}”. Try a chip name like ESP32 or STM32.</p>
        )}

        {filtered.map(
          (s) =>
            s.entries.length > 0 && (
              <section className="bl-section" key={s.id} aria-labelledby={`sec-${s.id}`}>
                <div className="bl-section-head">
                  <h2 className="bl-section-title" id={`sec-${s.id}`}>
                    {s.title}
                  </h2>
                  <span className="bl-section-meta">{s.entries.length}</span>
                </div>
                <div className="bl-grid">
                  {s.entries.map((e) => (
                    <Link to={e.href} className="bl-card" key={e.key}>
                      {e.cover ? (
                        <img className="bl-card-img" src={e.cover} alt="" loading="lazy" />
                      ) : (
                        <div className="bl-card-img" aria-hidden="true" />
                      )}
                      <div className="bl-card-body">
                        <h3 className="bl-card-title">{e.title}</h3>
                        <p className="bl-card-text">{e.text}</p>
                        <div className="bl-badges">
                          {e.hasGuide ? (
                            <span className="bl-badge bl-badge-guide">● Guide</span>
                          ) : e.draft ? (
                            <span className="bl-badge bl-badge-none">◐ Guide in progress</span>
                          ) : (
                            <span className="bl-badge bl-badge-none">○ No guide yet</span>
                          )}
                          {e.label && <span className="bl-badge bl-badge-plain">{e.label}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ),
        )}

        <footer className="bl-footer">
          <span>© {new Date().getFullYear()} Ayush Kumar</span>
          <a href={mainSiteHref("/contact")}>Get in touch →</a>
        </footer>
      </main>
    </div>
  );
}
