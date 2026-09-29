/**
 * PROTOSEM JOURNAL DATA
 * Exactly 20 week entries (Week 00 through Week 19).
 * All content sections contain clean, un-invented placeholders ready for your actual notes.
 */

export interface WeekEntry {
  slug: string; // e.g. "week-00", "week-01"
  weekNumber: string; // e.g. "Week 00"
  title: string; // e.g. "Orientation & Foundations"
  date: string; // e.g. "Date to be added"
  isPublished: boolean; // Set to true when you fill in content, or leave as false for "Coming Soon" badge
  introduction: string;
  whatILearned: string[];
  activities: string[];
  challenges: string;
  keyTakeaway: string;
  media: {
    url: string;
    caption: string;
    alt: string;
  }[];
  reflection: string;
}

const defaultWeekPlaceholders = (num: number): WeekEntry => {
  const padded = num.toString().padStart(2, '0');
  return {
    slug: `week-${padded}`,
    weekNumber: `Week ${padded}`,
    title: `Week ${padded} Learning Milestone`,
    date: `Week ${padded} Date Placeholder`,
    isPublished: false,
    introduction: `Introduction placeholder for Week ${padded}. Summarize the core theme, focus area, and session orientation for this week of ProtoSem here.`,
    whatILearned: [
      `Key concept or framework learned during Week ${padded} (placeholder 1)`,
      `Practical methodology or tool explored (placeholder 2)`,
      `Insight gained regarding innovation, governance, or execution (placeholder 3)`,
    ],
    activities: [
      `Activity / Workshop session completed in Week ${padded}`,
      `Team collaboration or group exercise undertaken`,
      `Hands-on prototype, case study, or problem exploration`,
    ],
    challenges: `Challenges faced during Week ${padded}: Add the bottlenecks, design thinking obstacles, or technical hurdles encountered and how you navigated them.`,
    keyTakeaway: `Key Takeaway for Week ${padded}: Add your primary learning insight or philosophical conclusion here.`,
    media: [
      {
        url: "",
        caption: `Photo / Documentation placeholder for Week ${padded}`,
        alt: `Week ${padded} session photo placeholder`,
      }
    ],
    reflection: `Personal Reflection for Week ${padded}: Reflect on personal growth, mindset shifts, and how this week's learning connects political science, technology, and societal impact.`,
  };
};

export const protoSemWeeks: WeekEntry[] = Array.from({ length: 20 }, (_, i) => defaultWeekPlaceholders(i));
