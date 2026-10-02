import type { Project } from "@/data/projects";

export const opsDeskProject: Project = {
  slug: "opsdesk",
  title: "OpsDesk",
  category: "Full-Stack / Support Operations",
  summary:
    "A multi-tenant support and incident management platform for engineering and operations teams, with tickets, service ownership, incident escalation, role-based access, activity history, and SLA tracking.",
  impact:
    "Built a production-style SaaS workflow that goes beyond basic CRUD by combining tenant isolation, server-side authorization, ticket-to-incident escalation, persisted SLA deadlines, and automated business-rule testing.",

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
    "Built multi-tenant workspaces with Owner, Admin, Agent, and Viewer roles.",
    "Enforced permissions and workspace boundaries on the server instead of relying on hidden UI controls.",
    "Built ticket creation, assignment, status, priority, and activity-history workflows.",
    "Added ticket-to-incident escalation and incident lifecycle tracking.",
    "Implemented priority-based first-response and resolution SLAs.",
    "Added automated tests for important authorization and business rules.",
  ],

  overview:
    "OpsDesk is a support and incident management app built around the workflow an engineering or operations team might use to manage services and production issues. Teams can create workspaces, invite members, define services, open tickets, assign work, escalate serious tickets into incidents, and track changes through activity history. The project was built to practice the kinds of authorization, data isolation, workflow logic, and reliability concerns that show up in real multi-user software.",

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
    "Vitest",
    "Vercel",
  ],

  libraries: [
    {
      name: "Clerk",
      description:
        "Handles user authentication while OpsDesk keeps authorization and workspace permissions inside the application.",
    },
    {
      name: "Prisma",
      description:
        "Used for relational database access, tenant-scoped queries, transactions, and persisted ticket and incident state.",
    },
    {
      name: "Zod",
      description:
        "Validates server-side input before application data reaches the database layer.",
    },
    {
      name: "Vitest",
      description:
        "Used to test important business rules, authorization boundaries, and workflow behavior.",
    },
  ],

  whatIBuilt: [
    "Built the application as a full-stack Next.js project with PostgreSQL persistence.",
    "Created multi-tenant workspaces and workspace membership management.",
    "Implemented server-side role-based access control for Owner, Admin, Agent, and Viewer roles.",
    "Built service creation, editing, and archiving workflows.",
    "Built ticket creation, assignment, priority, status, and activity-history workflows.",
    "Added ticket-to-incident escalation and incident ownership tracking.",
    "Implemented SLA deadlines and status handling for first response and resolution targets.",
    "Added automated tests for important application rules.",
  ],

  engineeringDecisions: [
    "Used the workspace as the tenant boundary so workspace-owned data can be isolated consistently.",
    "Separated authentication from authorization: Clerk identifies the user, while OpsDesk determines what that user can do.",
    "Scoped database queries by workspace instead of trusting a ticket or incident ID by itself.",
    "Stored SLA deadlines instead of recalculating historical targets from the current policy.",
    "Used conditional database updates so SLA warning and breach activity is not repeatedly created.",
    "Kept the application as a modular monolith rather than splitting a portfolio-sized project into unnecessary services.",
  ],

  challenges: [
    "Keeping authorization rules consistent across different workspace roles.",
    "Making sure tenant-owned records could not be accessed outside their workspace.",
    "Coordinating ticket state, incident escalation, activity history, and SLA behavior.",
    "Preventing duplicate SLA warning and breach events.",
    "Designing a data model that supported services, tickets, incidents, members, and history without becoming overly complex.",
  ],

  results: [
    "Built a working multi-tenant operations platform with authenticated workspaces.",
    "Implemented server-enforced role-based permissions.",
    "Created a complete service-to-ticket-to-incident workflow.",
    "Added persisted first-response and resolution SLA tracking.",
    "Added activity history for important ticket and incident changes.",
    "Created automated quality checks covering linting, TypeScript, tests, and production builds.",
  ],

  limitations: [
    "The current release does not include real-time collaboration.",
    "Background SLA processing is handled within the current application architecture rather than a dedicated worker system.",
    "Attachments, public API keys, outbound webhooks, and a full audit system are future ideas rather than current features.",
  ],

  nextSteps: [
    "Add a dedicated background worker for time-based SLA processing.",
    "Add real-time updates for active tickets and incidents.",
    "Support file attachments for tickets and incidents.",
    "Add outbound integrations such as webhooks or external notification systems.",
    "Expand audit and reporting capabilities.",
  ],

  screenshots: [
    {
      src: "/projects/opsdesk/overview.png",
      alt: "OpsDesk workspace overview",
      caption:
        "Workspace overview showing the operations dashboard and current support workload.",
    },
    {
      src: "/projects/opsdesk/ticket-sla.png",
      alt: "OpsDesk ticket SLA panel",
      caption:
        "Ticket view showing priority-based first-response and resolution SLA tracking.",
    },
    {
      src: "/projects/opsdesk/incident.png",
      alt: "OpsDesk incident management view",
      caption:
        "Incident workflow used to manage escalated issues and ownership.",
    },
  ],

  links: [
    {
      label: "View GitHub Repo",
      href: "https://github.com/MelvinBerkoh/opsdesk",
      type: "github",
    },
  ],

  thumbnail: "/projects/opsdesk/overview.png",
  featured: true,
};