import "./App.css";
import "./wide.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ProjectP from "./pages/projectPage/ProjectP";
import ProjectA from "./pages/projectA/ProjectA";
import ProjectB from "./pages/projectB/ProjectB";
import StackPage from "./pages/stack/StackPage";
import ContactPage from "./pages/contact/ContactPage";
import { isBlogHost } from "./lib/blog";

// Blog pages are loaded on demand so the main portfolio stays light.
const Blog = lazy(() => import("./pages/blog/Blog"));
const ProjectBlog = lazy(() => import("./pages/blog/ProjectBlog"));
const DronePage = lazy(() => import("./pages/drone-blog/DronePage"));
const NstBot = lazy(() => import("./pages/blog-nst/NstBot"));

function SiteLayout() {
  return (
    <div className="body0body">
      <Navbar />
      <div className="contentOFconter">
        <Outlet />
      </div>
    </div>
  );
}

const Loading = () => <div style={{ minHeight: "100vh" }} />;

function App() {
  // blog.ayushpro1428.tech serves only the blog.
  if (isBlogHost) {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/drone" element={<DronePage />} />
            <Route path="/how-to-make-qotd-bot" element={<div className="body0body"><NstBot /></div>} />
            <Route path="/:slug" element={<ProjectBlog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectP />} />
            <Route path="/ProjectA" element={<ProjectA />} />
            <Route path="/ProjectB" element={<ProjectB />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/drone" element={<DronePage />} />
          <Route path="/blog/how-to-make-qotd-bot" element={<div className="body0body"><NstBot /></div>} />
          <Route path="/blog/:slug" element={<ProjectBlog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
