import type { ColorKey } from "./colors";

export interface Certification {
  name: string;
  issuer: string;
  abbr: string;
  color: ColorKey;
  category: string;
  credly: string;
}

export const certs: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    abbr: "SEC+",
    color: "red",
    category: "Security",
    credly: "https://www.credly.com/badges/d233a634-7fac-4b05-80c5-ab9687d4734a/public_url",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    abbr: "CCNA",
    color: "blue",
    category: "Networking",
    credly: "https://www.credly.com/badges/fab75ec6-9657-4558-93f8-af2d95af50d1/public_url",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    abbr: "AZ-900",
    color: "cyan",
    category: "Cloud",
    credly: "https://www.credly.com/badges/76716da4-d077-453f-a2ee-5bbfce924671/public_url",
  },
  {
    name: "LPI Linux Essentials",
    issuer: "Linux Professional Institute",
    abbr: "LPI",
    color: "yellow",
    category: "Linux",
    credly: "https://www.credly.com/badges/YOUR-LPI-BADGE-ID/public_url",
  },
];
