import type { ProjectCaseStudy } from "./types";

export const wfcocRedesign: ProjectCaseStudy = {
  slug: "wfcoc-redesign",
  title: "West Freeway Church of Christ — Website Redesign",
  category: "Full-Stack Web Development",
  status: "Beta",
  focusTracks: [],
  color: "blue",
  featuredRank: 2,
  featuredVariant: "secondary",
  summary:
    "Redesigning a church website on Ubuntu Server, Nginx, .NET, and Umbraco CMS — now running in beta, with hosting, security, and deployment operations validated ahead of a full production cutover from the legacy CMS.",
  featuredChips: ["Ubuntu", "Nginx", ".NET", "Umbraco", "Linux"],

  problem:
    "The organization's public website ran on a legacy Finalweb 2.0 CMS with no accessibility compliance, no ability for non-technical staff to manage content independently, and no automated testing in place.",
  environment:
    "Volunteer IT Support Specialist role covering the organization's website, livestream systems, and PBX phone system — the website rebuild is scoped and delivered independently while those other systems stay in daily operation.",
  ownership:
    "Sole developer — architecture, implementation, accessibility compliance, test automation, and beta deployment are individually owned.",
  architecture:
    "An ASP.NET Core (.NET 10) application with Umbraco 18 as the CMS layer, structured with a clean separation of concerns across Pages, Services, ViewModels, and API Controllers. Razor Pages render the public site with Bootstrap 5 for responsive layout. Deployed to Ubuntu Server 24.04 LTS as a systemd-managed service, published behind an Nginx reverse proxy.",
  implementation: [
    "Built 9 core pages with Bootstrap 5 responsive design",
    "Integrated Umbraco 18 CMS so non-technical staff can manage content independently",
    "Structured the codebase into Pages, Services, ViewModels, and API Controllers",
    "Deployed to Ubuntu Server 24.04 LTS as a systemd-managed service (wfcoc-beta.service) behind an Nginx reverse proxy",
  ],
  validation:
    "Wrote a Playwright browser test suite with integrated axe accessibility checks, run against every core page to catch WCAG 2.2 AA regressions before deployment. Verified the systemd service and Nginx reverse proxy are active and stable in the beta environment.",
  documentation:
    "Architecture and deployment notes maintained alongside the codebase, covering the systemd service configuration, the Nginx reverse proxy setup, and the Umbraco content model for staff handoff.",
  outcome:
    "Running in beta on Ubuntu Server — validating WCAG 2.2 AA compliance, content workflows, and hosting operations ahead of a full production cutover from the legacy CMS.",

  screenshots: [
    {
      src: "/images/projects/wfcoc-redesign/nginx-status.png",
      caption: "Nginx reverse proxy running as a managed systemd service in the beta environment.",
      alt: "Terminal output of systemctl status nginx showing the service active and running",
    },
    {
      src: "/images/projects/wfcoc-redesign/dotnet-info.png",
      caption: ".NET 10 runtime installed on Ubuntu Server, hosting the ASP.NET Core application.",
      alt: "Terminal output of dotnet --info showing the .NET runtime and Ubuntu 24.04 host details",
    },
    {
      src: "/images/projects/wfcoc-redesign/hostnamectl.png",
      caption: "Beta deployment host running Ubuntu Server 24.04 LTS.",
      alt: "Terminal output of hostnamectl showing Ubuntu 24.04.4 LTS as the operating system",
    },
  ],

  technologies: [".NET 10", "ASP.NET Core", "Umbraco 18 CMS", "C#", "Razor Pages", "Bootstrap 5", "Playwright", "Ubuntu Server", "Nginx"],
  github: "https://github.com/jcain5/wfcoc-redesign",
  bullets: [
    "Developing a modern ASP.NET Core website for West Freeway Church of Christ to replace the existing Finalweb 2.0 CMS",
    "Implemented 9 core pages with Bootstrap 5 responsive design and WCAG 2.2 AA accessibility compliance",
    "Integrating Umbraco 18 CMS to enable non-technical staff to manage content independently",
    "Architecture designed with clean separation of concerns: Pages, Services, ViewModels, and API Controllers",
    "Deployed to Ubuntu Server behind an Nginx reverse proxy as a systemd-managed beta service",
    "Wrote a Playwright browser test suite with axe accessibility checks for automated quality assurance",
  ],
};
