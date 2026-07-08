import type { ColorKey } from "./colors";

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  accent: ColorKey;
}

export const jobs: Job[] = [
  {
    title: "Technology Operations Associate",
    company: "Wells Fargo",
    location: "Irving, TX",
    period: "Feb 2022 – Present",
    type: "Full-time",
    highlights: [
      "Provide enterprise IT support for 1,000+ internal employees across business-critical financial operations, maintaining a 100% ticket quality score",
      "Troubleshoot and resolve Windows 10/11, Microsoft 365, VMware Horizon virtual desktops, Citrix, and Windows Cloud PC (W365) issues in a large-scale enterprise environment",
      "Administer Microsoft Intune MDM and BlackBerry UEM to manage and enforce policy on enterprise mobile devices across the organization",
      "Resolve hardware, software, authentication, and identity access issues via ServiceNow ticketing and enterprise remote support tools",
      "Coordinate with infrastructure, identity, and desktop engineering teams to resolve escalated issues and improve service delivery workflows",
    ],
    accent: "cyan",
  },
  {
    title: "End User Support Specialist",
    company: "Amentum",
    location: "Fort Worth, TX",
    period: "Oct 2020 – Jun 2021",
    type: "Full-time",
    highlights: [
      "Supported 1,000+ global employees across Windows workstations, Microsoft 365, and Azure Active Directory in a distributed enterprise environment",
      "Provisioned and managed Active Directory and Microsoft 365 user accounts; executed PowerShell provisioning scripts for account lifecycle management",
      "Managed enterprise mobile devices in VMware AirWatch MDM and configured Cisco IP phone deployments",
      "Resolved hardware failures, software issues, and multi-factor authentication problems across a geographically distributed workforce",
    ],
    accent: "purple",
  },
  {
    title: "Technical Support III (Contractor)",
    company: "Bank of America",
    location: "Irving, TX",
    period: "Apr 2020 – Oct 2020",
    type: "Contract",
    highlights: [
      "Delivered Level II technical support for enterprise laptops, virtual machines, and Chromebooks in a high-volume financial services environment",
      "Resolved advanced hardware, software, and business application issues using BMC Remedy ticketing and enterprise remote support tools",
    ],
    accent: "slate",
  },
  {
    title: "Service Desk Analyst I",
    company: "Amynta Group",
    location: "Bedford, TX",
    period: "Jul 2018 – Mar 2020",
    type: "Full-time",
    highlights: [
      "Provided Tier 1/2 technical support for Windows systems, Active Directory accounts, printers, and business applications across the organization",
      "Participated in the deployment and imaging of 600+ Windows 10 workstations — managing installation, configuration, and asset tracking",
      "Created knowledge base documentation to standardize issue resolution and reduce repeat ticket volume",
      "Managed and routed ServiceNow incidents to appropriate support teams, ensuring SLA compliance",
    ],
    accent: "slate",
  },
  {
    title: "IT Support Specialist",
    company: "West Freeway Church of Christ",
    location: "Fort Worth, TX",
    period: "Sep 2017 – Present",
    type: "Volunteer",
    highlights: [
      "Manage IT infrastructure including desktops, livestream systems, and GoTo Connect PBX phone system",
      "Developing a modern ASP.NET Core website to replace the organization's legacy Finalweb CMS",
    ],
    accent: "emerald",
  },
];
