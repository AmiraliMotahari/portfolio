"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import mavira from "../assets/experiences/Mavira-Logo.png";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center justify-center px-4 py-10 bg-neutral-950 antialiased relative"
    >
      <h3 className="heading mb-8">Experiences</h3>
      <BackgroundGradient className="flex flex-col justify-center items-center gap-4 rounded-[22px] max-w-3xl p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="">
          <Image
            src={mavira}
            alt="Mavira"
            height="400"
            width="400"
            className="object-cover object-center bg-white rounded-lg p-5"
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Head Front-End
        </p>
        <p className="text-base sm:text-sm text-black mt-4 mb-2 dark:text-neutral-200">
          2023 - Present
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
          As a seasoned Front-End Developer at Mavira, I began my journey in
          September 2023 and rapidly advanced to become the Head of the
          Front-End Team by December 2023. During this period, I extensively
          utilized HTML, CSS, JavaScript, and Google APIs such as GeoCoding and
          GooglePlaces to develop and optimize various web applications. My
          innovative contributions include creating a framework inspired by
          object-oriented programming (OOP) principles to streamline and enhance
          development processes. I also developed a custom toast notification
          npm package and spearheaded the creation of single-page applications
          featuring advanced memoization and pagination techniques. Furthermore,
          I engineered a highly efficient search engine, &apos;Mega
          Search,&apos; incorporating debouncing and memoization to ensure peak
          performance. To elevate the efficiency and quality of our projects, I
          adopted and adapted CSS patterns from popular libraries like Bootstrap
          and Tailwind CSS. My work reflects a strong commitment to optimizing
          front-end development and delivering user-centric web solutions.
        </p>
      </BackgroundGradient>
    </section>
  );
};

export default Experiences;
