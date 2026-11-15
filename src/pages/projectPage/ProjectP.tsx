import "./project.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import Stack from "../../components/stack/Stack";
import Contact from "../../components/contact/Contact";
import Foot from "../../components/fotter/Foot";
import { projects, type Category, type Status } from "../../data/projects";

type Filter = "all" | "featured" | Category | Status;

const filters: Filter[] = [
  "all",
  "featured",
  "hardware",
  "software",
  "game-dev",
  "completed",
  "in-progress",
  "graveyard",
];

const filterLabels: Record<Filter, string> = {
  all: "All",
  featured: "Featured",
  hardware: "Hardware",
  software: "Software",
  "game-dev": "Game Dev",
  completed: "Completed",
  "in-progress": "In Progress",
  graveyard: "Graveyard",
};

const ProjectP = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("featured");

  const renderData = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "hardware" || activeFilter === "software" || activeFilter === "game-dev") {
      return project.category === activeFilter;
    }
    return project.status === activeFilter;
  });

  return (
    <div className="p-page-main-cont">
      <h1 className="p-page-heading">Projects</h1>

      <div className="p-page-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "p-page-filter p-page-filter-active" : "p-page-filter"}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      <div className="p-page-cont">
        <div className="p-page-showcase-cont">
          {renderData.map((project) => {
            const page = project.hasPage ? `/blog/${project.postPath ?? project.slug}` : undefined;
            return (
              <article className="p-page-item" key={project.slug}>
                <div className="p-page-image-wrap">
                  {project.cover ? (
                    page ? (
                      <Link to={page} tabIndex={-1} aria-hidden="true">
                        <img src={project.cover} className="p-page-image" alt="" loading="lazy" />
                      </Link>
                    ) : (
                      <img src={project.cover} className="p-page-image" alt={`${project.title} project`} loading="lazy" />
                    )
                  ) : (
                    <div className="p-page-image p-page-image-placeholder" role="img" aria-label={`${project.title} image coming soon`}>
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="p-page-image-port">
                  <h2 className="p-page-title">{project.title}</h2>

                  <div className="p-page-links">
                    {page && <Link to={page}>{project.hasGuide ? "Guide" : "Overview"}</Link>}
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    ) : (
                      !page && <span className="p-page-coming-soon">Coming Soon</span>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        {project.category === "game-dev" ? "Play Demo" : project.category === "software" ? "Visit" : "Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Stack />
      <Contact />
      <Foot />
    </div>
  );
};

export default ProjectP;
