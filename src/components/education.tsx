"use client";

import React from "react";

import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundBeams } from "./ui/background-beams";

const dummyContent = [
  {
    title: "Diploma",
    description: (
      <article>
        <p>School: Mofid 2</p>
        <p>Year: 2019</p>
        <p>Field: Mathematics and Physics</p>
        <p>GPA: 19.36 of 20</p>
      </article>
    ),
    badge: "Secondary Education",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bachelor's Degree",
    description: (
      <article>
        <p>University: Islamic Azad University (Science and Research Branch)</p>
        <p>Year: 2019 - 2023</p>
        <p>Field: Computer Engineering</p>
        <p>GPA: 18.73 of 20</p>
      </article>
    ),
    badge: "Post Secondary Education",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <div className="flex flex-col justify-start items-start gap-y-3">
        <article>
          <p>Institute: Mojtame Fanni Tehran (Saadatabad branch)</p>
          <p>Year: 2022 - 2023</p>
          <p>Course: WEB Pack (HTMl, CSS, JS and etc.)</p>
          <p>GPA: 100 of 100</p>
        </article>
        <article>
          <p>Institute: LAITEC (Sharif)</p>
          <p>Year: 2023 - 2023</p>
          <p>Course: React</p>
          <p>GPA: 100 of 100</p>
        </article>
      </div>
    ),
    badge: "Continuing Education",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center px-4 py-10 bg-neutral-950 antialiased relative"
    >
      <BackgroundBeams />

      <h3 className="heading mb-4">Education</h3>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={"text-xl mb-4"}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  // <Image
                  //   src={item.image}
                  //   alt="blog thumbnail"
                  //   height="1000"
                  //   width="1000"
                  //   className="rounded-lg mb-10 object-cover"
                  // />
                  <></>
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default Education;
