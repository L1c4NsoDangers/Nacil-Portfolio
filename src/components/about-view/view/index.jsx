"use client";

import { useEffect, useMemo, useRef } from "react";
import AnimationWrapper from "../../view/animation-wrapper/index";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import ramdhani from "../../../../public/images/profile/ramdhani.png";

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

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function AboutView({ data }) {
  console.log(data, "AboutView");

  const setVariants = useMemo(() => variants(), []);

  return (
    <main id="about" className="">
      <div className="max-w-screen mt-24 justify-center items-center flex flex-col">
        <AnimationWrapper>
          <motion.div
            className=" flex w-full text-center justify-center items-center"
            variants={setVariants}
          >
            <div className="flex relative bg-orange-600 flex-col font-extrabold justify-center items-center rounded-b-2xl text-center p-6 lg:p-24">
              <div className="absolute top-0 -z-10 w-full h-[103%] rounded-[2rem] bg-black" />
              <h1 className="py-8 lg:py-16 text-2xl lg:text-8xl border-4 border-white rounded-2xl text-black leading-normal">
                Passion Sparks{" "}
                <span className="text-white">Meaningful Goals!</span>
              </h1>
            </div>
          </motion.div>

          <div className="my-24 w-full items-center justify-center text-center">
            <h1 className="font-bold text-[50px] w-full text-center uppercase">
              ABOUT ME
            </h1>
          </div>

          <motion.div
            className={
              "pt-10 grid w-full grid-cols-1 md:grid-cols-8 gap-6 md:gap-16 mt-6 md:mt-24 px-4 md:px-20"
            }
            variants={setVariants}
          >
            <div className="md:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-orange-600">
                Biography
              </h2>
              <p className="font-medium my-4">
                Hello, Im Nacil, a seasoned fullstack software engineer with 1
                years of practical experience in software development. Im
                passionate about creating efficient and user-friendly digital
                solutions, viewing software engineering as a means to solve
                real-world problems and deliver seamless user-centric
                experiences.
              </p>
              <p className="font-medium my-4">
                Whether its a web application, a mobile app, or any digital
                endeavor, I approach each project with a relentless pursuit of
                technical excellence and a primary focus on user satisfaction.
                Im excited to harness my skills and enthusiasm to contribute to
                your upcoming project and create something exceptional together!
              </p>
            </div>
            <div className="md:col-span-3 relative h-max rounded-2xl border-2 border-solid border-orange-600 bg-white p-4 md:p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-orange-600" />
              <Image
                src={ramdhani}
                alt="Ramdhani"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="md:col-span-2 flex flex-col items-center md:items-end justify-between">
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-orange-600">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center mt-6 md:mt-0">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-orange-600">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center mt-6 md:mt-0">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-orange-600">
                  Years of Experience
                </h2>
              </div>
            </div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </main>
  );
}
