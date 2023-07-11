import bloxroute from "../assets/img/company/bloxroute.png";
import delta from "../assets/img/company/delta.png";

export interface Project {
  name: string;
  company: string;
  image: string;
  link: string;
  description: string[];
  keywords: string[];
}

const projects: Project[] = [
  {
    name: "Trader API",
    company: "bloXroute Labs",
    link: "https://docs.bloxroute.com/solana/trader-api",
    image: bloxroute,
    description: [
      "Trader API integrates popular decentralized exchange applications into" +
      " a simple and fast API powered by the BDN. It provides intuitive and powerful " +
      "interfaces for DeFi traders to quickly start trading without needing to run " +
      "their own blockchain infrastructure and puzzle out the complexities of " +
      "decoding blockchain state.",
      "I ran the team that developed this API, which integrated with projects such " +
      "as Openbook, Jupiter, Drift, CronFi, etc. Initially, this API was built " +
      "with a focus on Solana, but eventually expanded to cover Ethereum DApps as well. " +
      "Aside from the API, I also created open-source SDKs in various languages, and " +
      "contributed to a number of other projects to improve Solana support.",
      "Probably the most interesting facet of this project was handling the " +
      "sheer volume of data from Solana blockchain (100s of MBs per second) and" +
      " figuring out how to transform that information into useful notifications " +
      "and updates for traders."
    ],
    keywords: [
      "solana",
      "geyser",
      "rust",
      "golang",
      "grpc",
      "typescript",
      "python",
      "mysql",
      "prometheus",
      "grafana",
    ],
  },
  {
    name: "Blockchain Distribution Network",
    company: "bloXroute Labs",
    link: "https://docs.bloxroute.com/introduction/why-use-bloxroute",
    image: bloxroute,
    description: [
      "The Blockchain Distribution Network (or the BDN) is the first and fastest " +
      "block and transaction delivery network. It enables blockchains to send and hear " +
      "about blocks and transactions faster, which can enable greater total " +
      "throughput, or a create a competitive advantage within chain for traders. ",
      "As one of the first engineers at bloXroute, I built out a large portion " +
      "of the BDN and established engineering practices. I worked extremely " +
      "closely with go-ethereum, the primary Ethereum implementation.",
      "Some of the general areas I worked in include: interfaces for en/decoding" +
      " blockchain data, connection handlers, fast event loops, route finding " +
      "algorithms, global relay network infrastructure, network socket tuning, " +
      "and so on."
    ],
    keywords: [
      "golang",
      "ethereum",
      "blockchain",
      "networking",
      "sockets",
      "python",
    ],
  },
  {
    name: "fwordle",
    company: "personal",
    link: "https://github.com/aspin/fwordle",
    image: "",
    description: [
      "I created a small application to solve randomly generated wordles with " +
        "friends. It (mostly) works but isn't really finished. Features include crediting " +
        "each player with which letter they guess so you can blame your friends properly.",
    ],
    keywords: ["python", "websockets", "react", "aiohttp", "material-ui"],
  },
  {
    name: "automagical",
    company: "personal",
    link: "https://github.com/aspin/automagical",
    image: "",
    description: [
      "I tried to create an automation game using Bevy, a super ergonomic " +
        "Rust ECS framework. Optimistically, you could describe this repo as 'so incomplete" +
        " it's barely even a game.'",
    ],
    keywords: ["rust", "bevy", "ecs", "game dev"],
  },
  {
    name: "Pair Research",
    company: "Delta Lab",
    link: "https://www.pairresearch.io/",
    image: delta,
    description: [
      "I built the first version of pair research, a novel kind of interaction " +
        "developed by Miller, Zhang, Gilbert, and Gerbert to pair members together to" +
        " work on each other's project and facilitate overcoming blockers. This app remains in " +
        "use at a number of research studios at universities today.",
      "Highlights include a horse race that tracks each participants progress and " +
        "confetti upon completion.",
    ],
    keywords: ["meteor", "mongodb", "research", "galaxy"],
  },
  {
    name: "Remote Paper Prototype Testing",
    company: "Delta Lab",
    link: "http://dl.acm.org/citation.cfm?id=2702423",
    image: delta,
    description: [
      "Remote Paper Prototype Testing (RPPT) takes a new approach to lo-fidelity" +
        " prototype evaluation, focusing on the shortcomings of mobile application " +
        "prototyping. While current prototyping methods typically create more " +
        "complex and better looking interfaces requiring many predefined " +
        "interactions, RPPT allows remote testing of paper prototypes, empowering " +
        "designers to wizard and respond to new user actions on the spot.",
      "I built all the technology necessary for RPPT (a Google Glass video streaming application, " +
        'an iOS video streaming gesture tracking application, and a web "command ' +
        "center\" interface), conducted users studies to evaluate RPPT's " +
        "effectiveness, and wrote a paper summarizing my findings.",
      "This work was accepted to CHI 2015 in Seoul, South Korea, where I " +
        "travelled to present my findings, and received the Gotaas Award from " +
        "Northwestern University for superlative undergraduate research.",
    ],
    keywords: [
      "google glass",
      "ios",
      "meteor",
      "swift",
      "mongodb",
      "research",
      "opentok",
    ],
  },
];

export default projects;
