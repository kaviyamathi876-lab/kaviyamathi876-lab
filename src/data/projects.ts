/**
 * PROJECTS DATA
 * Clean, structured placeholder project cards.
 * Edit your projects here when ready. No invented details.
 */

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  problemAddressed: string;
  solution: string;
  role: string;
  technologies: string[];
  image: string; // Path or placeholder
  projectUrl?: string; // Optional external/demo link
  githubUrl?: string; // Optional code repository link
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    name: "Project Name (Placeholder 1)",
    shortDescription: "Project description will be added soon. A placeholder for a civic tech, public policy, or innovation initiative.",
    problemAddressed: "Describe the specific social, political, or institutional challenge this project aimed to solve.",
    solution: "Outline the concept, product, or intervention designed to address the challenge effectively.",
    role: "Lead Researcher / Solution Designer",
    technologies: ["Design Thinking", "Problem Validation", "Civic Tech"],
    image: "", // Leave blank to show the elegant placeholder banner
    projectUrl: "", // Leave empty if not applicable yet
    githubUrl: "", // Leave empty if not applicable yet
    category: "Civic Innovation",
  },
  {
    id: "project-2",
    name: "Project Name (Placeholder 2)",
    shortDescription: "Project description will be added soon. A placeholder for a technology-driven community or campus solution.",
    problemAddressed: "Describe the target user need, public grievance, or organizational inefficiency identified.",
    solution: "Summarize the prototype, framework, or digital platform developed.",
    role: "Project Contributor / Analyst",
    technologies: ["Digital Tools", "Community Outreach", "Policy Analysis"],
    image: "",
    projectUrl: "",
    githubUrl: "",
    category: "Technology & Policy",
  },
  {
    id: "project-3",
    name: "Project Name (Placeholder 3)",
    shortDescription: "Project description will be added soon. A placeholder for an entrepreneurial venture or social impact endeavor.",
    problemAddressed: "Identify the market gap or civic need explored during ProtoSem / Forge coursework.",
    solution: "Explain the proposed business model, prototype, or action roadmap.",
    role: "Co-creator / Strategist",
    technologies: ["Entrepreneurship", "User Research", "Rapid Prototyping"],
    image: "",
    projectUrl: "",
    githubUrl: "",
    category: "Social Enterprise",
  },
];
