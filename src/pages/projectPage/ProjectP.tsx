import "./project.css";

import Stack from "../../components/stack/Stack";
import Contact from "../../components/contact/Contact";
import Foot from "../../components/fotter/Foot";

import { useState } from "react";

import keyboard from "../../assets/projectImage/keyboard.png";
import devboard from "../../assets/projectImage/devboard.png";
import imgA from "../../assets/projectImage/imgA.png";
import imgB from "../../assets/projectImage/imgB.png";
import drone from "../../assets/projectImage/drone.png";
import splitkeyboard from "../../assets/projectImage/splitkeyboard.png";
import keycaps from "../../assets/projectImage/keycaps.png";
import blinkyboard from "../../assets/projectImage/blinkyboard.png";
import hermes from "../../assets/projectImage/hermes.png";
import pathfinder from "../../assets/projectImage/pathfinder.png";
import rccar from "../../assets/projectImage/rccar.png";
import robodog from "../../assets/projectImage/robodog.png";
import hackpad from "../../assets/projectImage/hackpad.png";
import flightcontroller from "../../assets/projectImage/flightcontroller.png";

type Filter =
  | "all"
  | "featured"
  | "completed"
  | "in-progress"
  | "graveyard"
  | "hardware"
  | "software";

type Project = {
  title: string;
  github_url: string;
  image: string;
  demo: string;
  guide: string;
  tags: Filter[];
};

const filters: Filter[] = [
  "all",
  "featured",
  "completed",
  "in-progress",
  "graveyard",
  "hardware",
  "software",
];

const data: Project[] = [
  {
    title: "Custom Keyboard",
    github_url: "https://github.com/AYUSH-pro-grammer/keyboard",
    image: keyboard,
    demo: "",
    guide: "",
    tags: ["completed", "hardware", "featured"],
  },
  {
    title: "Devboard",
    github_url: "https://github.com/AYUSH-pro-grammer/devboard",
    image: devboard,
    demo: "",
    guide: "",
    tags: ["in-progress", "hardware", "featured"],
  },
  {
    title: "Advocate Manju Prajapati",
    github_url: "https://github.com/AYUSH-pro-grammer/advocate-manju-prajapati-v2",
    image: imgA,
    demo: "https://advocatemanjuprajapati.com",
    guide: "",
    tags: ["completed", "software", "featured"],
  },
  {
    title: "AM Divorce Lawyer",
    github_url: "https://github.com/AYUSH-pro-grammer/Divorce-Law-Firm",
    image: imgB,
    demo: "https://www.amdivorcelawyer.online",
    guide: "",
    tags: ["completed", "software", "featured"],
  },
  {
    title: "Drone",
    github_url: "",
    image: drone,
    demo: "",
    guide: "",
    tags: ["completed", "hardware", "featured"],
  },
  {
    title: "Split Keyboard",
    github_url: "https://github.com/AYUSH-pro-grammer/split-keyboard",
    image: splitkeyboard,
    demo: "",
    guide: "",
    tags: ["in-progress", "hardware"],
  },
  {
    title: "Keycaps",
    github_url: "https://github.com/AYUSH-pro-grammer/keycaps",
    image: keycaps,
    demo: "",
    guide: "",
    tags: ["in-progress", "hardware"],
  },
  {
    title: "Blinky Board",
    github_url: "https://github.com/AYUSH-pro-grammer/led-timer",
    image: blinkyboard,
    demo: "",
    guide: "",
    tags: ["completed", "hardware"],
  },
  {
    title: "Hermes",
    github_url: "https://github.com/AYUSH-pro-grammer/hermes",
    image: hermes,
    demo: "",
    guide: "",
    tags: ["in-progress", "hardware"],
  },
  {
    title: "Pathfinder",
    github_url: "https://github.com/AYUSH-pro-grammer/pathFinder",
    image: pathfinder,
    demo: "",
    guide: "",
    tags: ["in-progress", "hardware"],
  },
  {
    title: "RC Camera Car",
    github_url: "https://github.com/AYUSH-pro-grammer/rc-camera-car",
    image: rccar,
    demo: "",
    guide: "",
    tags: ["graveyard", "hardware"],
  },
  {
    title: "Robo Dog",
    github_url: "https://github.com/AYUSH-pro-grammer/robo-dog-esp32",
    image: robodog,
    demo: "",
    guide: "",
    tags: ["completed", "hardware"],
  },
  {
    title: "Hackpad",
    github_url: "https://github.com/AYUSH-pro-grammer/hackpad",
    image: hackpad,
    demo: "",
    guide: "",
    tags: ["completed", "hardware"],
  },
  {
    title: "Flight Controller",
    github_url: "https://github.com/AYUSH-pro-grammer/esp32-flight-controller",
    image: flightcontroller,
    demo: "",
    guide: "",
    tags: ["completed", "hardware"],
  },
];

const ProjectP = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("featured");

  const renderData =
    activeFilter === "all"
      ? data
      : data.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="p-page-main-cont">
      <h1 className="p-page-heading">Projects</h1>

      <div className="p-page-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              activeFilter === filter
                ? "p-page-filter p-page-filter-active"
                : "p-page-filter"
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>


<br/>
<br/>
      <div className="p-page-cont">
        <div className="p-page-showcase-cont">
          {renderData.map((project) => (
            <article className="p-page-item" key={project.title}>
              <div className="p-page-image-wrap">
                <img
                  src={project.image}
                  className="p-page-image"
                  alt={`${project.title} project`}
                />
              </div>

              <div className="p-page-image-port">
                <h2 className="p-page-title">{project.title}</h2>


                <div className="p-page-links">
                  {project.github_url ? (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  ) : (
                    <span className="p-page-coming-soon">Coming Soon</span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}

                  {project.guide && (
                    <a
                      href={project.guide}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Guide
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Stack />
      <Contact />
      <Foot />
    </div>
  );
};

export default ProjectP;