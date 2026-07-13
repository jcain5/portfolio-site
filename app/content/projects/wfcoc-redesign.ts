import type { ProjectCaseStudy } from "./types";

export const wfcocRedesign: ProjectCaseStudy = {
  slug: "wfcoc-redesign",
  title: "West Freeway Church of Christ — Website Redesign",
  category: "Full-Stack Web Development",
  status: "In Development",
  focusTracks: [],
  color: "blue",
  summary: "Rebuilding a legacy church CMS on ASP.NET Core and Umbraco 18 with accessibility built in from the start.",

  problem:
    "The organization's public website ran on a legacy Finalweb 2.0 CMS with no accessibility compliance, no ability for non-technical staff to manage content independently, and no automated testing in place.",
  environment:
    "Volunteer IT Support Specialist role covering the organization's website, livestream systems, and PBX phone system — the website rebuild is scoped and delivered independently while those other systems stay in daily operation.",
  ownership:
    "Sole developer — architecture, implementation, accessibility compliance, and test automation are individually owned, with solo deployment planned.",
  architecture:
    "An ASP.NET Core (.NET 10) application with Umbraco 18 as the CMS layer, structured with a clean separation of concerns across Pages, Services, ViewModels, and API Controllers. Razor Pages render the public site with Bootstrap 5 for responsive layout.",
  implementation: [
    "Built 9 core pages with Bootstrap 5 responsive design",
    "Integrated Umbraco 18 CMS so non-technical staff can manage content independently",
    "Structured the codebase into Pages, Services, ViewModels, and API Controllers",
    "Planned deployment to Debian Linux behind an Nginx reverse proxy",
  ],
  validation:
    "Wrote a Playwright browser test suite with integrated axe accessibility checks, run against every core page to catch WCAG 2.2 AA regressions before deployment.",
  documentation:
    "Architecture and deployment notes maintained alongside the codebase, covering the Nginx reverse proxy configuration and the Umbraco content model for staff handoff.",
  outcome:
    "In development — targeting a WCAG 2.2 AA compliant replacement for the legacy CMS with independent content management for non-technical staff.",

  technologies: [".NET 10", "ASP.NET Core", "Umbraco 18 CMS", "C#", "Razor Pages", "Bootstrap 5", "Playwright", "Claude Code"],
  github: "https://github.com/jcain5/wfcoc-redesign",
  bullets: [
    "Developing a modern ASP.NET Core website for West Freeway Church of Christ to replace the existing Finalweb 2.0 CMS",
    "Implemented 9 core pages with Bootstrap 5 responsive design and WCAG 2.2 AA accessibility compliance",
    "Integrating Umbraco 18 CMS to enable non-technical staff to manage content independently",
    "Architecture designed with clean separation of concerns: Pages, Services, ViewModels, and API Controllers",
    "Planned deployment to Debian Linux using Nginx reverse proxy",
    "Wrote a Playwright browser test suite with axe accessibility checks for automated quality assurance",
  ],
};
