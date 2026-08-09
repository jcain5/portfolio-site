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
    name: "Cisco CCNA",
    issuer: "Cisco",
    abbr: "CCNA",
    color: "blue",
    category: "Networking",
    credly: "https://www.credly.com/badges/fab75ec6-9657-4558-93f8-af2d95af50d1/public_url",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    abbr: "SEC+",
    color: "red",
    category: "Security",
    credly: "https://www.credly.com/badges/d233a634-7fac-4b05-80c5-ab9687d4734a/public_url",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    abbr: "NET+",
    color: "indigo",
    category: "Networking",
    credly: "https://www.credly.com/badges/c3b2b7a4-66d5-42b4-bcde-fa21458ad2f1/public_url",
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    abbr: "A+",
    color: "slate",
    category: "IT Fundamentals",
    credly: "https://www.credly.com/badges/2bf871c2-58e3-4a8e-b489-d5641277b5a1/public_url",
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
    credly: "https://www.credly.com/badges/26872cb3-01ab-4605-aef6-969206a845f6/public_url",
  },
];
