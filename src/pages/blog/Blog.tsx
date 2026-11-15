import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./blog.css";
import BlogNav from "./BlogNav";
import { projects, statusLabels, type Category, type Project } from "../../data/projects";
import { blogHref, mainSiteHref } from "../../lib/blog";

type Entry = {
  key: string;
  href: string;
  external: boolean;
  title: string;
  text: string;
  cover?: string;
  hasGuide: boolean;
  draft: boolean;
  label: string;
  search: string;
};

const fromProject = (p: Project): Entry => {
  // Software sites have no blog page — their card opens the live site.
  const external = !p.hasPage;
  return {
    key: p.slug,
    href: external ? p.demo ?? p.github ?? "#" : blogHref(p.postPath ?? p.slug),
    external,
    title: p.title,
    text: p.tagline,
    cover: p.cover,
    hasGuide: !!p.hasGuide,
    draft: !!p.guideDraft,
    label: statusLabels[p.status],
    search: [p.title, p.tagline, p.category, ...(p.tech ?? [])].join(" ").toLowerCase(),
  };
};

const sectionDefs: { id: Category; title: string }[] = [
  { id: "hardware", title: "Hardware" },
  { id: "software", title: "Software" },
  { id: "game-dev", title: "Game Dev" },
];

const sections = sectionDefs.map((s) => ({
  ...s,
  entries: projects
    .filter((p) => p.category === s.id && (p.hasPage || p.demo || p.github))
    .map(fromProject),
}));

const totalAll = sections.reduce((n, s) => n + s.entries.length, 0);

type View = "all" | Category;

function Badge({ e }: { e: Entry }) {
  if (e.external) return <span className="bl-badge bl-badge-plain">Live site ↗</span>;
  if (e.hasGuide) return <span className="bl-badge bl-badge-guide">● Guide</span>;
  if (e.draft) return <span className="bl-badge bl-badge-none">◐ Guide in progress</span>;
  return <span className="bl-badge bl-badge-none">○ No guide yet</span>;
}

function Card({ e }: { e: Entry }) {
  const body = (
    <>
      {e.cover ? (
        <img className="bl-card-img" src={e.cover} alt="" loading="lazy" />
      ) : (
        <div className="bl-card-img" aria-hidden="true" />
      )}
      <div className="bl-card-body">
        <h3 className="bl-card-title">{e.title}</h3>
        <p className="bl-card-text">{e.text}</p>
        <div className="bl-badges">
          <Badge e={e} />
          <span className="bl-badge bl-badge-plain">{e.label}</span>
        </div>
      </div>
    </>
  );
  return e.external ? (
    <a href={e.href} className="bl-card" target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <Link to={e.href} className="bl-card">
      {body}
    </Link>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [guidesOnly, setGuidesOnly] = useState(false);
  const [view, setView] = useState<View>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections
      .filter((s) => view === "all" || s.id === view)
      .map((s) => ({
        ...s,
        entries: s.entries.filter((e) => (!guidesOnly || e.hasGuide) && (!q || e.search.includes(q))),
      }));
  }, [query, guidesOnly, view]);

  const total = filtered.reduce((n, s) => n + s.entries.length, 0);

  const pick = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const views: { id: View; title: string; count: number }[] = [
    { id: "all", title: "All projects", count: totalAll },
    ...sections.map((s) => ({ id: s.id as View, title: s.title, count: s.entries.length })),
  ];

  return (
    <div className="bl-root">
      <BlogNav />

      <div className="bl-wrap bl-layout">
        {/* ───── Left sidebar (becomes a chip row on small screens) ───── */}
        <aside className="bl-side" aria-label="Blog sections">
          <p className="bl-side-label">Sections</p>
          <ul className="bl-side-views">
            {views.map((v) => (
              <li key={v.id}>
                <button
                  type="button"
                  className="bl-side-view"
                  aria-pressed={view === v.id}
                  onClick={() => pick(v.id)}
                >
                  <span>{v.title}</span>
                  <span className="bl-side-count">{v.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="bl-side-projects">
            {sections
              .filter((s) => view === "all" || s.id === view)
              .map((s) => (
                <div key={s.id}>
                  <p className="bl-side-label">{s.title}</p>
                  <ul className="bl-side-list">
                    {s.entries.map((e) => (
                      <li key={e.key}>
                        {e.external ? (
                          <a href={e.href} target="_blank" rel="noopener noreferrer">
                            {e.title} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          <Link to={e.href}>
                            {e.title}
                            {e.hasGuide && (
                              <span className="bl-side-dot" title="Has a guide" aria-label="has a guide" />
                            )}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </aside>

        <main className="bl-main">
          <header className="bl-hero">
            <p className="bl-kicker">Build logs &amp; guides</p>
            <h1 className="bl-title">BLOG</h1>
            <p className="bl-lede">
              Everything I've built — boards, robots, websites and games. Projects with a guide walk
              through the build step by step from my journal; the rest explain what the project is and
              how it works.
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
            <p className="bl-empty">Nothing matches. Try a chip name like ESP32 or STM32.</p>
          )}

          {filtered.map(
            (s) =>
              s.entries.length > 0 && (
                <section className="bl-section" key={s.id} id={s.id} aria-labelledby={`sec-${s.id}`}>
                  <div className="bl-section-head">
                    <h2 className="bl-section-title" id={`sec-${s.id}`}>
                      {s.title}
                    </h2>
                    <span className="bl-section-meta">{s.entries.length}</span>
                  </div>
                  <div className="bl-grid">
                    {s.entries.map((e) => (
                      <Card e={e} key={e.key} />
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
    </div>
  );
}
