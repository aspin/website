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
];

export default experiences;
