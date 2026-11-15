import hackclubStasis from "../assets/certificates/hackclub-stasis.webp";
import iitmDataScience from "../assets/certificates/iitm-data-science-ai.webp";

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  image?: string;
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Hack Club Stasis — Certificate of Achievement",
    issuer: "Hack Club",
    description:
      "Recognized by Hack Club Stasis for building hardware projects and contributing to the global developer community. Worked on custom keyboards, PCB design, embedded systems, and robotics through independent project development.",
    image: hackclubStasis,
    verifyUrl: "https://stasis.hackclub.com/certificate?id=8VDHXX",
  },
  {
    title: "IIT Madras — Data Science and AI",
    issuer: "Centre for Outreach and Digital Education, IIT Madras (School Connect)",
    date: "October 2024",
    description:
      "Completed the 8-week certification course in Data Science and AI through IIT Madras's School Connect programme.",
    image: iitmDataScience,
  },
  {
    title: "NST DSA Hackathon",
    issuer: "Newton School of Technology",
    date: "22 July 2024",
  },
];
