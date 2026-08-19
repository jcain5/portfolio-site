// Competency data now lives in the Keystatic `competencies` collection
// (see app/lib/competencies.ts) — this file only keeps the flat tools
// strip, which changes rarely and has no CMS workflow benefit.
export const toolsAndPlatforms: string[] = [
  "Windows Server 2022", "Active Directory", "Entra ID", "Microsoft 365",
  "Microsoft Intune", "BlackBerry UEM", "VMware AirWatch", "VMware Horizon",
  "Citrix", "Cloud PC (W365)", "Proxmox", "pfSense",
  "PowerShell", "SCCM", "ServiceNow", "BMC Remedy",
];
