/**
 * CERTIFICATIONS DATA
 * 
 * HOW TO TOGGLE OR REMOVE THIS SECTION:
 * - To temporarily HIDE this section and its navbar link, set `enabled: false` below.
 * - To SHOW the section when you have earned certificates, set `enabled: true` and fill in the items array.
 * - If you prefer to completely delete it from the website, remove <Certifications /> from HomePage.tsx.
 */

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string; // Optional URL or PDF link
  image?: string; // Optional logo/badge image
}

export interface CertificationsConfig {
  enabled: boolean; // Set to false to hide section + navbar link
  heading: string;
  subheading: string;
  items: Certificate[];
}

export const certificationsConfig: CertificationsConfig = {
  enabled: true, // Toggle to false to hide completely from navbar and page
  heading: "Certifications & Credentials",
  subheading: "Verified learning milestones, professional workshops, and academic credentials.",
  items: [
    {
      id: "cert-1",
      name: "Certificate Name Placeholder 1",
      issuer: "Issuing Organization (e.g. Coursera / KCLAS / Forge / HarvardX)",
      date: "Year / Month Placeholder",
      credentialUrl: "", // Leave empty to show disabled/placeholder button
      image: "",
    },
    {
      id: "cert-2",
      name: "Certificate Name Placeholder 2",
      issuer: "Issuing Organization (e.g. UN / Government / NPTEL)",
      date: "Year / Month Placeholder",
      credentialUrl: "",
      image: "",
    },
  ],
};
