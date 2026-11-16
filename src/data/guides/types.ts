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

/**
 * Helpers for journal images saved as /blog/<slug>/fSS-N.webp
 * (SS = session number, oldest first; N = image number in that session).
 */
export const journalImgs = (slug: string) => {
  const one = (id: string, alt: string): GuideBlock => ({ img: `/blog/${slug}/${id}.webp`, alt });
  const many = (step: string, from: number, to: number, alt: string): GuideBlock[] =>
    Array.from({ length: to - from + 1 }, (_, k) =>
      one(`${step}-${from + k}`, to > from ? `${alt} (${k + 1} of ${to - from + 1})` : alt),
    );
  return { one, many };
};
