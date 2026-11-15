import "./project.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

// The home page shows the top four featured projects.
const top = projects.filter((p) => p.featured).slice(0, 4);

const Project = () => {
  return (
    <div className="projectCont">
      <h1 className="projectTitle">Projects</h1>

      <div className="projectShowCaseCont">
        <div className="projectGridInner">
          {top.map((p) => (
            <div key={p.slug}>
              <img src={p.cover} className="imageProject" alt={p.title} loading="lazy" />
              <div className="imageContPort">
                <h1 className="titleProjeectIMg">{p.title}</h1>
                {p.hasPage ? (
                  <Link to={`/blog/${p.slug}`}>{p.hasGuide ? "Guide" : "View"}</Link>
                ) : (
                  <a href={p.demo ?? p.github} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projectFooterMore">
          <Link to="/projects">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
