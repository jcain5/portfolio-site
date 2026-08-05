// Prepared for future publication. Do not register until the toolkit is complete.
import type { ProjectCaseStudy } from "./types";

// Prepared ahead of implementation — intentionally NOT imported or added to
// the `projects` registry in ./index.ts. Nothing described below is built
// yet; this exists only to track planned scope so it can be wired up once
// real, tested functionality exists. Do not register this until then.
export const powershellSystemsAdministrationToolkit: ProjectCaseStudy = {
  slug: "powershell-systems-administration-toolkit",
  title: "PowerShell Systems Administration Toolkit",
  subtitle:
    "Reusable Windows and Active Directory administration tools for endpoint health, directory validation, provisioning, and operational reporting.",
  category: "Automation & Systems Administration",
  status: "In Development",
  color: "indigo",
  focusTracks: ["sysadmin", "infrastructure"],
  summary:
    "A planned PowerShell toolkit for Windows and Active Directory administration. Not yet built — scoped here to cover endpoint health auditing, AD OU inventory and validation, user and security-group provisioning, and CSV-based operational reporting, with Pester test coverage planned before release.",
  cardSummary:
    "Planned PowerShell toolkit for Windows and Active Directory administration — in development, not yet published.",

  roadmap: [
    "Windows endpoint health auditing",
    "Active Directory OU inventory and validation",
    "User and security-group provisioning",
    "Duplicate-object checks",
    "Group membership management",
    "CSV reporting",
    "Parameter validation",
    "Error handling",
    "WhatIf support",
    "Sanitized sample output",
    "Pester testing",
  ],

  transparencyNote:
    "This project is in development. Nothing in the roadmap above is implemented yet — this entry tracks planned scope, not finished work, and will not be published until real, tested functionality exists.",

  technologies: ["PowerShell", "Active Directory", "Pester"],
  bullets: [
    "Planned: Windows endpoint health auditing",
    "Planned: Active Directory OU inventory and validation",
    "Planned: user and security-group provisioning with duplicate-object checks",
    "Planned: CSV operational reporting with parameter validation, error handling, and WhatIf support",
  ],
};
