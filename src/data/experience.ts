import bloxroute from "../assets/img/company/bloxroute.png";
import delta from "../assets/img/company/delta.png";
import epic from "../assets/img/company/epic.png";
import fitbit from "../assets/img/company/fitbit.png";
import indiegogo from "../assets/img/company/indiegogo.png";
import toptal from "../assets/img/company/toptal.png";

export interface Experience {
  company: string;
  title: string;
  location: string;
  description: string[];
  image: string;
  dates: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "bloXroute Labs",
    title: "Software Engineering Tech Lead",
    location: "Chicago, IL",
    description: [
      "As one of the first engineers at bloXroute, I've been " +
        "heavily involved in the building out our entire engineering org. " +
        "During my time, I've built out the core infrastructure of most of our " +
        "systems and managed other developers as we've grown and started " +
        "specializing more.",
      "I've worked on low level network programming, blockchain protocol byte " +
        "parsing and serialization, smart contracts, fast event loops, DeFi " +
        "exchange integrations, open-source libraries and SDKs, metrics reporting," +
        "monitoring systems, and much much more.",
    ],
    image: bloxroute,
    dates: "September 2018 => Present",
    tech: ["go", "solana", "ethereum", "python", "docker"],
  },
  {
    company: "Fitbit",
    title: "Software Engineer",
    location: "Boston, MA",
    description: [
      "Fitbit was my first full-time software engineering job. I worked " +
        "primarily on microservice backends in our distributed network. Some " +
        "projects I worked on include a fitness rules engine and a content " +
        "delivery proxy. I also worked on developing Fitbit's ecommerce systems.",
    ],
    image: fitbit,
    dates: "September 2016 => September 2018",
    tech: ["java", "kotlin", "cassandra", "groovy"],
  },
  {
    company: "Toptal",
    title: "Freelance Developer",
    location: "Remote",
    description: [
      "I occasionally pick up freelance contracts on Toptal, but I'm" +
        " not too focused on this right now in preference to my full-time roles.",
    ],
    image: toptal,
    dates: "ongoing",
    tech: ["react", "nodejs", "mongodb", "angular", "mysql"],
  },
  {
    company: "Indiegogo",
    title: "Software Engineer Intern / KPCB Fellow",
    location: "San Francisco, CA",
    description: [
      "I worked as a full-stack developer intern at Indiegogo with an emphasis " +
        "on iOS development. I completed stories in payments, researched mobile " +
        "frameworks, and built out behavior driven test cases.",
      "I was placed at Indiegogo as one of the 2015 KPCB Fellows, which is " +
        "an exclusive program that places next-generation engineers and " +
        "entrepreneurs at startups.",
    ],
    image: indiegogo,
    dates: "Summer 2015",
    tech: ["ios", "swift"],
  },
  {
    company: "Delta Lab",
    title: "Researcher",
    location: "Evanston, IL",
    description: [
      "Delta Lab was my primary commitment during college. I was part of the " +
        "first iteration of Agile Research Studio, an initiative for " +
        "undergraduate students to conduct independent research. During this time, " +
        "I designed and implemented several projects, ran " +
        "user studies, transcribed interviews, and much more.",
      "My work in paper prototyping was published in ACM, and was recognized" +
        " the Gotaas Award at Northwestern for superlative undergraduate research. " +
        "I also was invited to fly to South Korea to talk about my projects.",
    ],
    image: delta,
    dates: "March 2014 - June 2016",
    tech: [
      "meteor",
      "mongodb",
      "webrtc",
      "ios",
      "swift",
      "google-glass",
      "java",
    ],
  },
  {
    company: "Epic",
    title: "Software Engineer Intern",
    location: "Madison, WI",
    description: [
      "I worked at Epic to develop a pharmacy kiosk application in C# and " +
        "XAML. My work involved interfacing with a variety of medical records " +
        "services and automating allergy and insurance checks.",
    ],
    image: epic,
    dates: "Summer 2014",
    tech: ["c#", "wpf"],
  },
];

export default experiences;
