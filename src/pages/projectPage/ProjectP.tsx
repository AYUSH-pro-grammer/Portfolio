
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

type Category = "hardware" | "software" | "game-dev";

type Status = "completed" | "in-progress" | "graveyard";

type Filter =
  | "all"
  | "featured"
  | Category
  | Status;

type Project = {
  title: string;
  github_url: string;
  image?: string;
  demo?: string;
  guide?: string;
  category: Category;
  status: Status;
  featured: boolean;
};

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

const data: Project[] = [
  {
    title: "Custom Keyboard",
    github_url: "https://github.com/AYUSH-pro-grammer/keyboard",
    image: keyboard,
    category: "hardware",
    status: "completed",
    featured: true,
  },
  {
    title: "Devboard",
    github_url: "https://github.com/AYUSH-pro-grammer/devboard",
    image: devboard,
    category: "hardware",
    status: "in-progress",
    featured: true,
  },
  {
    title: "STM Devboard",
    github_url: "https://github.com/AYUSH-pro-grammer/stm-devboard",
    category: "hardware",
    status: "in-progress",
    featured: true,
  },
  {
    title: "ESP32 Devboard",
    github_url: "https://github.com/AYUSH-pro-grammer/esp32-devboard",
    image: devboard,
    category: "hardware",
    status: "in-progress",
    featured: true,
  },
  {
    title: "LoRa Board",
    github_url: "https://github.com/AYUSH-pro-grammer/lora",
    category: "hardware",
    status: "in-progress",
    featured: true,
  },
  {
    title: "Advocate Manju Prajapati",
    github_url:
      "https://github.com/AYUSH-pro-grammer/advocate-manju-prajapati-v2",
    image: imgA,
    demo: "https://advocatemanjuprajapati.com",
    category: "software",
    status: "completed",
    featured: true,
  },
  {
    title: "AM Divorce Lawyer",
    github_url:
      "https://github.com/AYUSH-pro-grammer/Divorce-Law-Firm",
    image: imgB,
    demo: "https://www.amdivorcelawyer.online",
    category: "software",
    status: "completed",
    featured: true,
  },
  {
    title: "Ninja - The Game",
    github_url: "https://github.com/AYUSH-pro-grammer/ninja-the-game",
    category: "game-dev",
    status: "completed",
    featured: true,
  },
  {
    title: "Cleanable",
    github_url: "https://github.com/AYUSH-pro-grammer/cleanable-thegame",
    category: "game-dev",
    status: "in-progress",
    featured: true,
  },
  {
    title: "Drone",
    github_url: "",
    image: drone,
    category: "hardware",
    status: "completed",
    featured: true,
  },
  {
    title: "Split Keyboard",
    github_url: "https://github.com/AYUSH-pro-grammer/split-keyboard",
    image: splitkeyboard,
    category: "hardware",
    status: "in-progress",
    featured: false,
  },
  {
    title: "Keycaps",
    github_url: "https://github.com/AYUSH-pro-grammer/keycaps",
    image: keycaps,
    category: "hardware",
    status: "in-progress",
    featured: false,
  },
  {
    title: "Blinky Board",
    github_url: "https://github.com/AYUSH-pro-grammer/led-timer",
    image: blinkyboard,
    category: "hardware",
    status: "completed",
    featured: false,
  },
  {
    title: "Hermes",
    github_url: "https://github.com/AYUSH-pro-grammer/hermes",
    image: hermes,
    category: "hardware",
    status: "in-progress",
    featured: false,
  },
  {
    title: "Pathfinder",
    github_url: "https://github.com/AYUSH-pro-grammer/pathFinder",
    image: pathfinder,
    category: "hardware",
    status: "in-progress",
    featured: false,
  },
  {
    title: "RC Camera Car",
    github_url: "https://github.com/AYUSH-pro-grammer/rc-camera-car",
    image: rccar,
    category: "hardware",
    status: "graveyard",
    featured: false,
  },
  {
    title: "Robo Dog",
    github_url: "https://github.com/AYUSH-pro-grammer/robo-dog-esp32",
    image: robodog,
    category: "hardware",
    status: "completed",
    featured: false,
  },
  {
    title: "Hackpad",
    github_url: "https://github.com/AYUSH-pro-grammer/hackpad",
    image: hackpad,
    category: "hardware",
    status: "completed",
    featured: false,
  },
  {
    title: "Flight Controller",
    github_url:
      "https://github.com/AYUSH-pro-grammer/esp32-flight-controller",
    image: flightcontroller,
    category: "hardware",
    status: "completed",
    featured: false,
  },
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
  const [activeFilter, setActiveFilter] =
    useState<Filter>("featured");

  const renderData = data.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;

    if (
      activeFilter === "hardware" ||
      activeFilter === "software" ||
      activeFilter === "game-dev"
    ) {
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
            className={
              activeFilter === filter
                ? "p-page-filter p-page-filter-active"
                : "p-page-filter"
            }
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      <div className="p-page-cont">
        <div className="p-page-showcase-cont">
          {renderData.map((project) => (
            <article
              className="p-page-item"
              key={project.title}
            >
              <div className="p-page-image-wrap">
                {project.image ? (
                  <img
                    src={project.image}
                    className="p-page-image"
                    alt={`${project.title} project`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="p-page-image p-page-image-placeholder"
                    role="img"
                    aria-label={`${project.title} image coming soon`}
                  >
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="p-page-image-port">
                <h2 className="p-page-title">
                  {project.title}
                </h2>

                <div className="p-page-links">
                  {project.github_url ? (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="p-page-coming-soon">
                      Coming Soon
                    </span>
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
