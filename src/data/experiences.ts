/**
 * EXPERIENCES DATA
 * Includes Club & Leadership experiences and Grassroots Internship experiences.
 * Fully editable and configured with expandable details.
 */

export interface ClubExperience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  teamVertical: string;
  shortSummary: string;
  activities: string[];
  contributions: string[];
  learnings: string[];
  badge: string;
}

export interface InternshipExperience {
  id: string;
  title: string;
  office: string;
  location: string;
  duration: string;
  badge: string;
  summary: string;
  activities: string[];
  keyLearnings: string[];
}

export interface ExperiencesData {
  clubExperiences: ClubExperience[];
  internships: InternshipExperience[];
}

export const experiencesData: ExperiencesData = {
  clubExperiences: [
    {
      id: "ignite-committee",
      organization: "IGNITE",
      role: "Committee Member",
      duration: "Duration Placeholder (e.g., 2024 – Present)", // EDIT: Fill with your dates
      teamVertical: "Team / Vertical Placeholder (e.g., Operations / Event Planning)", // EDIT: Add team
      shortSummary: "Contributing as an active committee member in driving club initiatives, student engagement, and collaborative campus programming.",
      activities: [
        "Participated in organizing flagship events and interactive workshops",
        "Collaborated with cross-functional student teams on event logistics and outreach",
        "Assisted in coordinating discussions and member meetings",
      ],
      contributions: [
        "Supported coordination efforts for student participation",
        "Facilitated seamless communication across team leads and volunteers",
        "Contributed to event execution and post-event debriefs",
      ],
      learnings: [
        "Practical event operations and team coordination dynamics",
        "Peer leadership, active listening, and conflict resolution",
        "Adaptive problem solving under tight timelines",
      ],
      badge: "Leadership & Club",
    },
  ],

  internships: [
    {
      id: "mla-internship",
      title: "Legislative & Constituency Governance Internship",
      office: "Office of MLA Ashok Kumar, Krishnagiri",
      location: "Krishnagiri, Tamil Nadu",
      duration: "21 Days",
      badge: "Grassroots Governance",
      summary:
        "An intensive 21-day immersive internship observing grassroots legislative administration, public grievance redressal mechanisms, and constituency development schemes in Krishnagiri.",
      activities: [
        "Observed the day-to-day functioning of the MLA office",
        "Interacted with officials and understood public grievances",
        "Observed constituency-level issues and public interactions",
        "Learned about government schemes and welfare programmes",
        "Observed the legislative and administrative roles of an MLA",
        "Assisted in basic documentation and office-related activities",
      ],
      keyLearnings: [
        "Understanding the role and responsibilities of an MLA",
        "Knowledge about constituency administration",
        "Understanding public grievances and local issues",
        "Improved communication and observation skills",
        "Learned how elected representatives interact with citizens and officials",
        "Gained practical exposure to grassroots governance and political processes",
      ],
    },
  ],
};
