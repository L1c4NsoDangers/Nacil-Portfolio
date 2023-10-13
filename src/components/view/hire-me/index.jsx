"use client";

import React from "react";
import circle from "../../../../public/images/svgs/nacil.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HireMe() {
  const MotionLink = motion(Link);
  return (
    <div className=" fixed right-2 bottom-8 flex items-center overflow-hidden">
      <div className="w-40 h-auto flex items-center justify-center relative">
        <Image className={"animate-spin-slow"} src={circle} alt="circle" />

        <MotionLink
          href="/"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-border-4black font-extrabold border-4  border-solid border-black w-20 h-20 rounded-full shadow-md shadow-black"
          whileHover={{
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
          Hire Me
        </MotionLink>
      </div>
    </div>
  );
}
