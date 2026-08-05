import type { ProjectCaseStudy } from "./types";

export const professionalEmailInfrastructure: ProjectCaseStudy = {
  slug: "professional-email-infrastructure",
  title: "Professional Email Infrastructure",
  category: "Email & DNS Infrastructure",
  color: "purple",
  focusTracks: ["sysadmin", "infrastructure"],
  featuredRank: 4,
  featuredVariant: "secondary",
  summary:
    "Designed and secured a custom email platform for jeremymcain.com using Zoho Mail and Hostinger DNS. Configured MX, SPF, DKIM, and DMARC to deliver a secure, professional communication system.",
  featuredChips: ["Zoho Mail", "DNS", "SPF", "DKIM", "DMARC"],

  problem:
    "A recruiter- and client-facing identity needs a professional, custom-domain email address with verifiable authentication rather than a free consumer inbox — requiring DNS-level trust (MX, SPF, DKIM, DMARC) so messages are accepted and not flagged as spoofed, plus documented alias routing for distinct contact purposes.",
  environment: "Domain: jeremymcain.com · DNS: Hostinger · Mail: Zoho Mail",
  architecture:
    "Zoho Mail handles inbound and outbound delivery for the domain, authenticated end-to-end through DNS records hosted at the registrar (Hostinger) rather than at Zoho.",
  architectureDiagram: `Internet
   |
Hostinger DNS
   |
MX / SPF / DKIM / DMARC
   |
Zoho Mail
   |
jeremy@
 |-- hello@
 |-- jobs@
 |-- projects@
 |-- security@`,

  dnsConfiguration: [
    {
      label: "MX",
      description: "Configured Zoho Mail MX records at Hostinger to route inbound mail for the domain to Zoho.",
    },
    {
      label: "SPF",
      description: "TXT record authorizing Zoho Mail as a permitted sender for the domain (TTL 14400).",
      record: "v=spf1 include:zohomail.com ~all",
    },
    {
      label: "DKIM",
      description: "Published the Zoho-generated public key as a TXT record to sign outbound mail cryptographically.",
    },
    {
      label: "DMARC",
      description: "Configured a domain policy and aggregate reporting to enforce SPF/DKIM alignment.",
    },
  ],

  emailAliases: [
    { alias: "jeremy@", purpose: "Primary identity" },
    { alias: "hello@", purpose: "Website" },
    { alias: "jobs@", purpose: "Recruiting" },
    { alias: "projects@", purpose: "Technical collaboration" },
    { alias: "security@", purpose: "Security disclosures" },
  ],

  validation:
    "DNS propagated across resolvers, MX resolution verified, SPF passed on outbound test messages, DKIM signatures validated, DMARC policy published and reporting, and delivery confirmed for every alias.",

  skillsDemonstrated: [
    "DNS Administration",
    "Email Infrastructure",
    "Zoho Mail Administration",
    "Hostinger DNS",
    "SPF / DKIM / DMARC",
    "Technical Documentation",
  ],

  lessonsLearned:
    "Email hosting and DNS hosting are separate services. Email aliases inherit the domain authentication configuration and do not require additional MX, SPF, DKIM, or DMARC records.",

  knowledgeBase: {
    slug: "configuring-spf-dkim-dmarc-and-email-aliases",
    title: "Configuring SPF, DKIM, DMARC and Email Aliases",
  },

  screenshots: [
    { src: null, caption: "Hostinger DNS Zone Editor — MX/SPF/DKIM/DMARC records", alt: "Hostinger DNS zone editor placeholder" },
    { src: null, caption: "Zoho Mail Admin Console — domain and alias configuration", alt: "Zoho Mail admin console placeholder" },
    { src: null, caption: "MXToolbox validation results", alt: "MXToolbox validation placeholder" },
    { src: null, caption: "Email authentication test results", alt: "Email authentication results placeholder" },
  ],

  technologies: ["DNS", "Zoho Mail", "Hostinger", "MX", "SPF", "DKIM", "DMARC", "TLS"],
  bullets: [
    "Configured professional custom-domain email for jeremymcain.com",
    "Implemented secure email authentication with SPF, DKIM, and DMARC",
    "Documented DNS configuration for maintainability",
    "Established a recruiter-ready email identity with purpose-scoped aliases",
  ],
};
