import type { ProjectCaseStudy } from "./types";
import { enterpriseInfrastructureLab } from "./enterprise-infrastructure-lab";
import { professionalEmailInfrastructure } from "./professional-email-infrastructure";
import { wfcocRedesign } from "./wfcoc-redesign";
import { networkPortScanner } from "./network-port-scanner";
import { healthDashboard } from "./health-dashboard";

export type { ProjectCaseStudy, ScreenshotSlot, DnsConfigEntry, EmailAlias } from "./types";

// Note: networkPortScanner is ordered before healthDashboard so it renders
// first (more prominently) within the secondary/non-featured project grid —
// both remain in that supporting tier, below the primary IT ops/infra/IAM
// Featured Projects.
export const projects: ProjectCaseStudy[] = [
  enterpriseInfrastructureLab,
  professionalEmailInfrastructure,
  wfcocRedesign,
  networkPortScanner,
  healthDashboard,
];
