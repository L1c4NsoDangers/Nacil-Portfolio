"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import Lilcon from "../lilcon";

const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-orange-600/80">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

export default function EducationAbout() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main>
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col my-16">
        <h1 className="font-bold text-[50px] w-full text-center uppercase">
          Education
        </h1>
      </div>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-orange-600 origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between">
          <Details
            type="A graduate of Sekip 2 State Elementary School in Surakarta."
            time="2008 - 2014"
            place="SDN Sekip II"
            info="I moved to State Elementary School 45 Pangkal Pinang from third to fifth grade, but in sixth grade, I returned to State Elementary School Sekip 2 Surakarta."
          />
          <Details
            type="A graduate of State Junior High School 23 Surakarta."
            time="2014 - 2017"
            place="SMPN 23 Surakarta"
            info="During my junior high school years, I began to develop an interest in technology and graphic design. It was after graduating from junior high school that I gained various experiences in different fields."
          />
          <Details
            type="A graduate of State Senior High School 1 Ngemplak Boyolali."
            time="2017 - 2020"
            place="SMAN 1 Ngemplak, Boyolali"
            info="When I started high school, I began to hone my skills in graphic design and computers. During this time, I tried many new things that ultimately proved very useful in my journey to become a software engineer. However, there was a challenge after I graduated, the emergence of the COVID-19 virus, which forced me to stay at home. The good news is that I could fully focus on learning during the pandemic."
          />
          <Details
            type="Studied at Duta Bangsa University, majoring in Computer Engineering.."
            time="2022 - Present"
            place="Universitas Duta Bangsa"
            info="At the moment, I am currently studying at Duta Bangsa University, majoring in Computer Engineering. Before enrolling here, I previously attended Muhammadiyah University in Surakarta and completed five semesters in the field of Communication. However, I decided to leave and transferred to Duta Bangsa University, where I pursued Computer Engineering, a field that I had been interested in since my junior high school days. It is also here that I have learned a lot, from cybersecurity to software engineering, and have made many great connections."
          />
        </ul>
      </div>
    </main>
  );
}
