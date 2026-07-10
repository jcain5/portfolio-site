import type { ColorKey } from "./colors";
import type { FocusId } from "../context/CareerFocusContext";

export interface ScreenshotSlot {
  src: string | null;
  caption: string;
  alt: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  status?: string;
  color: ColorKey;
  focusTracks: NonNullable<FocusId>[];
  summary: string;

  // Case-study structure: problem, environment, ownership, architecture,
  // implementation, validation, documentation, outcome.
  problem?: string;
  environment?: string;
  ownership?: string;
  architecture?: string;
  implementation?: string[];
  validation?: string;
  documentation?: string;
  outcome?: string;

  screenshots?: ScreenshotSlot[];
  technologies: string[];
  github?: string;
  liveUrl?: string;
  bullets: string[];
}

// The Featured Project — consolidates what were three overlapping home-lab entries
// (AD/Windows Server Lab, pfSense/VLAN Lab, Virtualization/Enterprise Lab) into one
// deep page, per the site's Featured Project structure. Lives at its own literal
// route (/projects/enterprise-infrastructure-lab), not the [slug] template.
export const featuredProject: ProjectCaseStudy = {
  slug: "enterprise-infrastructure-lab",
  title: "Enterprise Infrastructure Lab",
  category: "Enterprise Infrastructure",
  color: "cyan",
  focusTracks: ["sysadmin", "infrastructure"],
  summary:
    "A production-style home lab spanning virtualization, Active Directory, and network security — administered like enterprise infrastructure.",

  problem:
    "Enterprise support work means operating Active Directory, Group Policy, and virtualization platforms day to day — but not designing or administering them from the ground up. This lab closes that gap by standing up the same identity, virtualization, and network security stack found in production enterprise environments, administered end-to-end rather than just supported.",
  environment:
    "A self-hosted, multi-hypervisor lab: Proxmox VE as the primary virtualization platform, with VMware Workstation and VirtualBox for isolated testing. Windows Server 2022 domain controllers, Ubuntu and Kali Linux clients, and a pfSense virtual firewall run as VMs across a segmented home network.",
  ownership:
    "Designed, built, and administered independently — architecture, deployment, configuration, and ongoing maintenance, with no managed services or pre-built templates.",
  architecture:
    "Windows Server 2022 promoted to an Active Directory Domain Controller with integrated DNS and DHCP. An OU structure mirrors a department hierarchy to support Group Policy delegation and role-based access control through AD security groups. Network segmentation is handled by a pfSense virtual firewall enforcing a multi-VLAN topology — Trusted, IoT, and DMZ zones — with explicit inter-VLAN routing rules and a Snort IDS/IPS instance monitoring traffic across segments. OpenVPN provides site-to-site and client remote access.",
  implementation: [
    "Installed and configured Windows Server 2022 in a Proxmox virtualized environment",
    "Promoted the server to an Active Directory Domain Controller with integrated DNS and DHCP",
    "Built an OU structure reflecting department hierarchy to support Group Policy delegation",
    "Applied GPOs enforcing security baselines — firewall policy, software restrictions, and account lockout",
    "Configured role-based access control through AD security groups and privilege tiering",
    "Deployed pfSense as a virtual firewall segmenting the network into Trusted, IoT, and DMZ VLANs",
    "Configured inter-VLAN routing with explicit firewall rules and integrated Snort IDS/IPS",
    "Implemented OpenVPN for site-to-site and client remote access",
  ],
  validation:
    "Verified GPO enforcement by confirming security baseline application on domain-joined test machines and testing account lockout and software restriction behavior. Confirmed VLAN isolation by testing inter-VLAN traffic against firewall rules and monitoring Snort IDS/IPS alerts for policy violations. Validated identity lifecycle changes — account provisioning, group membership, and delegated permissions — by testing access before and after changes.",
  documentation:
    "Network topology diagram covering VLAN zones and firewall rule sets, an OU and Group Policy reference for the AD structure, and a runbook for VM provisioning, snapshot management, and cloning across the Proxmox, VMware Workstation, and VirtualBox hosts.",
  outcome:
    "A production-style reference environment for identity administration, Group Policy management, and network segmentation — directly informing GPO, RBAC, and firewall rule decisions applied in enterprise support work.",

  screenshots: [
    { src: null, caption: "Network topology — VLAN segmentation and firewall zones", alt: "Network diagram placeholder" },
    { src: null, caption: "Active Directory OU structure and Group Policy scope", alt: "AD structure diagram placeholder" },
  ],

  technologies: [
    "Proxmox VE", "Windows Server 2022", "Active Directory DS", "GPO", "DNS", "DHCP",
    "pfSense", "Snort IDS/IPS", "OpenVPN", "VLANs", "VMware Workstation", "VirtualBox", "Ubuntu",
  ],
  bullets: [
    "Installed and configured Windows Server 2022 in a Proxmox virtualized environment",
    "Deployed and promoted server to Active Directory Domain Controller with DNS and DHCP integration",
    "Designed an OU structure to reflect department hierarchy and support Group Policy delegation",
    "Implemented Group Policy Objects (GPOs) to enforce security baselines — including firewall policy, software restrictions, and account lockout",
    "Configured role-based access control through AD security groups and privilege tiering",
    "Practiced identity lifecycle management: account provisioning, group membership, and permission delegation",
    "Deployed pfSense as a virtual firewall on Proxmox to segment and protect the home lab environment",
    "Designed a multi-VLAN network topology with isolated zones: Trusted, IoT, and DMZ",
    "Configured inter-VLAN routing with explicit firewall rules controlling permitted traffic between segments",
    "Implemented site-to-site and client VPN for secure remote access using OpenVPN",
    "Integrated Snort IDS/IPS to monitor traffic and alert on suspicious activity across network segments",
    "Built a multi-hypervisor lab using Proxmox, VMware Workstation, and VirtualBox",
    "Runs multiple simultaneous Linux (Ubuntu, Kali) and Windows Server VMs to simulate enterprise environments",
    "Practices snapshot management, VM cloning, and network bridging and isolation",
  ],
};

// Case-study index (/projects) and dynamic detail pages (/projects/[slug]).
// The Featured Project above is pinned separately and excluded from this list's
// [slug] routing (it has its own literal route).
export const projects: ProjectCaseStudy[] = [
  {
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
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
