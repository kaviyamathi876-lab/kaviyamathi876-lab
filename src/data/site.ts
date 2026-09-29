/**
 * SITE CONFIGURATION & GENERAL DATA
 * Edit your basic info, social profiles, navigation links, and contact options here.
 */

export interface NavLink {
  name: string;
  href: string; // Hash anchor (e.g., "#about") or route
  id: string;
}

export interface SocialLink {
  platform: string;
  url: string; // If empty string, will be gracefully hidden
  username: string;
  icon: 'mail' | 'linkedin' | 'github' | 'twitter' | 'instagram' | 'globe';
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  college: string;
  degree: string;
  location: string;
  email: string;
  profileImagePath: string;
  resumePdfPath: string;
  contactFormActionUrl: string; // Formspree or other endpoint placeholder (e.g. "https://formspree.io/f/your-form-id")
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  footer: {
    tagline: string;
    copyrightYear: number;
    notice: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Kaviya M",
  title: "Kaviya M — Political Science & Innovation",
  tagline: "Politics, People & Purpose — Building Ideas That Matter.",
  intro:
    "I'm a Political Science student passionate about understanding people, solving real-world problems, and turning ideas into meaningful solutions. At Forge, I'm exploring innovation, entrepreneurship, and technology while learning to build ideas that create real impact.",
  college: "Kumaraguru College of Liberal Arts and Sciences (KCLAS)",
  degree: "B.A. Political Science",
  location: "Krishnagiri / Coimbatore, Tamil Nadu",
  email: "kaviyamathivanan@example.com", // EDIT: Update with your primary email
  profileImagePath: "/images/profile.jpg",
  resumePdfPath: "/resume/Kaviya-M-ATS-Resume.pdf",
  // Formspree action URL placeholder: replace with your actual Formspree endpoint if using one
  contactFormActionUrl: "", 
  navLinks: [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experiences", href: "#experiences", id: "experiences" },
    { name: "ProtoSem", href: "#protosem", id: "protosem" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ],
  socialLinks: [
    {
      platform: "Email",
      url: "mailto:kaviyamathivanan@example.com",
      username: "kaviyamathivanan@example.com",
      icon: "mail",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/", // EDIT: Add your LinkedIn profile URL here
      username: "linkedin.com/in/kaviya-m",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/", // EDIT: Add your GitHub profile URL here
      username: "github.com/kaviya-m",
      icon: "github",
    },
  ],
  footer: {
    tagline: "Politics, People & Purpose — Building Ideas That Matter.",
    copyrightYear: 2026,
    notice: "Built with passion, civic commitment, and innovative spirit.",
  },
};
