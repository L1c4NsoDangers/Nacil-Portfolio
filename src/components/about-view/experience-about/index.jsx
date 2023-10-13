"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import Lilcon from "../lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-orange-600">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-gray-700"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-orange-600/80">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default function ExperienceAbout() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main>
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col my-16">
        <h1 className="font-bold text-[50px] w-full text-center uppercase">
          Experience
        </h1>
      </div>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-orange-600 origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between">
          <Details
            position="CEO"
            company="Grock Revolution"
            companyLink="/"
            time="2018 - present"
            address="Gebang, Banjarsari, Surakarta"
            work="I am here as the founder and owner of Grock Revolution, a company that focuses on various industries such as culinary, fashion, education, and technology. In the future, Grock Revolution has plans to compete in various industries on both the national and international stages."
          />
          <Details
            position="Graphic Designer"
            company="Grock Revolution"
            companyLink="/"
            time="2019 - 2022"
            address="Gebang, Banjarsari, Surakarta"
            work="I have been working as a freelance graphic designer since high school. At that time, I had a strong passion for graphic design. I had various clients, both local and international, during that period."
          />
          <Details
            position="Sofware Engineer"
            company="Grock Revolution"
            companyLink="/"
            time="2022 - present"
            address="Gebang, Banjarsari, Surakarta"
            work="I work as a freelance software engineer, and I started my journey in this field when I entered university. At that time, I became interested in learning programming languages, and eventually, I was able to acquire clients and income in this area."
          />
          <Details
            position="Pentester"
            company="Grock Revolution"
            companyLink="/"
            time="2022 - present"
            address="Gebang, Banjarsari, Surakarta"
            work="I am currently working as a freelance in the field of cyber security, specializing as a pentester. I actually stumbled into this field accidentally. I was often asked to test the security of various programs, which piqued my interest in this area. In this field, I usually work independently or as part of a team."
          />
        </ul>
      </div>
    </main>
  );
}
