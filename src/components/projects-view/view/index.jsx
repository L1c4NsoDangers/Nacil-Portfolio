"use client";

import { useEffect, useMemo, useRef } from "react";
import AnimationWrapper from "../../view/animation-wrapper/index";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import project1 from "./../../../../public/images/projects/portfolioku.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  isLarge,
}) => {
  return (
    <article
      className={`relative w-full ${
        isLarge ? "lg:flex" : ""
      } items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-orange-600 bg-white py-6 px-6 lg:px-12 shadow-2xl`}
    >
      <div className="shadow-md shadow-black/70 absolute top-0 -right-3 -z-10 h-[103.5%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-orange-600 xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-full lg:w-1/2"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div
        className={`${
          isLarge ? "lg:w-1/2" : ""
        } p-4 items-start justify-between pl-6`}
      >
        <span className="text-orange-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className={`my-6 text-2xl ${
              isLarge ? "lg:text-5xl" : ""
            } font-bold`}
          >
            {title}
          </h2>
        </Link>
        <p className="my-6 font-medium text-black">{summary}</p>
        <div className="mt-6 flex items-center">
          <Link href={github} target="_blank">
            <FaGithub className="w-10 h-10 text-orange-600" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-orange-600 text-white p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function ProjectsView({ data }) {
  console.log(data, "ProjectsView");

  const setVariants = useMemo(() => variants(), []);

  return (
    <main id="about">
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col">
        <AnimationWrapper>
          <motion.div
            className="flex w-full text-center justify-center items-center"
            variants={setVariants}
          >
            <div className="flex relative bg-black flex-col font-extrabold justify-center items-center rounded-b-2xl text-center p-6 lg:p-24">
              <div className="absolute top-0 -z-10 w-full h-[103%] rounded-[2rem] bg-orange-600" />
              <h1 className="py-8 lg:py-16 text-2xl lg:text-8xl border-4 border-orange-600 rounded-2xl text-white leading-normal">
                Creativity Reigns{" "}
                <span className="text-orange-600">Supreme Over Wisdom!</span>
              </h1>
            </div>
          </motion.div>

          <div className="my-24 w-full items-center justify-center text-center">
            <h1 className="font-bold text-[50px] w-full text-center uppercase">
              MY PROJECTS
            </h1>
          </div>

          <div className="m-12 my-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 gap-y-12 lg:gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 0.9 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-2"
            >
              <FeaturedProject
                title="NACIL PORTFOLIO"
                img={project1}
                summary="Nacil's project portfolio as a Software Engineer is a testament to technical excellence and creative problem-solving. With a wide range of projects, Nacil showcases versatility in designing user-friendly mobile apps, robust backend systems, and tackling complex coding challenges, shaping the digital landscape."
                link="/"
                github="/"
                type="PORTFOLIO"
                isLarge={true}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="Coming Soon"
                img={project1}
                link="/"
                github="/"
                type="Web Template"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="Coming Soon"
                img={project1}
                link="/"
                github="/"
                type="Web Design"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 0.9 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-2"
            >
              <FeaturedProject
                title="NACIL PORTFOLIO"
                img={project1}
                summary="Nacil's project portfolio as a Software Engineer is a testament to technical excellence and creative problem-solving. With a wide range of projects, Nacil showcases versatility in designing user-friendly mobile apps, robust backend systems, and tackling complex coding challenges, shaping the digital landscape."
                link="/"
                github="/"
                type="PORTFOLIO"
                isLarge={true}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="Coming Soon"
                img={project1}
                link="/"
                github="/"
                type="Web Template"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="Coming Soon"
                img={project1}
                link="/"
                github="/"
                type="Web Design"
                isLarge={false}
              />
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </main>
  );
}
