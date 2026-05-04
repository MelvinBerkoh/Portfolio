export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  tech: string[];
  highlights: string[];
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
      "Capstone senior project that placed 3rd overall and earned certificates.",
    tech: [
      "Chrome MV3",
      "JavaScript",
      "Node.js",
      "Express",
      "OpenAI API",
      "HTML",
      "CSS",
      "DOM Parsing",
    ],
    highlights: [
      "Extracted visible webpage text using DOM traversal.",
      "Detected policy clauses such as data collection, arbitration, auto-renewal, tracking, refunds, and sensitive data.",
      "Highlighted risky clauses directly on live webpages.",
      "Connected the extension to a backend for AI-generated summaries.",
      "Cached summaries to reduce repeated API calls.",
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
    featured: true,
  },
];