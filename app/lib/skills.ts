import type { ColorKey } from "./colors";
import type { FocusId } from "../context/CareerFocusContext";

export interface SkillGroup {
  label: string;
  color: ColorKey;
  icon: string;
  focusTracks: NonNullable<FocusId>[];
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Enterprise Infrastructure",
    color: "cyan",
    icon: "🏢",
    focusTracks: ["sysadmin", "infrastructure"],
    skills: ["Active Directory DS", "Windows Server 2022", "Group Policy (GPO)", "SCCM Deployment", "ServiceNow / BMC Remedy"],
  },
  {
    label: "Windows Server",
    color: "blue",
    icon: "🪟",
    focusTracks: ["sysadmin"],
    skills: ["DNS Server Management", "DHCP Server Management", "IIS Web Server", "Remote Desktop Services", "Server Roles & Features"],
  },
  {
    label: "Microsoft Technologies",
    color: "indigo",
    icon: "🔷",
    focusTracks: ["enterprise-apps", "sysadmin"],
    skills: ["Microsoft 365 Admin Center", "Exchange Online", "SharePoint Online", "Microsoft Teams Admin", "Azure Fundamentals (AZ-900)"],
  },
  {
    label: "Identity & Access",
    color: "amber",
    icon: "🔐",
    focusTracks: ["sysadmin"],
    skills: ["Microsoft Entra ID (Azure AD)", "Conditional Access & MFA", "Role-Based Access Control", "Identity Lifecycle Management", "Privilege Tiering"],
  },
  {
    label: "Virtualization",
    color: "purple",
    icon: "💻",
    focusTracks: ["infrastructure", "sysadmin"],
    skills: ["VMware Horizon", "Proxmox VE", "Citrix Virtual Desktops", "Cloud PC (W365)", "VirtualBox"],
  },
  {
    label: "Networking",
    color: "emerald",
    icon: "🌐",
    focusTracks: ["infrastructure"],
    skills: ["DNS / DHCP / TCP-IP", "pfSense Firewall & VLANs", "CCNA Certified", "VPN (OpenVPN)", "VLAN Segmentation"],
  },
  {
    label: "Automation",
    color: "slate",
    icon: "⚙️",
    focusTracks: ["sysadmin", "enterprise-apps"],
    skills: ["PowerShell Scripting", "Account Provisioning Automation", "Microsoft Intune MDM", "BlackBerry UEM / AirWatch", "SCCM Task Sequences"],
  },
  {
    label: "Security",
    color: "rose",
    icon: "🛡️",
    focusTracks: ["infrastructure"],
    skills: ["CompTIA Security+", "Snort IDS/IPS", "Firewall Rule Design", "Network Isolation (VLAN)", "Zero-Trust Principles"],
  },
];

export const toolsAndPlatforms: string[] = [
  "Windows Server 2022", "Active Directory", "Entra ID", "Microsoft 365 Admin Center",
  "Microsoft Intune", "BlackBerry UEM", "VMware AirWatch", "VMware Horizon",
  "Citrix", "Cloud PC (W365)", "Proxmox", "pfSense",
  "Azure Portal", "PowerShell", "SCCM", "ServiceNow", "BMC Remedy",
];
