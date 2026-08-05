import type { ProjectCaseStudy } from "./types";
import { enterpriseInfrastructureLab } from "./enterprise-infrastructure-lab";
import { professionalEmailInfrastructure } from "./professional-email-infrastructure";
import { wfcocRedesign } from "./wfcoc-redesign";
import { networkPortScanner } from "./network-port-scanner";
import { healthDashboard } from "./health-dashboard";

export type { ProjectCaseStudy, ScreenshotSlot, DnsConfigEntry, EmailAlias } from "./types";

// Featured order is driven by each project's `featuredRank` (see
// enterpriseInfrastructureLab, wfcocRedesign, networkPortScanner, and
// professionalEmailInfrastructure). healthDashboard carries no featuredRank,
// so it's the sole project left in the non-featured "Earlier Projects" tier.
//
// A PowerShell Systems Administration Toolkit case study is prepared at
// ./powershell-systems-administration-toolkit.ts but intentionally not
// imported/registered here — it's in-development and not yet real, tested
// work, so it stays unpublished until it is.
export const projects: ProjectCaseStudy[] = [
  enterpriseInfrastructureLab,
  professionalEmailInfrastructure,
  wfcocRedesign,
  networkPortScanner,
  healthDashboard,
];
