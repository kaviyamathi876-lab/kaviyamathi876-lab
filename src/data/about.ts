/**
 * ABOUT SECTION DATA
 * Edit academic background, core interests, strengths, career aspirations, and motivations here.
 */

export interface PillarCard {
  title: string;
  subtitle: string;
  description: string;
  icon: 'academic' | 'target' | 'heart' | 'compass';
}

export interface AboutData {
  degree: string;
  college: string;
  bioHeading: string;
  bioSummary: string;
  careerGoal: string;
  motivation: string;
  interests: string[];
  strengths: string[];
  pillars: PillarCard[];
}

export const aboutData: AboutData = {
  degree: "B.A. Political Science",
  college: "Kumaraguru College of Liberal Arts and Sciences (KCLAS)",
  bioHeading: "Merging Civic Foundations with Frontier Innovation",
  bioSummary:
    "As an undergraduate in Political Science at KCLAS and an innovation fellow exploring technology at Forge, my focus is at the intersection where governance meets human-centric problem solving. I study systems of power and public policy while building hands-on competencies in tech, design thinking, and social enterprise.",
  careerGoal:
    "To build a meaningful career where I can combine political knowledge with innovation, technology, and entrepreneurship to solve real-world problems.",
  motivation:
    "Understanding people's problems, creating practical solutions, learning new things, and making a positive impact on society.",
  interests: [
    "Politics",
    "Governance",
    "Social Issues",
    "Entrepreneurship",
    "Innovation",
    "Technology",
    "Community Development",
  ],
  strengths: [
    "Leadership",
    "Communication",
    "Teamwork",
    "Creativity",
    "Problem-Solving",
    "Willingness to Learn",
  ],
  pillars: [
    {
      title: "Academic Focus",
      subtitle: "B.A. Political Science",
      description: "Kumaraguru College of Liberal Arts and Sciences (KCLAS). Deepening understanding of political theory, constitutional law, public administration, and international dynamics.",
      icon: "academic",
    },
    {
      title: "Career Goal",
      subtitle: "Purpose-Driven Trajectory",
      description: "To build a meaningful career combining political knowledge with innovation, technology, and entrepreneurship to solve real-world problems.",
      icon: "target",
    },
    {
      title: "Core Motivation",
      subtitle: "People-Centered Impact",
      description: "Understanding people's problems, creating practical solutions, learning new things, and making a positive impact on society.",
      icon: "heart",
    },
    {
      title: "Innovation Ecosystem",
      subtitle: "Forge ProtoSem Fellowship",
      description: "Exploring rapid prototyping, entrepreneurial problem validation, technology integration, and sustainable grassroots solutions.",
      icon: "compass",
    }
  ]
};
