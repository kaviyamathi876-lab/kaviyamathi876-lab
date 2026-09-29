/**
 * SKILLS DATA
 * NOTE: As per critical guidelines, NO skill percentages, progress bars, or invented ratings.
 * Edit categories and skill lists cleanly below.
 */

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: 'users' | 'search' | 'lightbulb' | 'cpu';
  accentColor: string; // Tailwind color class or hex for border/badge accent
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "communication-leadership",
    title: "Communication & Leadership",
    description: "Fostering collaboration, team synergy, and articulate public discourse across diverse stakeholders.",
    icon: "users",
    accentColor: "border-amber-500/30 text-amber-300",
    skills: [
      "Communication",
      "Teamwork",
      "Public Speaking",
    ],
  },
  {
    id: "research-political",
    title: "Research & Political Skills",
    description: "Critical inquiry into governance structures, public policy evaluation, and qualitative analysis.",
    icon: "search",
    accentColor: "border-blue-500/30 text-blue-300",
    skills: [
      "Research",
      "Political Analysis",
    ],
  },
  {
    id: "creative-problem-solving",
    title: "Creative & Problem-Solving",
    description: "Approaching societal and operational challenges with curiosity, structured thinking, and inventive ideation.",
    icon: "lightbulb",
    accentColor: "border-emerald-500/30 text-emerald-300",
    skills: [
      "Problem Solving",
      "Creativity",
    ],
  },
  {
    id: "entrepreneurship-technology",
    title: "Entrepreneurship & Technology",
    description: "Leveraging modern digital productivity tools and entrepreneurial frameworks to scale real-world impact.",
    icon: "cpu",
    accentColor: "border-cyan-500/30 text-cyan-300",
    skills: [
      "Entrepreneurship",
      "Digital/Technology Skills",
      "Microsoft Office",
    ],
  },
];
