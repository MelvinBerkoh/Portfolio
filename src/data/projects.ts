export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "demo" | "presentation" | "other";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;

  tech: string[];
  highlights: string[];

  overview: string;
  techStack: string[];
  libraries: {
    name: string;
    description: string;
  }[];
  whatIBuilt: string[];
  engineeringDecisions: string[];
  challenges: string[];
  results: string[];
  limitations: string[];
  nextSteps: string[];
  links: ProjectLink[];

  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "policyscope",
    title: "PolicyScope",
    category: "Chrome Extension / AI Tool",
    summary:
      "A locally run Chrome extension prototype that helps users understand Terms of Service and privacy policy pages by detecting important clauses, organizing them by category, and generating plain-English AI summaries.",
    impact:
      "Senior capstone project that placed 3rd overall. Built and demonstrated as a local Chrome extension prototype.",
    tech: [
      "Chrome MV3",
      "JavaScript",
      "Node.js",
      "Express",
      "OpenAI API",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Built a local Chrome extension prototype for analyzing policy pages.",
      "Detected important policy topics such as data collection, billing, disputes, account access, and user rights.",
      "Created a popup UI for organizing detected clauses into readable categories.",
      "Connected selected policy text to a backend API for AI-generated plain-English summaries.",
      "Presented the project as a senior capstone and placed 3rd overall.",
    ],
    overview:
      "PolicyScope was built to make long online agreements easier to understand. Instead of expecting users to manually read through dense Terms of Service or privacy policy pages, the extension prototype scans policy text, identifies important clause categories, and presents the results in a simplified popup interface. The project focused on transparency, readability, and helping users quickly notice terms related to billing, data collection, legal disputes, account access, and content rights.",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "OpenAI API",
      "Chrome Extension Manifest V3",
    ],
    libraries: [
      {
        name: "Chrome Extension APIs",
        description:
          "Used to run content scripts, manage popup behavior, and communicate between the webpage, extension UI, and background logic.",
      },
      {
        name: "Express",
        description:
          "Used to create a lightweight backend API that received policy text and returned AI-generated summaries.",
      },
      {
        name: "OpenAI API",
        description:
          "Used to generate plain-English explanations of selected policy clauses.",
      },
      {
        name: "Figma",
        description:
          "Used during the design process to plan the extension interface and category layout.",
      },
    ],
    whatIBuilt: [
      "Implemented the browser-extension structure for scanning policy pages locally.",
      "Worked on the popup interface that displays detected policy categories and clause counts.",
      "Helped organize policy clause categories such as Data Collection, Data Sharing, Billing & Subscriptions, Legal & Disputes, Account & Access, and Content & User Rights.",
      "Connected frontend extension behavior with backend API logic for AI summaries.",
      "Helped debug the flow between content scripts, popup UI, background logic, and backend requests.",
    ],
    engineeringDecisions: [
      "Separated page scanning, clause detection, and highlighting logic so the extension was easier to debug.",
      "Used category-based detection so users could understand the type of risk instead of only seeing raw highlighted text.",
      "Kept the prototype local instead of publishing to the Chrome Web Store so the team could focus on core functionality for the capstone deadline.",
      "Used AI summaries as an explanation layer, not as the only source of detection, so the extension still had deterministic category output.",
      "Designed the popup around grouped categories to keep the interface readable even when many clauses were detected.",
    ],
    challenges: [
      "Filtering policy-related content from real webpages without grabbing too much unrelated page text.",
      "Making the popup UI readable while still showing useful category and clause information.",
      "Coordinating frontend extension behavior with backend API calls.",
      "Debugging Chrome extension message passing during local development.",
      "Balancing project scope with the capstone timeline.",
    ],
    results: [
      "Created a working local Chrome extension prototype that demonstrated the core PolicyScope concept.",
      "Built a UI that organized detected policy clauses into clear categories.",
      "Integrated AI-generated explanations to make dense policy language easier to understand.",
      "Presented the project successfully as a senior capstone.",
      "Placed 3rd overall in the capstone showcase.",
    ],
    limitations: [
      "The extension was not published to the Chrome Web Store.",
      "The prototype was demonstrated locally during development and presentation.",
      "Detection was based on structured matching logic and would need stronger classification for production use.",
      "A public demo video or hosted walkthrough still needs to be added.",
    ],
    nextSteps: [
      "Prepare the extension for Chrome Web Store deployment.",
      "Improve clause detection with a stronger classification model.",
      "Add user-controlled highlight colors and category toggles.",
      "Add persistent user settings for extension preferences.",
      "Create a short public demo video showing the extension running locally on a real policy page.",
    ],
    links: [
      {
        label: "GitHub Profile",
        href: "https://github.com/MelvinBerkoh",
        type: "github",
      },
    ],
    featured: true,
  },
  {
    slug: "coveytown-escape-room",
    title: "Covey.Town Escape Room",
    category: "Multiplayer Game Feature",
    summary:
      "A multiplayer escape room feature built into Covey.Town where 2–4 players join a lobby, solve puzzles, complete trivia, and interact with game areas.",
    impact:
      "Built inside a large existing TypeScript codebase with frontend and backend game-state logic.",
    tech: [
      "React",
      "TypeScript",
      "Phaser",
      "Tiled",
      "Chakra UI",
      "Game Controllers",
    ],
    highlights: [
      "Worked inside an existing team codebase instead of starting from scratch.",
      "Built multiplayer game flow for a 2–4 player escape room.",
      "Integrated puzzle interactions, trivia, countdown behavior, and scoring concepts.",
      "Connected frontend UI state with game-area controller logic.",
    ],
    overview:
      "The Covey.Town Escape Room project added a collaborative game experience to an existing virtual environment. The goal was to create a multiplayer activity where players could join a lobby, enter an escape room, solve puzzles, complete trivia, and work together under a timer. This project gave me experience working inside a larger codebase with existing patterns, controllers, and frontend/backend responsibilities.",
    techStack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    libraries: [
      {
        name: "Phaser",
        description:
          "Used as the game framework for interactive game areas and player-facing puzzle interactions.",
      },
      {
        name: "Tiled",
        description:
          "Used as the map editor for designing interactive spaces and placing game elements.",
      },
      {
        name: "Chakra UI",
        description:
          "Used for frontend layout and reusable UI components inside the Covey.Town interface.",
      },
    ],
    whatIBuilt: [
      "Worked on the escape room game-area flow and player interaction logic.",
      "Helped build lobby behavior for players joining and preparing to start the game.",
      "Integrated trivia and Caesar cipher puzzle interactions into the escape room experience.",
      "Worked on timer/countdown behavior to create urgency during gameplay.",
      "Connected UI behavior with game-area controller state in the existing architecture.",
    ],
    engineeringDecisions: [
      "Followed the existing Covey.Town controller pattern instead of inventing a separate game structure.",
      "Kept lobby logic separate from active gameplay logic so player state was easier to reason about.",
      "Used difficulty-based trivia scoring to make the game feel more rewarding.",
      "Designed puzzle interactions to fit into existing interactable game areas.",
      "Focused on incremental integration because the project lived inside a larger shared codebase.",
    ],
    challenges: [
      "Understanding the existing Covey.Town architecture before adding new features.",
      "Keeping multiplayer game state consistent across multiple players.",
      "Avoiding UI freezes when timers expired or players answered questions incorrectly.",
      "Making puzzle logic fit cleanly into an existing controller-based system.",
      "Coordinating frontend and backend changes across a team project.",
    ],
    results: [
      "Built a working multiplayer escape room concept inside Covey.Town.",
      "Added multiple puzzle types and game interactions.",
      "Improved my understanding of TypeScript, game-state architecture, and team-based development.",
      "Gained experience reading and modifying a large existing codebase.",
    ],
    limitations: [
      "The project was part of a course/team codebase, so public repository access may be limited.",
      "A public live deployment is not currently available.",
      "A short demo video would make this project easier for recruiters to evaluate.",
    ],
    nextSteps: [
      "Add a public demo video showing the full gameplay flow.",
      "Improve onboarding instructions for new players.",
      "Add more randomized puzzles for replayability.",
      "Write tests for game-state transitions and timer behavior.",
    ],
    links: [
      {
        label: "GitHub Profile",
        href: "https://github.com/MelvinBerkoh",
        type: "github",
      },
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
    ],
    highlights: [
      "Cleaned and prepared real-world datasets for modeling.",
      "Performed exploratory data analysis with visualizations.",
      "Trained and evaluated machine learning models.",
      "Explained results using metrics such as accuracy, precision, recall, F1-score, and ROC-AUC.",
    ],
    overview:
      "This project focused on building a complete machine learning workflow from raw data to model evaluation. The goal was not only to train a model, but also to clean the data, understand the features, evaluate model performance, and explain the results clearly.",
    techStack: ["Python", "Jupyter Notebook"],
    libraries: [
      {
        name: "pandas",
        description:
          "Used for loading, cleaning, filtering, and transforming tabular data.",
      },
      {
        name: "scikit-learn",
        description:
          "Used for train/test splitting, preprocessing, model training, and evaluation metrics.",
      },
      {
        name: "matplotlib",
        description:
          "Used to create visualizations for exploratory data analysis and result explanation.",
      },
    ],
    whatIBuilt: [
      "Built a notebook workflow for cleaning and preparing the dataset.",
      "Handled missing values and prepared features for model training.",
      "Created visualizations to understand patterns in the data.",
      "Trained models using a train/test split.",
      "Evaluated model performance using multiple metrics instead of relying on accuracy alone.",
    ],
    engineeringDecisions: [
      "Used a structured notebook flow so the analysis could be followed from data loading to evaluation.",
      "Evaluated multiple metrics because accuracy alone can hide poor model performance.",
      "Separated preprocessing from model evaluation to keep the workflow easier to explain.",
      "Used visualizations to support conclusions instead of only reporting numbers.",
    ],
    challenges: [
      "Handling messy or incomplete data.",
      "Choosing useful features without overfitting.",
      "Explaining model results clearly in a way that non-technical readers could still understand.",
      "Balancing code, charts, and written interpretation inside the notebook.",
    ],
    results: [
      "Completed an end-to-end machine learning workflow.",
      "Improved my ability to clean data and prepare features.",
      "Practiced model evaluation using real metrics.",
      "Built stronger technical communication skills through written analysis.",
    ],
    limitations: [
      "The project currently works best as a notebook, not a deployed application.",
      "The GitHub repository should include a cleaner README and final result summary.",
      "Additional tuning and feature-importance analysis would make the project stronger.",
    ],
    nextSteps: [
      "Add hyperparameter tuning.",
      "Compare more model types.",
      "Add feature-importance or SHAP analysis.",
      "Clean up the GitHub repository with a stronger README and project summary.",
    ],
    links: [
      {
        label: "GitHub Profile",
        href: "https://github.com/MelvinBerkoh",
        type: "github",
      },
    ],
    featured: true,
  },
];