"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex absolute cursor-pointer items-center justify-center rounded-full font-bold bg-orange-600 text-black px-6 py-2 shadow-lg shadow-black border-4 border-black"
      whileHover={{
        scale: 1.05,
        backgroundColor: [
          "rgb(234, 88, 12, 1)",
          "rgb(236, 191, 12, 1)",
          "rgb(236, 19, 12, 1)",
          "rgb(19, 236, 12, 1)",
          "rgb(12, 236, 221, 1)",
          "rgb(234, 88, 12, 1)",
        ],
        transition: { duration: 1, repeat: Infinity },
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export default function SkillsAbout() {
  return (
    <main>
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col">
        <h1 className="font-bold text-6xl uppercase w-full text-center">
          Skills
        </h1>
        <div className="hidden w-full h-screen relative lg:flex items-center justify-center rounded-full bg-circular">
          <motion.div
            className="flex cursor-pointer items-center justify-center rounded-full font-bold bg-orange-600 text-black px-4 py-6 shadow-lg shadow-black border-4 border-black"
            whileHover={{
              scale: 1.05,
              backgroundColor: [
                "rgb(234, 88, 12, 1)",
                "rgb(236, 191, 12, 1)",
                "rgb(236, 19, 12, 1)",
                "rgb(19, 236, 12, 1)",
                "rgb(12, 236, 221, 1)",
                "rgb(234, 88, 12, 1)",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            WEB
          </motion.div>
          <Skill name="HTML" x="-15vw" y="2vw" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="PHP" x="15vw" y="2vw" />
          <Skill name="Javascript" x="0vw" y="12vw" />
          <Skill name="ReactJS" x="10vw" y="-16vw" />
          <Skill name="NextJS" x="17vw" y="15vw" />
          <Skill name="Astro" x="-24vw" y="-8vw" />
          <Skill name="MySQL" x="17vw" y="-8vw" />
          <Skill name="Tailwind" x="-15vw" y="-18vw" />
          <Skill name="MongoDB" x="-17vw" y="16vw" />
          <Skill name="Web Design" x="-30vw" y="8vw" />
          <Skill name="Graphic Design" x="30vw" y="8vw" />
          <Skill name="Pentester" x="-38vw" y="-2vw" />
          <Skill name="ExpressJS" x="38vw" y="-2vw" />
          <Skill name="Laravel" x="30vw" y="-13vw" />
        </div>
      </div>
      <div className="lg:hidden w-full h-screen relative flex items-center justify-center rounded-full bg-circular">
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full font-bold bg-orange-600 text-black px-4 py-6 shadow-lg shadow-black border-4 border-black"
          whileHover={{
            scale: 1.05,
            backgroundColor: [
              "rgb(234, 88, 12, 1)",
              "rgb(236, 191, 12, 1)",
              "rgb(236, 19, 12, 1)",
              "rgb(19, 236, 12, 1)",
              "rgb(12, 236, 221, 1)",
              "rgb(234, 88, 12, 1)",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" x="-30vw" y="0vw" />
        <Skill name="CSS" x="30vw" y="-0vw" />
        <Skill name="PHP" x="0vw" y="-30vw" />
        <Skill name="Javascript" x="0vw" y="30vw" />
        <Skill name="ReactJS" x="-30vw" y="50vw" />
        <Skill name="NextJS" x="20vw" y="70vw" />
        <Skill name="Astro" x="-30vw" y="-85vw" />
        <Skill name="MySQL" x="-30vw" y="-55vw" />
        <Skill name="Tailwind" x="0vw" y="-100vw" />
        <Skill name="MongoDB" x="-20vw" y="70vw" />
        <Skill name="Web Design" x="0vw" y="-70vw" />
        <Skill name="Graphic Design" x="30vw" y="-85vw" />
        <Skill name="Pentester" x="0vw" y="90vw" />
        <Skill name="ExpressJS" x="30vw" y="50vw" />
        <Skill name="Laravel" x="30vw" y="-55vw" />
      </div>
    </main>
  );
}
