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
  slug: "nyc-aquatics-enrollment-prediction",
  title: "NYC Aquatics Enrollment Prediction",
  category: "Data Science / Regression",
  summary:
    "A regression project that predicts enrollment numbers for NYC aquatics programs using borough, swimming pool, and class type data from NYC Open Data.",
  impact:
    "Built a complete data science workflow with data cleaning, one-hot encoding, multiple linear regression, model evaluation, and visual analysis.",
  tech: [
    "Python",
    "pandas",
    "NumPy",
    "scikit-learn",
    "matplotlib",
    "Jupyter Notebook",
  ],
  highlights: [
    "Cleaned a real NYC Open Data dataset for aquatics programming.",
    "Used borough, swimming pool, and class type as predictors for total registration.",
    "Applied one-hot encoding to convert categorical variables into model-ready features.",
    "Trained a multiple linear regression model to predict enrollment.",
    "Evaluated the model using R², MAE, and RMSE.",
    "Created visualizations comparing actual vs. predicted enrollment.",
  ],
  overview:
    "This project used NYC Open Data to predict enrollment numbers for aquatics programs across New York City. The goal was to understand whether program location, pool type, and class type could help predict total registration. I built a regression workflow that cleaned the dataset, selected relevant features, transformed categorical variables, trained a model, and evaluated how well it predicted enrollment.",
  techStack: ["Python", "Jupyter Notebook"],
  libraries: [
    {
      name: "pandas",
      description:
        "Used to load the dataset, clean missing values, select relevant columns, and prepare the data for modeling.",
    },
    {
      name: "NumPy",
      description:
        "Used for numerical operations during preprocessing and model preparation.",
    },
    {
      name: "scikit-learn",
      description:
        "Used for one-hot encoding, train/test splitting, linear regression modeling, and performance evaluation.",
    },
    {
      name: "matplotlib",
      description:
        "Used to create visualizations such as actual vs. predicted enrollment and feature impact charts.",
    },
  ],
  whatIBuilt: [
    "Loaded and cleaned the NYC aquatics programming dataset.",
    "Dropped incomplete rows from critical columns before training the model.",
    "Selected Borough, Swimming Pool, and Class Type as features because location, pool, and class category could influence enrollment.",
    "Converted categorical variables into binary columns using one-hot encoding.",
    "Trained a multiple linear regression model to predict Total Registration.",
    "Evaluated the model using R² Score, Mean Absolute Error, and Root Mean Squared Error.",
    "Created charts to compare predicted enrollment against actual enrollment.",
  ],
  engineeringDecisions: [
    "Used regression because the target variable, Total Registration, is numerical.",
    "Kept the first version focused on interpretable features instead of adding unnecessary complexity.",
    "Used one-hot encoding because the main predictors were categorical variables.",
    "Dropped incomplete rows rather than filling values because the missing data was in critical modeling columns.",
    "Used MAE and RMSE together so the model could be judged by average error and larger prediction mistakes.",
  ],
  challenges: [
    "Cleaning a real-world dataset with missing values.",
    "Turning categorical data into a format that a regression model could use.",
    "Choosing features that made practical sense for predicting enrollment.",
    "Interpreting model results clearly instead of only reporting numbers.",
    "Explaining which class types, pools, and boroughs had the strongest effect on predicted enrollment.",
  ],
  results: [
    "Cleaned the dataset down to 6,217 usable rows.",
    "Built a multiple linear regression model with an R² score of 0.5967.",
    "Achieved a Mean Absolute Error of 5.56, meaning predictions were off by about 6 registrations on average.",
    "Achieved a Root Mean Squared Error of 7.21, showing the typical size of larger prediction errors.",
    "Identified class type, pool location, and borough as meaningful factors in enrollment prediction.",
  ],
  limitations: [
    "The model only used borough, swimming pool, and class type, so other possible factors were not included.",
    "Rows with missing values were dropped, which reduced the dataset size.",
    "Linear regression may miss more complex relationships in the data.",
    "The project was completed as a notebook and presentation, not as a deployed web application.",
  ],
  nextSteps: [
    "Test additional models such as Random Forest Regression or Gradient Boosting.",
    "Add more features if available, such as season, time of day, age group, or attendance history.",
    "Improve the visualizations and create a cleaner public notebook.",
    "Add a GitHub README explaining the dataset, workflow, results, and limitations.",
    "Turn the notebook into a small dashboard or interactive report.",
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