import { Typography } from "@mui/material";
import React from "react";

import LinkNewTab from "../link_new_tab/LinkNewTab";
import Section from "../section/Section";

function About() {
  return (
    <Section id="about">
      <Typography variant="h2">[about]</Typography>
      <Typography variant="body1">
        Hi there! I'm Kevin and I'm a software engineer.
      </Typography>

      <Typography variant="body1">
        I most recently was a tech lead / engineering manager at a bloXroute Labs. I
        led a team of blockchain experts that focus on integrating a variety of
        cross-chain (most commonly Solana and Ethereum) DeFi projects with
        networking infrastructure powered by the BDN. I've since moved roles to
        Hidden Road, and will soon need to update this blurb!
      </Typography>

      <Typography variant="body1">
        My technical interests generally relate to expanding generalizable
        knowledge. For me, this usually takes the form of technical research
        (I've conducted and published research; see projects for more details)
        and contributing to open-source. I've submitted issues and PRs to a
        number of open-source projects and almost always open up my personal
        projects in case someone else on the internet can find something
        educational. I always particularly savor job-related tasks that involve
        contributing some knowledge back to any open-source community.
      </Typography>

      <Typography variant="body1">
        I prefer programming to managing, but I take managerial responsibilities
        seriously and think of them as hard work. In my role, I see myself as
        responsible for facilitating for a team of proficient developers and
        advocating for strong work-life balance. One strong opinion I have is
        that requiring unwanted evening or weekend development a sign that I am
        not doing my job correctly in balancing my teams time against business
        needs. Simultaneously, I consider conflicts between my advocacy for what
        work my team can take against constant business asks to be a critical
        part of what makes a healthy give-and-take balance in the company.
      </Typography>

      <Typography variant="body1">
        Some auxiliary interests include{" "}
        <LinkNewTab href="https://www.vim.org/">vim</LinkNewTab>,{" "}
        <LinkNewTab href="https://www.rust-lang.org/">Rust</LinkNewTab>,{" "}
        <LinkNewTab href="https://elixir-lang.org/">Elixir</LinkNewTab>,
        developer productivity tooling, game development (see{" "}
        <LinkNewTab href="https://bevyengine.org/">Bevy</LinkNewTab>,{" "}
        <LinkNewTab href="https://kyren.github.io/2018/09/14/rustconf-talk.html">
          a really interesting ECS talk
        </LinkNewTab>
        ), and terminal UI apps (see{" "}
        <LinkNewTab href="https://github.com/charmbracelet/bubbletea">
          charmbracelet
        </LinkNewTab>
        ). If I have time even outside of that you can find me climbing, gaming,
        training for a triathlon, or playing with my dog (TODO: link).
      </Typography>
      <Typography variant="body1"></Typography>
    </Section>
  );
}

export default About;
