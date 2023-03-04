import bloxroute from "../assets/img/company/bloxroute.png";
import fitbit from "../assets/img/company/fitbit.png";

export interface Experience {
  company: string;
  title: string;
  location: string;
  description: string;
  image: string;
  dates: string;
}

const experiences: Experience[] = [
  {
    company: "bloXroute Labs",
    title: "Software Engineer Tech Lead",
    location: "Chicago, IL",
    description: "blockchain infrastructure company",
    image: bloxroute,
    dates: "September 2018 => Present",
  },
  {
    company: "Fitbit",
    title: "Software Engineer",
    location: "Boston, MA",
    description: "wearable tech backend engineer",
    image: fitbit,
    dates: "September 2016 => September 2018",
  },
  {
    company: "Toptal",
    title: "Freelance Developer",
    location: "Remote",
    description: "occasional freelance contracts",
    image: "",
    dates: "ongoing",
  },
  {
    company: "Indiegogo",
    title: "Software Engineer Intern / KPCB Fellow",
    location: "San Francisco, CA",
    description: "intern + kpcb fellow",
    image: "",
    dates: "Summer 2015",
  },
  {
    company: "Epic",
    title: "Software Engineer Intern",
    location: "Madison, WI",
    description: "work",
    image: "",
    dates: "Summer 2014",
  },
];

export default experiences;
