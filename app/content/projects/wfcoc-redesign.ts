import type { ProjectCaseStudy } from "./types";

export const wfcocRedesign: ProjectCaseStudy = {
  slug: "wfcoc-redesign",
  title: "West Freeway Church of Christ — Website Redesign",
  category: "Infrastructure & Web Operations",
  status: "Beta",
  focusTracks: ["sysadmin", "infrastructure"],
  color: "blue",
  featuredRank: 2,
  featuredVariant: "secondary",
  summary:
    "A volunteer-led, production-style nonprofit web platform for West Freeway Church of Christ, currently in beta on Ubuntu Server, Nginx, ASP.NET Core, and Umbraco CMS — with automated backups, recovery planning, and production cutover preparation, while the legacy site remains live during migration.",
  featuredChips: ["Ubuntu", "Nginx", ".NET", "Umbraco", "Backups & Recovery"],

  problem:
    "The organization's public website ran on a legacy Finalweb 2.0 CMS that lacked a documented accessibility testing process and presented accessibility limitations. Its content workflow prevented non-technical staff from publishing updates independently, and its mobile experience lagged modern expectations. Any redesign had to preserve the existing live site throughout the migration while operating within a volunteer-led IT model with no dedicated budget for professional hosting or support staff.",
  environment:
    "Volunteer IT Support Specialist role covering the organization's website, livestream systems, and PBX phone system — the website rebuild is scoped and delivered independently while those other systems stay in daily operation.",
  ownership:
    "Sole project owner for architecture, implementation, deployment, backup design, troubleshooting, and documentation throughout the beta build. Expected to retain ongoing operational responsibility for the platform's infrastructure and integrations after the production cutover.",
  architecture:
    "An ASP.NET Core (.NET 10) application with Umbraco 18 as the CMS layer, backed by a SQLite database, structured with a clean separation of concerns across Pages, Services, ViewModels, and API Controllers. Razor Pages render the public site with Bootstrap 5 for responsive layout. Deployed to Ubuntu Server 24.04 LTS as a systemd-managed service, published behind an Nginx reverse proxy, with an automated backup and recovery workflow protecting the CMS database.",
  architectureDiagram: `Internet
   |
Reverse Proxy (Nginx + TLS)
   |
ASP.NET Core Application
   |
Umbraco CMS
   |
SQLite Database
   |
Automated Backup & Recovery Workflow`,
  implementation: [
    "Built 9 core pages with Bootstrap 5 responsive design",
    "Integrated Umbraco 18 CMS so non-technical staff can manage content independently",
    "Structured the codebase into Pages, Services, ViewModels, and API Controllers",
    "Deployed to Ubuntu Server 24.04 LTS as a systemd-managed application service behind an Nginx reverse proxy",
  ],
  infrastructureOperations: [
    "Deployed and manage the application on a Linux (Ubuntu Server) VPS behind an Nginx reverse proxy with TLS",
    "Run the ASP.NET Core application as a systemd-managed service, including service start/stop/restart and health checks",
    "Perform layered service-health validation across the reverse proxy, application process, and database",
    "Review application and database logs to diagnose service and connectivity issues",
    "Run automated nightly database backups with integrity verification and retention management",
    "Maintain documented recovery procedures for restoring the CMS database",
  ],
  validation:
    "Implemented automated accessibility checks with Playwright and axe across every core page to identify regressions and support progress toward WCAG 2.2 AA — not a substitute for a full manual audit. Verified the systemd service and Nginx reverse proxy are operational in the beta environment, and confirmed the automated nightly backup job completes successfully with integrity validation.",
  documentation:
    "Architecture and deployment notes maintained alongside the codebase, covering the systemd service configuration, the Nginx reverse proxy setup, the backup and recovery workflow, and the Umbraco content model for staff handoff.",
  outcome: [
    "Working beta environment for the redesigned website, operational ahead of a full production cutover",
    "Repeatable deployment process for the ASP.NET Core application on Ubuntu Server",
    "Managed Linux application service running under systemd",
    "Automated nightly database backups with integrity verification",
    "Structured operations documentation covering deployment, monitoring, backup, and recovery",
    "Improved content-management foundation for non-technical staff",
    "Stable legacy site retained for visitors throughout development",
    "Production cutover from the legacy CMS remains pending",
  ],

  troubleshootingHighlights: [
    "The public reverse proxy responded normally while the application layer was unavailable, producing a gateway error on the beta site",
    "Tested each layer independently — reverse proxy, application service status, application listener, direct application response, public HTTPS response, and service logs — to isolate the failure before making changes",
    "Restored the application service, validated both the internal application endpoint and the public HTTPS response, confirmed database integrity, and documented the incident",
  ],

  skillsDemonstrated: [
    "Linux Administration",
    "Nginx",
    "systemd",
    "ASP.NET Core",
    "Umbraco",
    "SQLite",
    "Backup Strategy",
    "Disaster Recovery",
    "Monitoring",
    "Troubleshooting",
    "Technical Documentation",
    "Stakeholder Communication",
    "Production Change Management",
  ],

  screenshots: [
    {
      src: "/images/projects/wfcoc-redesign/nginx-status.png",
      caption: "Nginx reverse proxy running as a managed systemd service in the beta environment.",
      alt: "Terminal output of systemctl status nginx showing the service active and running",
    },
  ],

  technologies: [".NET 10", "ASP.NET Core", "Umbraco 18 CMS", "SQLite", "C#", "Razor Pages", "Bootstrap 5", "Playwright", "axe", "Ubuntu Server", "Nginx", "systemd", "GitHub", "Google Calendar", "YouTube"],
  github: "https://github.com/jcain5/wfcoc-redesign",
  bullets: [
    "Developing a modern ASP.NET Core website for West Freeway Church of Christ to replace the existing Finalweb 2.0 CMS",
    "Implemented 9 core pages with Bootstrap 5 responsive design and automated accessibility checks supporting progress toward WCAG 2.2 AA",
    "Integrating Umbraco 18 CMS to enable non-technical staff to manage content independently",
    "Architecture designed with clean separation of concerns: Pages, Services, ViewModels, and API Controllers",
    "Deployed to Ubuntu Server behind an Nginx reverse proxy as a systemd-managed beta service",
    "Implemented automated nightly database backups with integrity verification and retention management",
    "Diagnosed and resolved a reverse-proxy/application-service failure using layered health checks and service logs",
    "Wrote a Playwright browser test suite with axe accessibility checks for automated quality assurance",
  ],
};
