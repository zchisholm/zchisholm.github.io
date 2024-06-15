import {
  pipeline,
  boozed,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "DevSecOps Engineer",
    company_name: "Bloom Credit",
    date: "2024 - Present",
    details: [
      "Analyzed API DevOps pipeline and implementd security tools as needed to improve to over securuity of our product.",
      "Created easy to read documentation of security tools to help developers better understand security in their daily work.",
      "Demod and trained developers on how to use security tools to improve the security of their code.",
    ],
  },
  {
    title: "Cloud Security Intructor",
    company_name: "Web Data Driven",
    date: "2023 - 2024",
    details: [
      "Developed 6-8 week training programs to prepare students for the AWS Certified Cloud Practitioner and ISC2 Certificate in Cybersecurity exams.",
      "Regularly updated course content to stay over 95% aligned with current industry standards and emerging trends.",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "Cox Communications",
    date: "2018 - 2022",
    details: [
      "Influenced a $56 MM initiative by leading an agile scrum team of 5, developing system models for a large DOCSIS 4.0 network transformation program",
      "Improved Engineering and Business stakeholder requirements gathering time by 200% by developing and administering a custom feedback platform.",
      "Earned the 1H 2020 Synergy Award after increasing deployment speed by 75% for network capacity upgrades by developing executive network impact reports for C-level executives.",
    ],
  },
  {
    title: "Software Developer and Integrator III",
    company_name: "USAA",
    date: "2018 - 2018",
    details: [
      "Designed and spearheaded 5 weeks of training, teaching a team of 7 senior software engineers about how to use Cassandra to manage customer data.",
      "Prototyped alternative data architecture using Cassandra NoSQL database, improving customer information management.",
    ],
  },
];

const portfolio = [
  {
    name: "Boozed.ai - AI Bartender - Web App",
    description:
      "Developed a high-performance web app for VIP service at AfroTech 2023 (25,000+ attendees), using React for the frontend, Python/Flask for backend operations, MySQL for database management, all hosted on Azure. The app featured real-time robotic integration to enhance guest experiences.",
    image: boozed,
  },
  {
    name: "DevSecOps Pipeline",
    description:
      "Developed a DevSecOps pipeline for an AI chat bot, integrating security into the software development lifecycle. The pipeline included automated security testing, static code analysis, and dynamic testing.",
    image: pipeline,
  },
];

export { experiences, portfolio };

