export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  tech: string[];
  highlights: string[];
  problem: string;
  solution: string;
  role: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  nextSteps: string[];
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  links?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
};
export const projects: Project[] = [
  {
    slug: "policyscope",
    title: "PolicyScope",
    category: "Chrome Extension / AI Tool",
    summary:
      "A Chrome extension that helps users understand long Terms of Service and privacy policy pages by detecting risky clauses, highlighting them, and generating plain-English AI summaries.",
    impact:
      "Senior capstone project that placed 3rd overall. Built and demonstrated as a locally run Chrome extension prototype.",
    tech: [
      "Chrome MV3",
      "JavaScript",
      "Node.js",
      "Express",
      "OpenAI API",
      "HTML",
      "CSS",
      "DOM Parsing",
      "Regex Classification",
      "Browser Content Scripts",
    ],
    highlights: [
      "Extracted visible webpage text using DOM traversal.",
      "Detected policy clauses such as data collection, arbitration, auto-renewal, tracking, refunds, and sensitive data.",
      "Highlighted risky clauses directly on live webpages.",
      "Connected the extension to a backend for AI-generated summaries.",
      "Cached summaries to reduce repeated API calls.",
    ],
    problem:
      "Most people skip Terms of Service and privacy policy pages because they are long, dense, and hard to understand. Important clauses about data collection, auto-renewal, arbitration, refunds, and tracking are often buried inside pages users never fully read.",
    solution:
      "PolicyScope turns long policy pages into something easier to understand. The extension scans visible webpage text, detects risky clauses, highlights them directly on the page, organizes them by category, and uses an AI-backed backend to explain selected clauses in plain English.",
    role:
      "I worked across the extension logic, clause detection system, popup UI, highlighting behavior, backend API connection, AI summary flow, debugging, and presentation of the final product.",
    architecture: [
      "A Chrome MV3 content script scans the current webpage and extracts visible text nodes from the DOM.",
      "A detector module classifies text blocks into policy risk categories using structured matching logic.",
      "A highlighter module modifies the webpage only after detection, keeping DOM mutation separate from parsing and classification.",
      "The popup UI displays detected categories, clause counts, original text, and AI-generated summaries.",
      "A background service worker sends selected clause text to a Node/Express backend.",
      "The backend calls the OpenAI API and returns plain-English explanations to the extension.",
      "Summary caching reduces repeated API calls for the same clause text.",
    ],
    challenges: [
      "Avoiding messy DOM mutations by separating text extraction, detection, and highlighting responsibilities.",
      "Filtering out irrelevant webpage text from buttons, navigation, scripts, footers, and hidden elements.",
      "Designing detection categories that were useful without overcomplicating the user interface.",
      "Keeping the popup readable while showing original text, categories, counts, and AI summaries.",
      "Debugging Chrome extension message passing between content scripts, background scripts, popup UI, and backend API.",
    ],
    results: [
      "Built a working locally run Chrome extension prototype for detecting and organizing policy clauses.",
  "Created a popup interface that displayed detected categories and clause counts.",
  "Integrated AI-generated summaries to explain policy language in plain English.",
  "Presented the project as a senior capstone and placed 3rd overall.",
  "Demonstrated frontend, browser extension, backend API, and AI integration skills.",
    ],
    nextSteps: [
      "Prepare the extension for Chrome Web Store deployment.",
      "Improve detection accuracy with a stronger classification model instead of only regex-based matching.",
      "Add persistent settings so users can customize how the extension behaves.",
      "Create a polished public demo video showing the extension running locally on real policy pages.",
    ],
    screenshots: [
  {
    src: "/projects/policyscope/policyscope-overview.png",
    alt: "PolicyScope capstone overview showing project scope, product description, technologies, and popup interface",
    caption:
      "Capstone overview showing the PolicyScope goal, prototype scope, technologies, and popup UI for detected policy categories.",
  },
],
links: [
  {
    label: "View GitHub Profile",
    href: "https://github.com/MelvinBerkoh",
  },
],
    featured: true,
  },
  {
    slug: "coveytown-escape-room",
    title: "Covey.Town Escape Room",
    category: "Multiplayer Game Feature",
    summary:
      "A multiplayer escape room feature built into Covey.Town where 2–4 players solve puzzles, complete trivia, interact with game areas, and earn rewards.",
    impact:
      "Built inside a large existing TypeScript codebase with frontend and backend game-state logic.",
    tech: [
      "React",
      "TypeScript",
      "Phaser",
      "Tiled",
      "Chakra UI",
      "Game Controllers",
      "Multiplayer Logic",
    ],
    highlights: [
      "Built escape room and lobby controller logic.",
      "Supported 2–4 player multiplayer flow.",
      "Added timer/countdown behavior.",
      "Integrated trivia and Caesar cipher puzzle interactions.",
      "Worked across frontend UI and backend game logic.",
    ],
    problem:
      "Covey.Town supports virtual interaction, but our team wanted to add a more engaging collaborative activity that encouraged players to communicate, solve puzzles, and work together inside the environment.",
    solution:
      "We built an escape room game area where players could join a lobby, enter a multiplayer game session, complete puzzles, answer trivia, and earn rewards based on performance.",
    role:
      "I contributed to the game flow, frontend UI behavior, puzzle interactions, controller logic, and integration with the existing Covey.Town game area structure.",
    architecture: [
      "React and TypeScript powered the frontend game interface.",
      "Phaser and Tiled supported map-based interaction and game-area design.",
      "Game area controllers handled player state, lobby state, and game status.",
      "Trivia and Caesar cipher puzzles were integrated as interactive parts of the escape room.",
      "Timer and scoring logic helped create pressure and replayability.",
    ],
    challenges: [
      "Working inside a large existing codebase instead of starting from scratch.",
      "Keeping multiplayer state consistent across players.",
      "Connecting frontend UI changes to backend game-area logic.",
      "Making puzzle interactions understandable and responsive.",
    ],
    results: [
      "Created a working multiplayer escape room concept inside Covey.Town.",
      "Added multiple interactive puzzle types.",
      "Improved understanding of TypeScript architecture and controller-based game logic.",
      "Practiced team-based development, debugging, and documentation.",
    ],
    nextSteps: [
      "Add more randomized puzzles for replayability.",
      "Improve visual polish and onboarding instructions.",
      "Add stronger automated tests for game-state transitions.",
      "Create a demo video showing the full multiplayer flow.",
    ],
    featured: true,
  },
  {
    slug: "machine-learning-project",
    title: "Machine Learning Project",
    category: "Data Science / ML",
    summary:
      "A machine learning project involving data cleaning, exploratory data analysis, model training, and performance evaluation using real-world datasets.",
    impact:
      "Demonstrates Python, data analysis, model evaluation, and communication of technical results.",
    tech: [
      "Python",
      "pandas",
      "scikit-learn",
      "matplotlib",
      "Jupyter Notebook",
      "Classification",
      "Model Evaluation",
    ],
    highlights: [
      "Handled missing values and preprocessing.",
      "Performed exploratory data analysis.",
      "Built train/test machine learning pipelines.",
      "Evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC.",
      "Created visualizations to explain model behavior.",
    ],
    problem:
      "Raw datasets are often messy and difficult to use directly for prediction. The goal was to take a real dataset, clean it, understand its patterns, and build models that could make useful predictions.",
    solution:
      "I built a machine learning workflow that included preprocessing, exploratory analysis, model training, and evaluation using common classification and regression techniques.",
    role:
      "I worked on cleaning the data, selecting features, building the notebook workflow, training models, evaluating results, and explaining the performance using clear metrics and visualizations.",
    architecture: [
      "pandas was used for data loading, cleaning, and feature preparation.",
      "matplotlib was used for charts and exploratory visualizations.",
      "scikit-learn was used for train/test splitting, preprocessing, model training, and evaluation.",
      "Model results were compared using standard metrics such as accuracy, precision, recall, F1-score, and ROC-AUC.",
    ],
    challenges: [
      "Handling missing or inconsistent values in the dataset.",
      "Choosing useful features without overfitting.",
      "Explaining model performance clearly instead of only reporting scores.",
      "Balancing technical accuracy with readable analysis.",
    ],
    results: [
      "Built a complete machine learning notebook workflow.",
      "Practiced preprocessing, model training, and evaluation.",
      "Produced visualizations to support analysis.",
      "Improved ability to communicate model strengths and limitations.",
    ],
    nextSteps: [
      "Add hyperparameter tuning.",
      "Compare more model types.",
      "Add SHAP or feature-importance analysis.",
      "Turn the notebook into a cleaner GitHub project with a full README.",
    ],
    screenshots: [
  {
    src: "/projects/policyscope/popup.png",
    alt: "PolicyScope popup interface showing detected policy categories",
    caption: "Popup interface showing detected policy clause categories and summaries.",
  },
  {
    src: "/projects/policyscope/highlighted-page.png",
    alt: "PolicyScope highlighting risky policy clauses on a webpage",
    caption: "Live webpage highlighting for risky Terms of Service clauses.",
  },
  {
    src: "/projects/policyscope/summary-view.png",
    alt: "PolicyScope AI-generated summary view",
    caption: "AI-generated plain-English explanation for selected policy text.",
  },
],
links: [
  {
    label: "View GitHub",
    href: "https://github.com/MelvinBerkoh",
  },
],
    featured: true,
  },
];