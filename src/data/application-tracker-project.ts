import type { Project } from "@/data/projects";

export const applicationTrackerProject: Project = {
  slug: "application-tracker",
  title: "Application Tracker",
  category: "Full-Stack / Productivity",
  summary:
    "A full-stack job search management app for tracking applications, interviews, follow-ups, contacts, résumé versions, and application history in one place.",
  impact:
    "Built a real multi-user product with authentication, server-side data ownership, relational persistence, scheduling workflows, job-posting import, defensive URL fetching, testing, and production deployment.",

  tech: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Clerk",
    "Tailwind CSS",
    "Zod",
    "Vitest",
  ],

  highlights: [
    "Built authenticated application tracking with per-user data ownership.",
    "Added interview scheduling, follow-ups, activity history, and résumé version tracking.",
    "Built a job-posting importer that can prefill application data from a URL.",
    "Added server-side protections for external URL fetching, including SSRF-focused safeguards.",
    "Designed responsive desktop and mobile views for managing applications.",
    "Deployed the app with Vercel, Neon PostgreSQL, and Clerk.",
  ],

  overview:
    "Application Tracker started as a way to replace the mix of spreadsheets, notes, tabs, and reminders used during a job search. The app keeps each opportunity in one place and tracks its current status along with the events that happened over time. Users can manage applications, schedule interviews, set follow-ups, save résumé versions, and import information from job postings.",

  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Neon",
    "Prisma",
    "Clerk",
    "Zod",
    "Cheerio",
    "Undici",
    "Vitest",
    "Vercel",
  ],

  libraries: [
    {
      name: "Clerk",
      description:
        "Handles authentication while application ownership and authorization are enforced on the server.",
    },
    {
      name: "Prisma",
      description:
        "Used for PostgreSQL access, migrations, application records, activity history, and user-specific settings.",
    },
    {
      name: "Zod",
      description:
        "Validates application, interview, follow-up, and settings data before database operations.",
    },
    {
      name: "Cheerio",
      description:
        "Used to parse job posting HTML and extract useful information from supported pages.",
    },
    {
      name: "Undici",
      description:
        "Used for controlled server-side HTTP requests during job posting imports.",
    },
    {
      name: "Vitest",
      description:
        "Used to test authentication boundaries, workflows, parsing logic, and server-side behavior.",
    },
  ],

  whatIBuilt: [
    "Built application creation, editing, archiving, restoring, searching, and filtering.",
    "Created a structured hiring pipeline from Saved through Offer, Rejected, and Withdrawn.",
    "Added interview scheduling with rescheduling, cancellation, and exact-time conflict checks.",
    "Built follow-up scheduling and dashboard reminders for applications needing attention.",
    "Created an activity timeline for status changes, interviews, notes, calls, emails, and follow-ups.",
    "Added personalized résumé labels that can be reused across applications.",
    "Built a job-posting importer that attempts to extract company, role, location, description, work arrangement, and compensation.",
    "Added responsive desktop tables and mobile-friendly application cards.",
  ],

  engineeringDecisions: [
    "Enforced record ownership on the server instead of trusting a browser-provided user ID.",
    "Stored historical résumé names directly on applications so old records remain accurate if settings change later.",
    "Kept interviews and follow-ups attached to applications instead of turning the project into a separate calendar system.",
    "Presented imported job data for review before saving because job posting markup is inconsistent.",
    "Added protocol, DNS, IP, redirect, timeout, response-size, and content-type checks around remote URL fetching.",
    "Organized the app as a modular monolith with feature-specific components, schemas, server operations, and types.",
  ],

  challenges: [
    "Keeping user data isolated across authenticated accounts.",
    "Designing application history so current state and past activity stayed connected.",
    "Handling job sites that expose inconsistent or incomplete structured data.",
    "Fetching user-supplied URLs without blindly trusting the destination.",
    "Preventing interview time conflicts while keeping scheduling tied to applications.",
    "Preserving historical résumé information when users change their current résumé options.",
  ],

  results: [
    "Built and deployed a working multi-user job application management app.",
    "Added authenticated CRUD workflows with server-enforced ownership.",
    "Created interview, follow-up, and activity-history workflows around each application.",
    "Built a defensive job-posting import flow with manual fallback.",
    "Added automated tests for important server-side workflows.",
    "Created responsive desktop and mobile interfaces for daily use.",
  ],

  limitations: [
    "Some job boards block automated server requests.",
    "Job posting import quality depends on the information exposed by each website.",
    "Imported fields may be incomplete and still need manual review.",
    "Interview scheduling is intentionally application-focused rather than a full calendar replacement.",
  ],

  nextSteps: [
    "Add calendar integrations for scheduled interviews.",
    "Add CSV export and data portability.",
    "Build richer job-search analytics and pipeline reporting.",
    "Continue improving job-posting extraction across different site formats.",
  ],

  screenshots: [
    {
      src: "/projects/application-tracker/hero.png",
      alt: "Application Tracker landing page",
      caption:
        "Landing page introducing the application tracking workflow.",
    },
    {
      src: "/projects/application-tracker/dashboard.png",
      alt: "Application Tracker dashboard",
      caption:
        "Dashboard showing active applications, interviews, follow-ups, offers, and recent activity.",
    },
    {
      src: "/projects/application-tracker/application-form.png",
      alt: "Application Tracker application form",
      caption:
        "Application form for storing job details, compensation, source, résumé version, and follow-up information.",
    },
    {
      src: "/projects/application-tracker/settings.png",
      alt: "Application Tracker settings page",
      caption:
        "Settings page for managing personalized résumé versions.",
    },
  ],

  links: [
    {
      label: "Live Demo",
      href: "https://application-tracker-teal-pi.vercel.app/",
      type: "demo",
    },
    {
      label: "View GitHub Repo",
      href: "https://github.com/MelvinBerkoh/application-tracker",
      type: "github",
    },
  ],

  thumbnail: "/projects/application-tracker/dashboard.png",
  featured: true,
};