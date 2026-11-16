import { imgFor, lesson, type Guide } from "./types";

const i = imgFor("algoverse");

export const algoverseGuide: Guide = {
  source: "Case study",
  intro: [
    "AlgoVerse started as BugBash, a hackathon prototype of an AI tutor for data structures and algorithms. The idea was right but the foundations were fragile: sessions lived in server memory, the call screen had fake camera tiles, quiz answers reached the browser before you answered, any user could read anyone's data by changing an ID, and live API keys were committed to the repo.",
    "v1 is a rebuild into something dependable, private and honest about what it measures. This walks through the learner's journey and then the engineering that holds it up.",
  ],
  steps: [
    {
      title: "Home and the lobby",
      blocks: [
        "The home page states the promise in one line and shows a real, non-interactive preview of the room, built from the same components the room uses — so the preview can't drift from the product.",
        i("01-home", "Home page"),
        "The lobby works like a video call's pre-join screen: the tutor on the left with an optional microphone test (no permission prompt until you press it), and session setup on the right — topic, level, an optional learning goal, and text or text-plus-voice mode.",
        i("02-lobby", "Lobby"),
      ],
    },
    {
      title: "Check-in quiz and lesson",
      blocks: [
        "Three short questions tell the tutor where to start. Choosing an option only selects it; Check answer commits it. The correct option and explanation aren't in the page at all until the server has graded the answer, so they can't be read from developer tools.",
        i("03-room-checkin", "Check-in question with feedback"),
        "Then short lesson cards with worked examples. The tutor's opening adapts to the learner's level and remembers the goal from the lobby, and the stage indicator (Setup, Check-in, Learn, Practice, Review) always reflects the server's state.",
        i("04-room-learn", "Lesson cards"),
      ],
    },
    {
      title: "Practice with the tutor",
      blocks: [
        "Try it in the editor switches to Code mode: the problem beside a Monaco editor, with test input, output and results in a drawer. Asking for help follows a teaching ladder — the tutor first asks what you tried, then gives hints that get clearer one at a time, and won't hand over a full solution before you've made an attempt.",
        i("05-room-code", "Code mode: problem, editor, results and tutor chat"),
        "Run checks the public samples. Submit grades the exact code snapshot against every test, including hidden edge cases, in an isolated sandbox. An accepted answer moves the session to Review automatically.",
        i("06-room-accepted", "Accepted submission"),
      ],
    },
    {
      title: "Ending the session and the recap",
      blocks: [
        "End session always offers three choices: save and come back later, finish and see the recap, or keep going.",
        i("07-end-dialog", "End session dialog"),
        "The recap only shows what the data supports: scores with their denominators (or an explicit \"skipped\"), first and latest submission side by side, one concept to revisit with the evidence, and a next problem whose reason cites what was missed. With too little evidence it says \"General next step\" instead of inventing a weakness.",
        i("08-recap", "Recap"),
        i("09-dashboard", "Dashboard"),
      ],
    },
    {
      title: "Beyond the session",
      blocks: [
        "A searchable problem catalog (by title, topic, difficulty and status) opens the same workbench as the room, with a Submissions tab.",
        i("10-problems", "Problems catalog"),
        i("11-problem-workbench", "Problem workbench"),
        "Practice sets are built from the checked problem bank and ordered around concepts the learner missed — an optional AI assist may only pick IDs that exist in the catalog. Playgrounds are private scratch files with custom input and autosave.",
        i("12-practice-set", "Practice set preview"),
        i("13-playground", "Playground"),
        "Below 768 px the room shows one full-width panel at a time and keeps the message box above the on-screen keyboard.",
        i("14-mobile-lesson", "Room on a phone, lesson"),
        i("15-mobile-chat", "Room on a phone, chat"),
      ],
    },
    {
      title: "A judge that can't be fooled or abused",
      blocks: [
        "Every test case runs in its own throwaway Docker container: no network, read-only filesystem, an unprivileged user, all capabilities dropped. Each case gets 3 s of CPU, 256 MB of memory, 64 processes and 256 KB of output, and the container's environment is empty — tests prove an injected secret isn't visible inside.",
        "Verdicts are explicit: accepted, wrong answer, runtime error, syntax error, time limit, or not graded. A runner outage, an unknown problem or a problem with zero test cases can never become \"accepted\". Fork bombs, output floods and sleeps each map to a clear, tested verdict.",
        "The bank has 14 original problems. Every reference solution is run against every case before release, and every starter template must fail.",
        lesson("Hidden test cases store only pass/fail and timing — never their input, output or error text."),
      ],
    },
    {
      title: "A session engine that survives the real world",
      blocks: [
        "Sessions follow an explicit state machine: check-in → learn → practice → review → completed. Only defined transitions are allowed, and chatting never moves the stage.",
        "Every action carries a client-generated ID recorded in a ledger table, so a retry or double click is a no-op, and a row lock serialises two open tabs. A stale tab gets the current state back instead of silently overwriting it.",
        "Drafts save to the device on every keystroke and to the server after a pause; \"Saved\" appears only once the server confirms. Tutor replies are committed under a unique constraint, so retries can't produce two answers.",
      ],
    },
    {
      title: "AI that can't take the session down",
      blocks: [
        "With no API key the tutor is curated and deterministic: it recognises requests for hints, explanations, complexity and code review, follows the hint ladder, and gives feedback by parsing (never running) your code.",
        "With a key it calls an OpenAI-compatible model on the server. The prompt never contains hidden tests or the reference solution, and only includes your code when you tick Share my current code. The reply must parse into a strict schema — a timeout or malformed output keeps your message saved and offers Try again or a guided hint.",
        "Tutor text is rendered by a small Markdown renderer that builds React elements directly, never innerHTML, so model output can't inject markup.",
      ],
    },
    {
      title: "Private by default, and tested",
      blocks: [
        "The prototype's localStorage JWTs were replaced with opaque, revocable session cookies (HttpOnly, SameSite) — only a hash of each token is stored. Writes need a CSRF header and an allowed origin, every private route filters by owner (another user's ID returns not found), and sign-in, messages, runs and submits are rate-limited.",
        "The credentials the prototype had leaked were found with a scanner that prints only fingerprints, removed from the code, and documented with a rotation checklist.",
        "96 backend tests run against a real PostgreSQL database and the real sandbox, including concurrency (four identical submissions produce one) and failure paths. Playwright drives the full learner journey in Chrome, including a refresh mid-session, at five screen widths.",
        lesson("Honest numbers over impressive ones: no \"mastery\" percentages, scores always show their denominators, and recommendations say when they're general."),
      ],
    },
  ],
  next: [
    "Guided lessons for more topics (arrays, stacks and graphs have them today)",
    "Shared storage for rate limits so more than one API instance can run",
    "Email verification and password recovery before opening public sign-up",
    "Deploy it, and test live speech recognition and a real AI provider on real devices",
  ],
};
