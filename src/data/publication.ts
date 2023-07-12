export interface Publication {
  citation: string;
  paperLink: string;
  codeLink?: string;
}

const publications: Publication[] = [
  {
    citation:
      "Kevin Chen and Haoqi Zhang. 2015. Remote Paper Prototype Testing. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI '15). ACM, New York, NY, USA, 77-80",
    paperLink: "http://dl.acm.org/citation.cfm?id=2702423",
    codeLink: "https://github.com/NUDelta/remote-paper-prototype-testing",
  },
  {
    citation:
      "Marcel Flores, Alexander Wenzel, Kevin Chen, and Aleksandar Kuzmanovic. 2018. Fury Route: Leveraging CDNs to Remotely Measure Network Distance. In A. Feldmann, G. Smaragdakis, & R. Beverly (Eds.), Passive and Active Measurement - 19th International Conference, PAM 2018, Proceedings (pp. 87-99).",
    paperLink: "https://link.springer.com/chapter/10.1007/978-3-319-76481-8_7",
  },
];

export default publications;
