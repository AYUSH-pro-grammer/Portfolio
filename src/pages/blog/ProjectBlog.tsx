import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./blog.css";
import BlogNav from "./BlogNav";
import {
  categoryLabels,
  getProject,
  pageProjects,
  statusLabels,
} from "../../data/projects";
import { guides } from "../../data/guides";
import type { GuideBlock } from "../../data/guides/types";
import { blogHref } from "../../lib/blog";

const pad = (n: number) => String(n).padStart(2, "0");

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Block({ block }: { block: GuideBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("img" in block)
    return (
      <figure className="pp-fig">
        <a href={block.img} target="_blank" rel="noopener noreferrer">
          <img src={block.img} alt={block.alt} loading="lazy" decoding="async" />
        </a>
        <figcaption>{block.alt}</figcaption>
      </figure>
    );
  return (
    <div className="pp-lesson">
      <strong>NOTE</strong>
      {block.lesson}
    </div>
  );
}

// Projects that get a generated page (the drone keeps its own hand-made post).
const browsable = pageProjects.filter((p) => !p.postPath);

export default function ProjectBlog() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const [active, setActive] = useState("guide");

  // Highlight the sidebar entry for the section currently on screen:
  // the last section whose top has scrolled past the top bar.
  useEffect(() => {
    const update = () => {
      const targets = document.querySelectorAll<HTMLElement>("#guide, .pp-step, #about");
      let current = "guide";
      targets.forEach((t) => {
        if (t.getBoundingClientRect().top <= 120) current = t.id;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} · Ayush`;
    return () => {
      document.title = "Ayush Kumar";
    };
  }, [slug, project]);

  if (!project || !project.hasPage) {
    return (
      <div className="bl-root">
        <BlogNav back />
        <main className="bl-wrap bl-hero">
          <h1 className="pp-title">Not found</h1>
          <p className="pp-tagline">There's no project page called “{slug}”.</p>
          <Link className="pp-btn" to={blogHref()}>
            See all projects
          </Link>
        </main>
      </div>
    );
  }

  if (project.postPath) return <Navigate to={blogHref(project.postPath)} replace />;

  const guide = guides[project.slug];
  const photoCount = guide
    ? guide.steps.reduce((n, s) => n + s.blocks.filter((b) => typeof b === "object" && "img" in b).length, 0)
    : 0;
  const hours = guide ? guide.totalHours ?? guide.steps.reduce((n, s) => n + (s.hours ?? 0), 0) : 0;

  const index = browsable.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? browsable[index - 1] : undefined;
  const next = index >= 0 && index < browsable.length - 1 ? browsable[index + 1] : undefined;

  return (
    <div className="bl-root">
      <BlogNav back />

      <div className="bl-wrap bl-layout">
        <aside className="bl-side pp-side" aria-label="On this page">
          <p className="bl-side-label">On this page</p>
          <ul className="bl-side-list pp-side-list">
            <li>
              <button type="button" className={active === "guide" ? "is-active" : ""} onClick={() => scrollToId("guide")}>
                Guide{!guide && <span className="pp-side-muted"> · not written</span>}
              </button>
            </li>
            {guide?.steps.map((st, n) => (
              <li key={st.title} className="pp-side-step">
                <button
                  type="button"
                  className={active === `step-${n + 1}` ? "is-active" : ""}
                  onClick={() => scrollToId(`step-${n + 1}`)}
                >
                  <span className="pp-toc-num">{pad(n + 1)}</span> {st.title}
                </button>
              </li>
            ))}
            <li>
              <button type="button" className={active === "about" ? "is-active" : ""} onClick={() => scrollToId("about")}>
                What is this?
              </button>
            </li>
          </ul>
          <p className="bl-side-label">More</p>
          <ul className="bl-side-list">
            <li>
              <Link to={blogHref()}>← All projects</Link>
            </li>
            {next && (
              <li>
                <Link to={blogHref(next.slug)}>Next: {next.title}</Link>
              </li>
            )}
          </ul>
        </aside>

      <main className="bl-main">
        <header className="pp-hero">
          <div>
            <p className="bl-kicker">
              {categoryLabels[project.category]} · {statusLabels[project.status]}
            </p>
            <h1 className="pp-title">{project.title}</h1>
            <p className="pp-tagline">{project.tagline}</p>
            {project.tech && (
              <div className="pp-chips">
                {project.tech.map((t) => (
                  <span className="pp-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="pp-links">
              {project.github && (
                <a className="pp-btn pp-btn-primary" href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              )}
              {project.demo && (
                <a className="pp-btn" href={project.demo} target="_blank" rel="noopener noreferrer">
                  {project.category === "game-dev" ? "Play ↗" : "Demo ↗"}
                </a>
              )}
            </div>
          </div>
          {project.cover && <img className="pp-cover" src={project.cover} alt={project.title} />}
        </header>

        <nav className="pp-jump" aria-label="On this page">
          <button type="button" onClick={() => scrollToId("guide")}>
            {guide ? "→ Guide" : "→ Guide (not written yet)"}
          </button>
          <button type="button" onClick={() => scrollToId("about")}>
            → What is this?
          </button>
        </nav>

        {/* ───── Guide ───── */}
        <section className="pp-section" id="guide" aria-labelledby="guide-title">
          <h2 className="pp-h2" id="guide-title">
            Guide
            {guide ? (
              <span className="bl-badge bl-badge-guide">● {guide.source ?? "From my build journal"}</span>
            ) : (
              <span className="bl-badge bl-badge-none">○ Not written yet</span>
            )}
          </h2>

          {guide ? (
            <>
              <div className="pp-prose">
                {guide.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="pp-stats">
                <div className="pp-stat">
                  <b>{guide.steps.length}</b>
                  <span>steps</span>
                </div>
                {hours > 0 && (
                  <div className="pp-stat">
                    <b>{hours}h</b>
                    <span>logged</span>
                  </div>
                )}
                <div className="pp-stat">
                  <b>{photoCount}</b>
                  <span>screenshots</span>
                </div>
              </div>

              <div className="pp-toc">
                <div className="pp-toc-head">CONTENTS</div>
                <ol>
                  {guide.steps.map((s, n) => (
                    <li key={s.title}>
                      <button type="button" onClick={() => scrollToId(`step-${n + 1}`)}>
                        <span className="pp-toc-num">{pad(n + 1)}</span>
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

              {guide.steps.map((s, n) => (
                <article className="pp-step" id={`step-${n + 1}`} key={s.title}>
                  <header className="pp-step-head">
                    <div>
                      <span className="pp-step-num">STEP {pad(n + 1)}</span>
                      <h3 className="pp-step-title">{s.title}</h3>
                    </div>
                    {(s.date || s.hours) && (
                      <span className="pp-step-meta">
                        {[s.date, s.hours ? `${s.hours}h` : null].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </header>
                  <div className="pp-step-body">
                    {s.blocks.map((b, k) => (
                      <Block block={b} key={k} />
                    ))}
                  </div>
                </article>
              ))}

              {guide.next && (
                <>
                  <h3 className="pp-h3">What's next</h3>
                  <ul className="pp-list">
                    {guide.next.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <div className="pp-notice">
              <p className="pp-notice-title">No guide for this project yet</p>
              <p>
                I haven't written a step-by-step build guide for this one. The
                overview below explains what it is and how it works
                {project.github ? (
                  <>
                    , and the full design files and code are on{" "}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    .
                  </>
                ) : (
                  "."
                )}
              </p>
            </div>
          )}
        </section>

        {/* ───── What is this? ───── */}
        <section className="pp-section" id="about" aria-labelledby="about-title">
          <h2 className="pp-h2" id="about-title">
            What is this?
          </h2>
          <div className="pp-prose">
            {(project.about ?? [project.tagline]).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {project.highlights && (
            <>
              <h3 className="pp-h3">Key parts</h3>
              <ul className="pp-list">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          )}

          {project.video && (
            <>
              <h3 className="pp-h3">See it working</h3>
              <video className="pp-video" src={project.video} controls muted playsInline preload="metadata" />
            </>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <>
              <h3 className="pp-h3">Images</h3>
              <div className="pp-gallery">
                {project.gallery.map((g) => (
                  <figure key={g.src}>
                    <a href={g.src} target="_blank" rel="noopener noreferrer">
                      <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
                    </a>
                    <figcaption>{g.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}
        </section>

        <nav className="pp-pager" aria-label="More projects">
          {prev && (
            <Link to={blogHref(prev.slug)}>
              <small>← Previous</small>
              {prev.title}
            </Link>
          )}
          {next && (
            <Link to={blogHref(next.slug)} className="pp-pager-next">
              <small>Next →</small>
              {next.title}
            </Link>
          )}
        </nav>

        <footer className="bl-footer">
          <span>© {new Date().getFullYear()} Ayush Kumar</span>
          <Link to={blogHref()}>All projects →</Link>
        </footer>
      </main>
      </div>
    </div>
  );
}
