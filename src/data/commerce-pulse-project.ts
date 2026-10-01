import type { Project } from "@/data/projects";

export const commercePulseProject: Project = {
  slug: "commerce-pulse",
  title: "CommercePulse",
  category: "Data Engineering / Analytics",
  summary:
    "An end-to-end e-commerce analytics project that takes raw Olist CSV data through Python, PostgreSQL, dbt, SQL, and Tableau to produce cleaned reporting models, business analysis, and interactive dashboards.",
  impact:
    "Built a complete analytics workflow from raw data ingestion through dimensional modeling and dashboard reporting, with analysis covering revenue, delivery performance, customer behavior, product categories, and seller performance.",

  tech: [
    "Python",
    "Pandas",
    "PostgreSQL",
    "dbt",
    "SQL",
    "Tableau",
    "Docker",
    "Git",
  ],

  highlights: [
    "Built a full analytics pipeline from raw CSV files to Tableau dashboards.",
    "Loaded and validated raw Olist data in PostgreSQL.",
    "Created dbt staging, intermediate, fact, and dimension models.",
    "Built SQL analysis for revenue, delivery, customer behavior, products, and sellers.",
    "Created four Tableau dashboards for business reporting.",
    "Documented data-quality issues and business findings separately from the code.",
  ],

  overview:
    "CommercePulse is an end-to-end analytics project built with the Brazilian Olist e-commerce dataset. The project starts with raw CSV files and moves through profiling, ingestion, transformation, dimensional modeling, SQL analysis, and Tableau reporting. The goal was to build a realistic analytics workflow instead of stopping at a notebook or isolated chart.",

  techStack: [
    "Python",
    "Pandas",
    "PostgreSQL",
    "Docker",
    "dbt",
    "SQL",
    "Tableau",
    "Git",
    "GitHub",
  ],

  libraries: [
    {
      name: "Pandas",
      description:
        "Used to profile raw CSV files, inspect data quality, and support ingestion and export workflows.",
    },
    {
      name: "PostgreSQL",
      description:
        "Used as the warehouse for raw source tables and transformed analytics models.",
    },
    {
      name: "dbt",
      description:
        "Used to clean, transform, test, and organize staging, intermediate, fact, and dimension models.",
    },
    {
      name: "Tableau",
      description:
        "Used to turn the final reporting tables into business-facing dashboards.",
    },
    {
      name: "Docker",
      description:
        "Used to run the local PostgreSQL environment consistently during development.",
    },
  ],

  whatIBuilt: [
    "Profiled the raw Olist CSV files using Python and Pandas.",
    "Created PostgreSQL raw tables and loaded the source data.",
    "Built dbt staging models for cleaned source data.",
    "Created intermediate models for payments, reviews, geolocation, and other reusable transformations.",
    "Built fact_orders and fact_order_items reporting tables.",
    "Built customer, product, seller, and date dimensions.",
    "Wrote SQL analysis for revenue, delivery, reviews, repeat customers, product categories, and sellers.",
    "Exported reporting tables for Tableau.",
    "Built four Tableau dashboards covering executive metrics, delivery, customer behavior, and seller performance.",
  ],

  engineeringDecisions: [
    "Separated raw, staging, intermediate, and mart layers so cleaning and business logic stayed organized.",
    "Grouped payment rows before joining them to orders because one order can contain multiple payment records.",
    "Handled duplicate review records before using review data in the final order model.",
    "Created a cleaner ZIP-level geolocation lookup because the source geolocation file contains many duplicate locations.",
    "Used customer_unique_id for customer behavior analysis because customer_id can change across orders for the same person.",
    "Kept Tableau focused on final reporting tables instead of recreating transformation logic inside the dashboard layer.",
  ],

  challenges: [
    "Cleaning and joining multiple related datasets without creating duplicate order rows.",
    "Handling payment and review tables where one order can have multiple source records.",
    "Cleaning noisy geolocation data with duplicate ZIP and coordinate records.",
    "Designing fact and dimension tables that were useful for several different business questions.",
    "Keeping SQL, dbt models, and dashboard metrics consistent across the full pipeline.",
  ],

  results: [
    "Built a reporting model covering 96,478 delivered orders and 93,358 unique customers.",
    "Measured approximately $13.22M in product revenue with a $137.04 average order value.",
    "Found that delivered orders had an average review score of 4.16.",
    "Measured an 8.11% late delivery rate.",
    "Found that on-time or early deliveries averaged a 4.29 review score while late deliveries averaged 2.57.",
    "Found that 97% of customers in the delivered-order dataset placed only one order.",
    "Built four Tableau dashboards for executive, delivery, customer, product, and seller analysis.",
  ],

  limitations: [
    "The source dataset is historical and mainly covers 2016 through 2018.",
    "The project describes patterns in the Olist dataset rather than the current Brazilian e-commerce market.",
    "The Tableau workbook uses exported reporting data rather than a hosted live warehouse connection.",
    "The project focuses on descriptive analytics rather than forecasting or machine-learning models.",
  ],

  nextSteps: [
    "Add automated pipeline orchestration for ingestion and dbt runs.",
    "Add more dbt tests around important business assumptions.",
    "Deploy the reporting database to a hosted analytics environment.",
    "Connect Tableau or another BI tool directly to the reporting layer.",
    "Add forecasting or cohort analysis as a separate analytics layer.",
  ],

  screenshots: [
    {
      src: "/projects/commerce-pulse/executive-overview.png",
      alt: "CommercePulse executive overview dashboard",
      caption:
        "Executive dashboard showing revenue, delivered orders, average order value, review score, and delivery performance.",
    },
    {
      src: "/projects/commerce-pulse/delivery-customer-experience.png",
      alt: "CommercePulse delivery and customer experience dashboard",
      caption:
        "Dashboard showing delivery timing and its relationship with customer review scores.",
    },
    {
      src: "/projects/commerce-pulse/customer-behavior.png",
      alt: "CommercePulse customer behavior dashboard",
      caption:
        "Customer dashboard showing repeat purchasing and order behavior.",
    },
    {
      src: "/projects/commerce-pulse/product-seller-performance.png",
      alt: "CommercePulse product and seller performance dashboard",
      caption:
        "Dashboard comparing product categories and seller performance across revenue, reviews, and delivery.",
    },
  ],

  links: [
    {
      label: "View GitHub Repo",
      href: "https://github.com/MelvinBerkoh/commerce-pulse",
      type: "github",
    },
  ],

  thumbnail: "/projects/commerce-pulse/executive-overview.png",
  featured: true,
};