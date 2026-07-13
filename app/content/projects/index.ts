import type { ProjectCaseStudy } from "./types";
import { enterpriseInfrastructureLab } from "./enterprise-infrastructure-lab";
import { professionalEmailInfrastructure } from "./professional-email-infrastructure";
import { wfcocRedesign } from "./wfcoc-redesign";

export type { ProjectCaseStudy, ScreenshotSlot, DnsConfigEntry, EmailAlias } from "./types";

export const projects: ProjectCaseStudy[] = [
  enterpriseInfrastructureLab,
  professionalEmailInfrastructure,
  wfcocRedesign,
];
