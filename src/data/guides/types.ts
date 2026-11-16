export type GuideBlock =
  | string
  | { img: string; alt: string }
  | { lesson: string };

export type GuideStep = {
  title: string;
  date?: string;
  hours?: number;
  blocks: GuideBlock[];
};

export type Guide = {
  /** Shown next to the Guide heading, e.g. "From my build journal". */
  source?: string;
  intro: string[];
  totalHours?: number;
  steps: GuideStep[];
  next?: string[];
};

export const imgFor =
  (slug: string) =>
  (file: string, alt: string): GuideBlock => ({
    img: `/blog/${slug}/${file}.webp`,
    alt,
  });

export const lesson = (text: string): GuideBlock => ({ lesson: text });
