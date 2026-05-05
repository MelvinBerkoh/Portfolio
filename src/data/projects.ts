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

  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
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
    "A cooperative multiplayer escape room built into Covey.Town where players join a lobby, solve synchronized puzzles, race against a timer, and earn a final performance grade.",
  impact:
    "Course/team project built inside a large existing TypeScript codebase with frontend game state logic, multiplayer flow, puzzle UIs, AWS-backed hosting support, scoring, and timer-based gameplay.",
  tech: [
    "React",
    "TypeScript",
    "Phaser",
    "Tiled",
    "Chakra UI",
    "AWS",
    "Game Controllers",
  ],
  highlights: [
    "Built a multiplayer lobby flow for players joining and starting the escape room.",
    "Integrated Caesar Cipher, Chess Puzzle, and Trivia mini-games into the escape room experience.",
    "Worked on frontend behavior and game state logic for the escape room system.",
    "Added scoring, countdown behavior, player count tracking, and reward feedback.",
    "Used AWS to support backend hosting during development/testing.",
    "Worked inside an existing Covey.Town codebase instead of building a standalone app.",
  ],
  overview:
    "The Covey.Town Escape Room project added a cooperative game experience to an existing virtual environment. Covey.Town already supported social interaction, but our project focused on adding a more collaborative activity for groups larger than two players. Players enter an escape room lobby, wait for enough players to join, then work together to solve mini-games before time runs out. The experience includes puzzle UIs, scoring, player tracking, timer behavior, AWS-supported backend hosting, and a final reward screen based on score and remaining time.",
  techStack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  libraries: [
    {
      name: "Phaser",
      description:
        "Used as the game framework for interactive areas and player-facing game behavior inside the Covey.Town environment.",
    },
    {
      name: "Tiled",
      description:
        "Used as the map editor for designing the playable room layout and placing interactive puzzle areas.",
    },
    {
      name: "Chakra UI",
      description:
        "Used for reusable interface components and modal-style game screens.",
    },
    {
      name: "AWS",
      description:
        "Used to support backend hosting during development and testing.",
    },
    {
      name: "Covey.Town Game Area Controllers",
      description:
        "Used to connect player state, lobby state, mini-game progress, and escape room status to the existing multiplayer architecture.",
    },
  ],
  whatIBuilt: [
    "Worked on frontend implementation and game state logic for the escape room experience.",
    "Worked on the escape room lobby flow, including player count display, waiting status, and start-game behavior.",
    "Helped build the Caesar Cipher puzzle UI where players decode an encrypted message using letter substitutions.",
    "Helped build the Chess Logic Puzzle UI where players place pieces according to clue-based constraints.",
    "Helped integrate Trivia gameplay into the overall escape room flow.",
    "Connected mini-game progress to scoring and end-of-game reward behavior.",
    "Helped debug UI flow issues across lobby state, puzzle state, timer behavior, and end-of-game state.",
  ],
  engineeringDecisions: [
    "Kept the lobby flow separate from active gameplay so player readiness and game progress were easier to reason about.",
    "Used separate puzzle screens for Caesar Cipher, Chess Puzzle, and Trivia so each mini-game could have its own interaction model.",
    "Connected puzzle completion to a shared scoring model so the escape room could track overall progress.",
    "Used timer-based gameplay to create urgency and make the experience feel like a real escape room.",
    "Reused Covey.Town's existing GameArea structure instead of forcing a separate standalone architecture.",
    "Used shared game state interfaces so multiplayer interactions could stay synchronized across players.",
  ],
  challenges: [
    "Understanding and extending a large existing TypeScript codebase.",
    "Synchronizing multiplayer interactions in real time.",
    "Ensuring puzzle progress updated correctly for all players.",
    "Coordinating game UI, player state, puzzle state, timer state, and scoring logic.",
    "Making each puzzle understandable without overwhelming the player.",
    "Balancing feature work, debugging, and polish within a course project timeline.",
  ],
  results: [
    "Built a working multiplayer escape room feature inside Covey.Town.",
    "Created multiple interactive mini-game experiences, including Caesar Cipher, Chess Puzzle, and Trivia.",
    "Implemented a lobby flow with player count, waiting state, countdown behavior, and start-game controls.",
    "Added end-of-game feedback with score, time remaining, and a Gold/Silver/Bronze-style performance grade.",
    "Used AWS-backed hosting support during development and testing.",
    "Gained experience working in a large team codebase with React, TypeScript, game logic, and multiplayer state.",
  ],
  limitations: [
    "The project was built as part of a course/team codebase, so there is no public live deployment.",
    "The GitHub repository is a shared team repository, so this case study focuses on my role and the feature implementation rather than claiming full individual ownership.",
    "The project may require local setup to run.",
    "A short demo video would make the project easier for recruiters to evaluate quickly.",
  ],
  nextSteps: [
    "Record a short walkthrough video showing the lobby, puzzles, scoring, and reward screen.",
    "Add more randomized puzzle variations to improve replayability.",
    "Improve onboarding instructions for first-time players.",
    "Add stronger tests for lobby state, timer behavior, and puzzle completion.",
    "Polish the UI so the experience feels more production-ready.",
  ],
  screenshots: [
    {
      src: "/projects/coveytown/lobby-waiting.png",
      alt: "Covey.Town Escape Room lobby waiting for players",
      caption:
        "Escape Room lobby showing player count, waiting status, puzzle overview, and start-game controls.",
    },
    {
      src: "/projects/coveytown/lobby-countdown.png",
      alt: "Covey.Town Escape Room lobby countdown with three players",
      caption:
        "Multiplayer lobby state showing active players and countdown behavior before the game starts.",
    },
    {
      src: "/projects/coveytown/caesar-cipher.png",
      alt: "Caesar Cipher mini-game interface",
      caption:
        "Caesar Cipher puzzle where players decrypt a hidden message using letter substitutions and hints.",
    },
    {
      src: "/projects/coveytown/chess-puzzle.png",
      alt: "Chess logic puzzle interface",
      caption:
        "Chess logic puzzle where players place pieces according to clue-based constraints.",
    },
    
  ],
  links: [
    {
      label: "View Presentation",
      href: "/projects/coveytown/escape-room-presentation.pdf",
      type: "presentation",
    },
    {
      label: "View GitHub Repo",
      href: "https://github.com/njit-jerse/group-project-team-5/tree/main",
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
  screenshots: [
  {
    src: "/projects/nyc-aquatics/overview-slide.png",
    alt: "NYC Aquatics enrollment prediction project overview slide",
    caption:
      "Project overview showing the goal of predicting enrollment using pool type, borough, and class type.",
  },
  {
    src: "/projects/nyc-aquatics/dataset-slide.png",
    alt: "NYC Aquatics dataset slide showing rows and selected columns",
    caption:
      "Dataset summary showing cleaned rows, selected categorical features, and the numerical target variable.",
  },
  {
    src: "/projects/nyc-aquatics/results-slide.png",
    alt: "NYC Aquatics regression results showing R squared, MAE, and RMSE",
    caption:
      "Regression results showing R², Mean Absolute Error, and Root Mean Squared Error.",
  },
  {
    src: "/projects/nyc-aquatics/scatterplot-slide.png",
    alt: "Actual versus predicted enrollment scatterplot",
    caption:
      "Visualization comparing actual enrollment against predicted enrollment.",
  },
  {
    src: "/projects/nyc-aquatics/feature-impact-slide.png",
    alt: "Feature impact chart for NYC Aquatics enrollment prediction",
    caption:
      "Feature impact analysis showing which class types, pools, and boroughs influenced predicted enrollment.",
  },
],
  links: [
   {
    label: "Watch Demo",
    href: "https://youtu.be/HBywMMbr7Ak",
    type: "demo",
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/MelvinBerkoh/Intro-to-Data-Science/blob/master/Notebook/Projects/project1.ipynb",
    type: "github",
  },
  ],
  featured: true,
},
];