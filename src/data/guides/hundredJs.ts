import { imgFor, lesson, type Guide } from "./types";

const i = imgFor("100js");

export const hundredJsGuide: Guide = {
  source: "Case study",
  intro: [
    "100JS started as a place for college students to upload coursework and side projects. It grew into a full-stack showcase where students publish work with screenshots, source code and live demos, and visitors explore projects and leave feedback.",
    "It's a team project, built with Divyanshu Prakash and Apish Rana. The latest version puts the gallery first and opens projects in a bottom sheet so visitors never lose their place.",
  ],
  steps: [
    {
      title: "Discovering projects",
      blocks: [
        "The gallery combines search across titles, descriptions and creators with categories and three sort orders. Search and filters live in the URL, so a filtered view can be shared or reopened. On desktop a navigation rail and the search stay close to the grid; on phones the cards stack under a compact top bar.",
        i("gallery-desktop", "The 100JS gallery"),
        "Search also matches people: typing a username returns that person's projects even when the name appears in no title or description.",
      ],
    },
    {
      title: "Opening a project and leaving feedback",
      blocks: [
        "A card opens a full-width bottom sheet with the title, creator and artwork, plus shortcuts to the discussion, copying the link and more work by the same creator. Escape closes it and returns keyboard focus to the card. Each project also has its own public page with sharing metadata.",
        "Guests can read discussions. Signed-in visitors can like, save and comment; authors can delete their own comments, and project owners and admins can moderate.",
        i("project-discussion", "A project discussion in the bottom sheet"),
      ],
    },
    {
      title: "Publishing and managing work",
      blocks: [
        "The submission form takes a title, description, screenshots, category, technologies, and source and demo links. A GitHub check flags private, missing or duplicate repositories. The dashboard holds a creator's projects and bookmarks, with editing and screenshot management.",
        i("project-submission", "The project submission form"),
        "Students can set a public profile with their name and optional GitHub, LinkedIn, Instagram, X and website links. The public profile response leaves out the account email.",
        i("profile-editor", "Editing public social links on a demo profile"),
      ],
    },
    {
      title: "Architecture",
      blocks: [
        "A Next.js frontend talks to a FastAPI backend on PostgreSQL (SQLite locally), with screenshots stored on Cloudinary. A background worker enriches new projects with GitHub repository data and ranks them, optionally using an AI review through OpenRouter with a heuristic fallback; internal review scores never appear in public responses.",
        "The feed returns small card responses with cursor pagination, and the browser fetches more pages on demand with SWR caching. Sign-in uses JWTs with bcrypt passwords and optional Google OAuth; edits and moderation are checked on the server. Alembic manages the schema.",
        "Bringing the old site across meant importing the real legacy data: 27 projects and their accounts, carrying over password hashes so existing logins keep working, and skipping same-repo duplicates. The import can be re-run safely.",
      ],
    },
    {
      title: "Making the first page fast",
      blocks: [
        "Next.js now includes the first 12 project cards in the homepage HTML, and a shared daily recommendation order lets the server cache that first page. Card frames reserve their space while images load, and Cloudinary serves responsive thumbnail sizes.",
        "In a throttled mobile test (Pixel 7 size, 4× CPU slowdown, 180 kB/s download) against the same 27-project dataset, the median time to the first project title dropped from 1.94 s to 0.18 s — about 91% faster — while the JavaScript loaded stayed the same.",
        lesson("Moving the first feed request to the server removed the page's dependence on JavaScript for showing projects: the first batch is readable even with JavaScript off."),
      ],
    },
    {
      title: "Verification",
      blocks: [
        "The backend suite passes 138 tests covering auth, the project APIs, search, ranking, the job queue, migrations and community features. Desktop and phone checks covered search, the bottom sheet, sign-in return, likes, comments and public social links, and the community migration was checked to preserve the existing 27 projects and 51 accounts.",
      ],
    },
  ],
};
