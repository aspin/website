export interface Experience {
  company: string,
  title: string,
  location: string,
  description: string,
  image: string,
}

const experiences: Experience[] = [
  {
    company: "bloXroute Labs",
    title: "Software Engineer Tech Lead",
    location: "Chicago, IL",
    description: "foo bar",
    image: "",
  },
  {
    company: "Fitbit",
    title: "Software Engineer",
    location: "Boston, MA",
    description: "foo bar baz",
    image: "/src/assets/img/fitbit.png",
  },
];

export default experiences;