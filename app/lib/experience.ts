import type { ColorKey } from "./colors";
import type { EvidenceSource } from "./evidence";

export interface RelatedProject {
  slug: string;
  title: string;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  source: EvidenceSource;
  coreTechnologies: string[];
  highlights: string[];
  accent: ColorKey;
  relatedProjects?: RelatedProject[];
}

export const jobs: Job[] = [
  {
    title: "Technology Operations Associate",
    company: "Wells Fargo",
    location: "Irving, TX",
    period: "Feb 2022 – Present",
    type: "Full-time",
    source: "professional",
    coreTechnologies: [
      "Microsoft Intune", "VMware Horizon", "Citrix", "Windows 365",
      "Microsoft 365", "Active Directory", "BlackBerry UEM", "ServiceNow",
    ],
    highlights: [
      "Administer and support enterprise endpoint infrastructure across business-critical financial operations, maintaining a 100% quality score on reviewed support tickets in this role",
      "Operate and troubleshoot Windows 10/11 endpoints, Microsoft 365, VMware Horizon virtual desktops, Citrix, and Windows 365 Cloud PCs in a large-scale enterprise environment",
      "Support and troubleshoot Microsoft Intune and BlackBerry UEM device-management issues, including enrollment, access, compliance, and device-related incidents",
      "Manage Active Directory identity and access issues — account provisioning, authentication, and permissions — via ServiceNow and enterprise remote support tooling",
      "Partner with infrastructure, identity, and desktop engineering teams to resolve escalated incidents and improve service delivery workflows",
    ],
    accent: "cyan",
    relatedProjects: [{ slug: "enterprise-infrastructure-lab", title: "Enterprise Infrastructure Lab" }],
  },
  {
    title: "End User Support Specialist",
    company: "Amentum",
    location: "Fort Worth, TX",
    period: "Oct 2020 – Jun 2021",
    type: "Full-time",
    source: "professional",
    coreTechnologies: [
      "Azure AD / Entra ID", "Microsoft 365", "PowerShell", "Windows Administration",
      "Identity Management", "Microsoft SCCM",
    ],
    highlights: [
      "Supported Windows workstations and Microsoft 365 / Azure Active Directory (Entra ID) access for a globally distributed enterprise workforce",
      "Directly provisioned and supported Active Directory and Microsoft 365 accounts, using prebuilt PowerShell scripts to execute account creation as part of established account-creation workflows",
      "Used Microsoft SCCM for remote endpoint support, software installation workflows, and Windows workstation imaging",
      "Managed enterprise mobile device management (VMware AirWatch) and Cisco IP phone configuration across a distributed workforce",
      "Resolved hardware failures, software issues, and multi-factor authentication problems, maintaining secure access across a geographically dispersed organization",
    ],
    accent: "purple",
    relatedProjects: [{ slug: "enterprise-infrastructure-lab", title: "Enterprise Infrastructure Lab" }],
  },
  {
    title: "Technical Support III (Contractor)",
    company: "Bank of America",
    location: "Irving, TX",
    period: "Apr 2020 – Oct 2020",
    type: "Contract",
    source: "professional",
    coreTechnologies: ["Windows", "Active Directory", "Hardware Lifecycle", "Enterprise Troubleshooting"],
    highlights: [
      "Delivered Level II enterprise troubleshooting for Windows laptops, virtual machines, and Chromebooks in a high-volume financial services environment",
      "Resolved escalated hardware, software, and Active Directory account issues using BMC Remedy and enterprise remote support tooling",
    ],
    accent: "slate",
  },
  {
    title: "Service Desk Analyst I",
    company: "Amynta Group",
    location: "Bedford, TX",
    period: "Jul 2018 – Mar 2020",
    type: "Full-time",
    source: "professional",
    coreTechnologies: ["Windows", "Active Directory", "Hardware Lifecycle", "ServiceNow", "Enterprise Troubleshooting"],
    highlights: [
      "Provided Windows systems and Active Directory account support — Tier 1/2 troubleshooting across desktops, printers, and core business applications",
      "Supported the imaging and deployment of more than 600 Windows 10 workstations as part of a company-wide endpoint deployment initiative",
      "Authored knowledge base documentation to standardize troubleshooting and reduce repeat incident volume",
      "Triaged and routed ServiceNow incidents to the appropriate support teams, maintaining SLA compliance",
    ],
    accent: "slate",
  },
  {
    title: "IT Support Specialist",
    company: "West Freeway Church of Christ",
    location: "Fort Worth, TX",
    period: "Sep 2017 – Present",
    type: "Volunteer",
    source: "volunteer",
    coreTechnologies: [
      "Ubuntu Server", "Nginx", "ASP.NET Core", "Umbraco CMS", "DNS",
      "SSL/TLS", "Networking", "Audio/Visual Systems",
    ],
    highlights: [
      "Own DNS and SSL/TLS certificate management for the organization's public web presence, alongside hosting operations for the beta deployment ahead of full production cutover",
      "Architecting and developing a website on ASP.NET Core (.NET 10) and Umbraco 18 CMS, deployed to Ubuntu Server as a systemd-managed beta service behind an Nginx reverse proxy",
      "Manage day-to-day IT infrastructure — desktops, network connectivity, and livestream audio/visual systems — supporting weekly live production events",
      "Administer the organization's GoTo Connect PBX phone system and provide ongoing production support across all managed systems",
    ],
    accent: "emerald",
    relatedProjects: [{ slug: "wfcoc-redesign", title: "Church Website Case Study" }],
  },
];
