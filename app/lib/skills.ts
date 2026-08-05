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
    label: "Infrastructure Administration",
    color: "cyan",
    icon: "🏢",
    focusTracks: ["sysadmin", "infrastructure"],
    skills: ["Active Directory Domain Services", "Group Policy (GPO)", "DNS Server Management", "DHCP Server Management", "SCCM Deployment"],
  },
  {
    label: "Identity & Access",
    color: "amber",
    icon: "🔐",
    focusTracks: ["sysadmin", "iam"],
    skills: ["Microsoft Entra ID (Azure AD)", "Role-Based Access Control", "Identity Lifecycle Management", "Privilege Tiering", "MFA Troubleshooting"],
  },
  {
    label: "Networking",
    color: "emerald",
    icon: "🌐",
    focusTracks: ["infrastructure"],
    skills: ["pfSense Firewall & VLANs", "Firewall Rule Design", "VLAN Segmentation", "Cisco Catalyst Switching (CCNA)", "DNS / DHCP / TCP-IP", "VPN (OpenVPN)", "Zero-Trust Principles"],
  },
  {
    label: "Virtualization",
    color: "purple",
    icon: "💻",
    focusTracks: ["infrastructure", "sysadmin"],
    skills: ["Proxmox VE", "VMware Horizon", "Citrix Virtual Desktops", "Cloud PC (Windows 365)", "VirtualBox"],
  },
  {
    label: "Linux Administration",
    color: "slate",
    icon: "🐧",
    focusTracks: ["infrastructure"],
    skills: ["Ubuntu Server Administration", "systemd Service Management", "Nginx Reverse Proxy", "SSH & Remote Administration", "Debian"],
  },
  {
    label: "Windows Administration",
    color: "blue",
    icon: "🪟",
    focusTracks: ["sysadmin"],
    skills: ["Windows Server 2022", "Server Roles & Features", "IIS Web Server", "Remote Desktop Services", "Windows 10/11 Endpoint Administration", "Microsoft 365 Admin Center", "Exchange Online", "SharePoint Online", "Microsoft Teams Admin"],
  },
  {
    label: "Automation",
    color: "indigo",
    icon: "⚙️",
    focusTracks: ["sysadmin", "iam"],
    skills: ["PowerShell Scripting", "Account Provisioning Automation", "Microsoft Intune MDM", "BlackBerry UEM / AirWatch", "SCCM Task Sequences"],
  },
  {
    label: "Monitoring",
    color: "rose",
    icon: "📡",
    focusTracks: ["infrastructure"],
    skills: ["Wazuh (SIEM/EDR)", "Suricata Network IDS", "Snort IDS/IPS", "Service Health Validation", "Log Review & Diagnostics"],
  },
  {
    label: "Backup & Recovery",
    color: "red",
    icon: "💾",
    focusTracks: ["infrastructure"],
    skills: ["Automated Backup Scheduling", "Backup Integrity Verification", "Disaster Recovery Procedures", "Database Backup & Restore", "Retention Management"],
  },
  {
    label: "Documentation",
    color: "yellow",
    icon: "📋",
    focusTracks: ["sysadmin", "infrastructure", "iam"],
    skills: ["Architecture & Configuration Documentation", "Incident Documentation", "Runbook & Recovery Procedures", "Knowledge Base Authoring", "ServiceNow / BMC Remedy"],
  },
];

export const toolsAndPlatforms: string[] = [
  "Windows Server 2022", "Active Directory", "Entra ID", "Microsoft 365 Admin Center",
  "Microsoft Intune", "BlackBerry UEM", "VMware AirWatch", "VMware Horizon",
  "Citrix", "Cloud PC (W365)", "Proxmox", "pfSense",
  "Azure Portal", "PowerShell", "SCCM", "ServiceNow", "BMC Remedy",
];
