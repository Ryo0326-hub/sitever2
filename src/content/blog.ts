export type BlogPost = {
  slug: string;
  title: string;
  date: string;      // "2025-12-16"
  summary: string;
};

export const BLOG_POSTS: BlogPost[] = [
  // Example:
  // {
  //   slug: "notes-on-detection-engineering",
  //   title: "Notes on detection engineering",
  //   date: "2025-12-16",
  //   summary: "How I think about signals, telemetry, and false positives.",
  // },
];