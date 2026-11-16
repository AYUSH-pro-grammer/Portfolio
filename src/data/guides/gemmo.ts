import { imgFor, lesson, type Guide } from "./types";

const i = imgFor("gemmo");

export const gemmoGuide: Guide = {
  source: "Case study",
  intro: [
    "Students learn from a mix of lecture videos, articles, PDFs and their own notes. General chatbots answer questions about that material confidently but without showing where the answer came from — and a wrong answer looks exactly like a right one.",
    "Gemmo turns that material into a study workspace with three goals: keep answers honest (every claim links to its passage), turn reading into practice from the same material, and never lose work. I built it solo — product design, frontend, backend, database and tests.",
  ],
  steps: [
    {
      title: "Landing and library",
      blocks: [
        "The landing page explains the loop — bring material, check the evidence, practise — and links to a read-only example notebook that works without an account.",
        i("landing-top", "Landing page"),
        "After signing in, the library lists notebooks with their source count and last activity. They can be created, renamed, searched, sorted and deleted, and deleting explains exactly what goes with it.",
        i("dashboard", "Notebook library"),
      ],
    },
    {
      title: "The workspace",
      blocks: [
        "The layout borrows from Google Meet: sources on the left, the conversation in the middle, a Studio of practice tools on the right, and persistent controls at the bottom (Sources, Ask, Studio, Focus).",
        "Clicking a citation chip opens that excerpt with the quoted words highlighted — with a timestamp and Watch from here for videos, the page for PDFs, and the section heading for articles.",
        i("workspace-citation", "Workspace with a cited answer and the highlighted excerpt"),
        "Focus hides both side panels and restores the previous layout when turned off.",
        i("focus-mode", "Focus mode"),
      ],
    },
    {
      title: "Adding sources",
      blocks: [
        "Four source types: YouTube (captions, cited by timestamp), article URLs (main text, cited by section), text PDFs up to 15 MB (cited by page) and pasted text.",
        i("add-source", "Add a source dialog"),
        "Imports run as background jobs, so you can keep working or leave. When one fails, the source says why and offers a specific next step — here a video has no captions, so Gemmo offers another link or pasting the transcript.",
        i("import-failed", "A failed import with recovery options"),
      ],
    },
    {
      title: "How a question becomes a cited answer",
      blocks: [
        "Each question carries a client-generated request ID with a unique index, so a double click or retry returns the same exchange instead of a second question.",
        "Each source is split into excerpts with a stable ID and a locator (timestamp, page or section). PostgreSQL full-text search (tsvector with a GIN index) picks the most relevant excerpts from the sources you selected, and only those numbered excerpts go to the model, which must reply in JSON with [n] markers and short quotes.",
        "The server then drops any marker that doesn't map to a retrieved excerpt, keeps a quote only if it really appears in that excerpt, renumbers what's left and stores each citation as a snapshot. An answer with no surviving citation is shown as \"not enough evidence\" rather than as fact.",
        lesson("Making AI answers trustworthy turned out to be a server problem, not a prompt problem: the model sometimes invents marker numbers or misquotes, so every citation is checked."),
      ],
    },
    {
      title: "Studio: practise from the same material",
      blocks: [
        "Quiz: multiple choice with a score, explanations and a link to the supporting excerpt for every question. Attempts are saved and missed questions can be reviewed.",
        i("quiz-review", "Quiz review"),
        "Flashcards: reveal, shuffle, and Again / Got it with progress saved on the server.",
        i("flashcards", "Flashcards"),
        "Coding exercise: a Python problem generated from the material in a CodeMirror editor. Run checks the visible examples; Submit is graded on the server against hidden tests.",
        i("coding-accepted", "Coding exercise with an accepted submission"),
        "Report: a summary, study guide or custom brief, rendered as Markdown with citations and downloadable as a .md file.",
        i("report", "Study guide report"),
      ],
    },
    {
      title: "A job queue in PostgreSQL",
      blocks: [
        "Imports, answers and generations take seconds to minutes and call unreliable third parties, so they run as jobs rather than inside web requests.",
        "Workers claim jobs with FOR UPDATE SKIP LOCKED so several can run without double-processing. A partial unique index makes a retry or double click a no-op while the first attempt is still active. Transient failures retry with exponential backoff; permanent ones (no captions, invalid key, model not found) fail at once with a clear message. Jobs stuck too long go back to the queue.",
        "Keeping the queue in Postgres means one dependency to run and back up, and a job is created in the same transaction as the row it belongs to.",
        lesson("Durable jobs beat streaming here: streaming looks faster, but a learner who refreshes mid-answer would lose it."),
      ],
    },
    {
      title: "Exercises that prove themselves",
      blocks: [
        "A generated coding problem is only saved if its reference solution reproduces every worked example and at least three hidden tests on the real code runner. Problems that fail are retried, never shown. Hidden inputs and the reference solution never reach the browser.",
        lesson("Early generated problems sometimes had wrong expected outputs. Running the reference solution against every test before saving removed that whole class of bug."),
      ],
    },
    {
      title: "Bring your own key, and security",
      blocks: [
        "Learners connect their own OpenRouter, Claude or OpenAI key and choose a model, with a Test connection button. Keys are encrypted per user with Fernet and never sent back to the browser. Accounts can also link Google sign-in (OAuth with PKCE).",
        i("settings", "API settings"),
        "Sessions are random tokens in HttpOnly cookies with only a hash stored, passwords use argon2, every write needs a CSRF token plus an origin check, and another user's notebook returns 404.",
        "Article URLs are fetched through a guarded client that checks the resolved IP at connect time — blocking private, loopback and cloud-metadata addresses — and re-checks every redirect.",
      ],
    },
    {
      title: "Responsive layouts and testing",
      blocks: [
        "From 1200 px both panels sit beside the conversation; between 768 and 1200 px, one panel at a time; on phones Sources, Ask and Studio become full-width views and wide code scrolls inside its own box.",
        i("tablet-1024", "Laptop and tablet layout at 1024 px"),
        i("phone-ask", "Phone: conversation"),
        i("phone-citation", "Phone: cited excerpt"),
        i("phone-coding", "Phone: coding exercise"),
        "114 backend tests run against a real PostgreSQL database with deterministic stand-ins for the AI, transcripts and code runner. 19 Playwright tests drive the full flow — sign up, import, cited answer, quiz, coding exercise, refresh — plus every failure path and four screen widths.",
        lesson("Layout bugs hide at specific widths: long code lines overflowed the page at 390 and 768 px until the grid used minmax(0, 1fr). Automated layout tests now catch it."),
      ],
    },
  ],
  next: [
    "Swap keyword search for embeddings (for example pgvector) so paraphrased questions match",
    "Languages beyond Python for coding exercises",
    "Stream answers word by word instead of polling",
    "OCR for scanned PDFs",
    "Host the web app, API, worker and database",
  ],
};
