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
  icon: string;
  focusTracks: NonNullable<FocusId>[];
  summary: string;
  // Deep case-study fields — optional in Phase 1 scaffolding, authored in a later pass.
  problem?: string;
  solution?: string;
  architecture?: string;
  screenshots?: ScreenshotSlot[];
  lessonsLearned?: string[];
  businessImpact?: string;
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
  icon: "🖥️",
  focusTracks: ["sysadmin", "infrastructure"],
  summary:
    "A production-style home lab spanning virtualization, Active Directory, and network security — administered like enterprise infrastructure.",
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
    focusTracks: ["enterprise-apps"],
    color: "blue",
    icon: "🌐",
    summary: "Rebuilding a legacy church CMS on ASP.NET Core and Umbraco 18 with accessibility built in from the start.",
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
