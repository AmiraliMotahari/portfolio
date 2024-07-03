"use client";
import React from "react";
import { Card3d } from "./Card3d";
import doctorize from "../assets/projects/doctorize.png";
import oriflame from "../assets/projects/oriflame.png";
import themtfy from "../assets/projects/themtfy.png";

const projects = [
  {
    title: "Doctorize",
    text: "Ready to elevate your medical practice's marketing game? At Doctorize, we specialize in helping physicians attract and retain patients through smart, effective marketing strategies. Whether it's understanding your target audience, building a robust email list, or optimizing your website for search engines, we’ve got you covered.",
    urlTitle: "Doctorize.com",
    url: "https://dev.doctorize.com",
    image: doctorize,
  },
  {
    title: "Oriflame",
    text: "Oriflame is a leading beauty company selling direct. We are present in more than 60 countries, of which we are the market leader in more than a half. Oriflame has its origin in Sweden with corporate offices in Switzerland. We offer a wide range of high-quality beauty products as well as a unique opportunity to join our sales force and start your own business.",
    urlTitle: "oriflame.com",
    url: "https://amiralimotahari.github.io/dynamicoriflame/",
    image: oriflame,
  },
  {
    title: "Themtfy",
    text: "Themtfy is a lightweight JavaScript library for displaying toast notifications on web pages. It allows you to easily create customizable toast messages with various configuration options.",
    urlTitle: "npmjs.com/package/themtfy",
    url: "https://www.npmjs.com/package/themtfy",
    image: themtfy,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-4 py-10 bg-slate-950"
    >
      <h3 className="heading mb-4">Projects</h3>
      <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4 ">
        {projects.map((elem) => (
          <li key={elem.url}>
            <Card3d
              title={elem.title}
              text={elem.text}
              urlTitle={elem.urlTitle}
              url={elem.url}
              image={elem.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
