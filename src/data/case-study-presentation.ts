export type QuickReadItem = {
  label: string;
  value: string;
  detail: string;
};

export type FlowStep = {
  title: string;
  detail: string;
};

export type CaseStudyPresentation = {
  heroLine: string;
  quickRead: QuickReadItem[];
  flow: FlowStep[];
};

const presentationBySlug: Record<string, CaseStudyPresentation> = {
  opsdesk: {
    heroLine:
      "A multi-tenant support and incident platform with real authorization, SLA logic, and operational workflows.",
    quickRead: [
      {
        label: "Architecture",
        value: "Multi-tenant",
        detail: "Workspace-isolated application data.",
      },
      {
        label: "Authorization",
        value: "4 roles",
        detail: "Owner · Admin · Agent · Viewer",
      },
      {
        label: "Workflow",
        value: "Ticket → Incident",
        detail: "Escalation, ownership, and history.",
      },
      {
        label: "Reliability",
        value: "Persisted SLAs",
        detail: "First-response and resolution targets.",
      },
    ],
    flow: [
      {
        title: "Workspace",
        detail: "Tenant boundary",
      },
      {
        title: "Services",
        detail: "Operational ownership",
      },
      {
        title: "Tickets",
        detail: "Assignment + priority",
      },
      {
        title: "Incidents",
        detail: "Escalated issues",
      },
      {
        title: "SLA + History",
        detail: "Deadlines + activity",
      },
    ],
  },

  "application-tracker": {
    heroLine:
      "A full-stack job search workspace for applications, interviews, follow-ups, history, and safer job-posting import.",
    quickRead: [
      {
        label: "Data",
        value: "Per-user ownership",
        detail: "Access enforced on the server.",
      },
      {
        label: "Scheduling",
        value: "Interviews + follow-ups",
        detail: "Reminders and conflict checks.",
      },
      {
        label: "Import",
        value: "Job URL prefill",
        detail: "Defensive server-side fetching.",
      },
      {
        label: "History",
        value: "Activity timeline",
        detail: "Status, notes, events, and résumés.",
      },
    ],
    flow: [
      {
        title: "User",
        detail: "Authenticated account",
      },
      {
        title: "Applications",
        detail: "Pipeline + ownership",
      },
      {
        title: "Scheduling",
        detail: "Interviews + follow-ups",
      },
      {
        title: "History",
        detail: "Events + résumé state",
      },
      {
        title: "Import",
        detail: "Job posting extraction",
      },
    ],
  },

  policyscope: {
    heroLine:
      "A Chrome extension that finds important policy clauses, highlights them on the page, and explains them in plain English.",
    quickRead: [
      {
        label: "Detection",
        value: "Rule-based scan",
        detail: "Fast and predictable clause detection.",
      },
      {
        label: "Organization",
        value: "8 categories",
        detail: "Important policy areas grouped clearly.",
      },
      {
        label: "UX",
        value: "Page highlighting",
        detail: "Find the original clause immediately.",
      },
      {
        label: "Recognition",
        value: "3rd overall",
        detail: "NJIT senior capstone showcase.",
      },
    ],
    flow: [
      {
        title: "Policy Page",
        detail: "Terms or privacy policy",
      },
      {
        title: "Scan",
        detail: "Visible page text",
      },
      {
        title: "Detect",
        detail: "Important clauses",
      },
      {
        title: "Highlight",
        detail: "Category + location",
      },
      {
        title: "Explain",
        detail: "AI on demand",
      },
    ],
  },

  "commerce-pulse": {
    heroLine:
      "An end-to-end analytics pipeline that turns raw e-commerce data into modeled tables, business analysis, and Tableau dashboards.",
    quickRead: [
      {
        label: "Pipeline",
        value: "CSV → Tableau",
        detail: "Full analytics workflow.",
      },
      {
        label: "Warehouse",
        value: "PostgreSQL",
        detail: "Raw and transformed reporting data.",
      },
      {
        label: "Modeling",
        value: "dbt",
        detail: "Staging, intermediate, facts, and dimensions.",
      },
      {
        label: "Dataset",
        value: "96,478 orders",
        detail: "Delivered-order reporting model.",
      },
    ],
    flow: [
      {
        title: "CSV",
        detail: "Raw Olist data",
      },
      {
        title: "Python",
        detail: "Profile + validate",
      },
      {
        title: "PostgreSQL",
        detail: "Warehouse",
      },
      {
        title: "dbt",
        detail: "Transform + model",
      },
      {
        title: "Tableau",
        detail: "Business reporting",
      },
    ],
  },

  "eligido-landing-page": {
    heroLine:
      "A responsive React landing page that turns a complex early-stage startup concept into a clearer public product story.",
    quickRead: [
      {
        label: "Role",
        value: "Frontend",
        detail: "Public-facing startup website.",
      },
      {
        label: "Framework",
        value: "React",
        detail: "Reusable section-based frontend.",
      },
      {
        label: "Focus",
        value: "Product clarity",
        detail: "Simplified complex startup material.",
      },
      {
        label: "Delivery",
        value: "Responsive",
        detail: "Built for desktop and mobile.",
      },
    ],
    flow: [
      {
        title: "Source",
        detail: "Product + investor material",
      },
      {
        title: "Structure",
        detail: "Clear content sections",
      },
      {
        title: "React",
        detail: "Reusable components",
      },
      {
        title: "Responsive UI",
        detail: "Desktop + mobile",
      },
      {
        title: "Live Site",
        detail: "Public-facing product",
      },
    ],
  },

  "coveytown-escape-room": {
    heroLine:
      "A cooperative multiplayer escape room built inside Covey.Town with synchronized puzzles, timer logic, scoring, and shared game state.",
    quickRead: [
      {
        label: "Environment",
        value: "Existing codebase",
        detail: "Built inside Covey.Town.",
      },
      {
        label: "Gameplay",
        value: "Multiplayer",
        detail: "Lobby and shared game state.",
      },
      {
        label: "Puzzles",
        value: "3 mini-games",
        detail: "Trivia · Caesar Cipher · Chess",
      },
      {
        label: "Systems",
        value: "Timer + scoring",
        detail: "Shared progression and rewards.",
      },
    ],
    flow: [
      {
        title: "Lobby",
        detail: "Players join",
      },
      {
        title: "Countdown",
        detail: "Game starts",
      },
      {
        title: "Puzzles",
        detail: "Shared challenges",
      },
      {
        title: "Game State",
        detail: "Timer + score",
      },
      {
        title: "Reward",
        detail: "Final performance",
      },
    ],
  },

  "nyc-aquatics-enrollment-prediction": {
    heroLine:
      "A regression project that predicts NYC aquatics enrollment from borough, pool, and class type data.",
    quickRead: [
      {
        label: "Dataset",
        value: "6,217 rows",
        detail: "Cleaned records used for modeling.",
      },
      {
        label: "Model",
        value: "Linear regression",
        detail: "Enrollment prediction.",
      },
      {
        label: "R²",
        value: "0.5967",
        detail: "Model evaluation score.",
      },
      {
        label: "MAE",
        value: "5.56",
        detail: "About six registrations off on average.",
      },
    ],
    flow: [
      {
        title: "NYC Data",
        detail: "Raw program records",
      },
      {
        title: "Clean",
        detail: "Prepare usable rows",
      },
      {
        title: "Encode",
        detail: "Categorical features",
      },
      {
        title: "Regression",
        detail: "Train model",
      },
      {
        title: "Evaluate",
        detail: "Metrics + visuals",
      },
    ],
  },
};

export function getCaseStudyPresentation(
  slug: string,
): CaseStudyPresentation {
  return (
    presentationBySlug[slug] ?? {
      heroLine: "A software project built from idea through implementation.",
      quickRead: [],
      flow: [],
    }
  );
}