import { Link } from "react-router-dom";
import { blogHref, mainSiteHref } from "../../lib/blog";

type Props = { back?: boolean };

export default function BlogNav({ back = false }: Props) {
  return (
    <nav className="bl-nav" aria-label="Blog">
      <div className="bl-wrap bl-nav-inner">
        {back ? (
          <Link to={blogHref()}>← All projects</Link>
        ) : (
          <a href={mainSiteHref("/")}>← Portfolio</a>
        )}
        <Link to={blogHref()} className="bl-nav-brand">
          AYUSH/BLOG
        </Link>
        <a href={mainSiteHref("/projects")}>Projects</a>
      </div>
    </nav>
  );
}
