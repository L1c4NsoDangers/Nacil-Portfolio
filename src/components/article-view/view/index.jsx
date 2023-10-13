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
  read,
  title,
  summary,
  img,
  link,

  isLarge,
}) => {
  return (
    <article
      className={`relative w-full ${
        isLarge ? "lg:flex" : ""
      } items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-orange-600 bg-white py-6 px-6 lg:px-12 shadow-2xl`}
    >
      <div className="shadow-md shadow-black/70 absolute top-0 -right-3 -z-10 h-[102%] w-[102%] rounded-[2.5rem] rounded-br-3xl bg-orange-600 xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
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
        <p className="my-6 font-medium text-orange-600">{read}</p>
      </div>
    </article>
  );
};

export default function ArticleView({ data }) {
  console.log(data, "ArticleView");

  const setVariants = useMemo(() => variants(), []);

  return (
    <main id="about">
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col">
        <AnimationWrapper>
          <motion.div
            className="flex w-full text-center justify-center items-center"
            variants={setVariants}
          >
            <div className="flex relative bg-gray-200 flex-col font-extrabold justify-center items-center rounded-b-2xl text-center p-6 lg:p-24">
              <div className="absolute top-0 -z-10 w-full h-[103%] rounded-[2rem] bg-black" />
              <h1 className="py-8 lg:py-16 text-2xl lg:text-8xl border-4 border-black rounded-2xl text-orange-600 leading-normal">
                Words Hold the Power{" "}
                <span className="text-black">to Shape Our World!</span>
              </h1>
            </div>
          </motion.div>

          <div className="my-24 w-full items-center justify-center text-center">
            <h1 className="font-bold text-[50px] w-full text-center uppercase">
              MY ARTICLES
            </h1>
          </div>

          <div className="m-12 my-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 gap-y-12 lg:gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-1 "
            >
              <FeaturedProject
                title="How To Scan IP With Nmap"
                img={project1}
                link="/"
                summary="Nmap, a versatile network scanning tool, empowers users to analyze network configurations with precision. This tool excels at discovering open ports, identifying hosts, and gathering information about network services, making it an invaluable asset for network administrators and security professionals in enhancing network security and performance."
                read="10 min read"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="How To Scan IP With Nmap"
                img={project1}
                link="/"
                summary="Nmap, a versatile network scanning tool, empowers users to analyze network configurations with precision. This tool excels at discovering open ports, identifying hosts, and gathering information about network services, making it an invaluable asset for network administrators and security professionals in enhancing network security and performance."
                read="10 min read"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="How To Scan IP With Nmap"
                img={project1}
                link="/"
                summary="Nmap, a versatile network scanning tool, empowers users to analyze network configurations with precision. This tool excels at discovering open ports, identifying hosts, and gathering information about network services, making it an invaluable asset for network administrators and security professionals in enhancing network security and performance."
                read="10 min read"
                isLarge={false}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileHover={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              className="col-span-1 lg:col-span-1"
            >
              <FeaturedProject
                title="How To Scan IP With Nmap"
                img={project1}
                link="/"
                summary="Nmap, a versatile network scanning tool, empowers users to analyze network configurations with precision. This tool excels at discovering open ports, identifying hosts, and gathering information about network services, making it an invaluable asset for network administrators and security professionals in enhancing network security and performance."
                read="10 min read"
                isLarge={false}
              />
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </main>
  );
}
