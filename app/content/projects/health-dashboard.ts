import type { ProjectCaseStudy } from "./types";

export const healthDashboard: ProjectCaseStudy = {
  slug: "health-dashboard",
  title: "Health Dashboard",
  subtitle: "Independent Python Learning Project",
  category: "Software Development",
  status: "Version 1.0 Complete",
  color: "emerald",
  focusTracks: [],
  summary:
    "A Python console application that records weigh-ins, calculates Body Mass Index, assigns BMI categories, and stores historical entries in CSV format. Being expanded through versioned releases toward reporting, visualization, and a future C# Windows desktop edition.",
  cardSummary:
    "Python health-tracking application with BMI calculations, CSV persistence, input validation, and iterative feature development.",

  problem:
    "Manual health tracking often produces scattered notes without consistent calculations or a reusable history. This project creates a structured local workflow for entering weigh-ins, consistently calculating BMI, and preserving records in a portable CSV format.",

  implementation: [
    "Separated calculation and classification logic into dedicated functions",
    "Added exception handling to prevent invalid numeric input from crashing the program",
    "Built an input loop to support multiple entries in a single session",
    "Used CSV storage as a simple, portable persistence layer",
    "Excluded personal records from Git while fictional sample data demonstrates the format safely",
  ],

  features: [
    "Records weigh-in entries from console input",
    "Calculates Body Mass Index from recorded entries",
    "Assigns a BMI category to each entry",
    "Persists historical entries to a CSV file using pathlib",
    "Supports multiple entries per session via an input loop",
    "Validates numeric input with exception handling to prevent crashes",
  ],

  skillsDemonstrated: [
    "Python Functions",
    "Conditional Logic",
    "Exception Handling",
    "Loops",
    "File I/O",
    "String Formatting",
    "Data Persistence",
    "Git",
    "Incremental Software Planning",
  ],

  roadmap: [
    "Add reporting for recorded weigh-in history",
    "Add data visualization for BMI trends over time",
    "Build a C# Windows desktop edition of the application",
  ],

  privacy:
    "All public screenshots and sample files use fictional data. The real weight_history.csv file is never published.",

  screenshots: [
    {
      src: "/images/projects/health-dashboard/terminal-demo.png",
      caption: "Terminal demo recording a sample weigh-in and calculating BMI.",
      alt: "Terminal output showing a fictional demo weigh-in entry, calculated BMI, and BMI category",
    },
    {
      src: "/images/projects/health-dashboard/sample-csv.png",
      caption: "sample_weight_history.csv opened in a text editor, showing the CSV storage format.",
      alt: "Text editor view of sample_weight_history.csv with fictional demo weight and date entries",
    },
    {
      src: "/images/projects/health-dashboard/github-readme.png",
      caption: "GitHub repository README and file list for the Health Dashboard project.",
      alt: "GitHub repository page showing the README and project file listing",
    },
  ],

  technologies: ["Python", "pathlib", "CSV", "Git", "GitHub"],
  github: "https://github.com/jcain5/Health-Dashboard",
  bullets: [
    "Built a Python console app to record weigh-ins, calculate BMI, and assign BMI categories",
    "Implemented exception handling to prevent invalid numeric input from crashing the program",
    "Stored historical entries in a portable CSV format using pathlib for file handling",
    "Actively developing toward reporting, visualization, and a future C# desktop edition",
  ],
};
