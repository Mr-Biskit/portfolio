import React, { useCallback } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden text-center flex-col max-w-7xl justify-center
      
      mx-auto items-center  px-4"
    >
      <h3 className="top-16 mt-20 flex flex-col uppercase tracking-[20px] text-creme/25 text-2xl font-block h-1/4">
        Contact
      </h3>

      <div className=" flex flex-col space-y-1 justify-center h-screen">
        <h4 className="text-creme text-xl md:text-3xl font-block text-center my-0 h-1/4">
          Let's create tomorrow, together.{" "}
          <span className="decoration-lightPurple/100 underline">
            Get in Touch.
          </span>
        </h4>
        <div className="text-center h-2/4">
          <div className="flex text-[#3F403D] font-spline items-center space-x-5 justify-center">
            <PhoneIcon className="text-lightPurple/100 h-7 w-7 animate-pulse" />
            <p className="text-xl">+31611152442</p>
          </div>

          <div className="flex text-[#3F403D] font-spline items-center space-x-5 justify-center">
            <DocumentCheckIcon className="text-lightPurple/100 h-7 w-7 animate-pulse" />
            <a className="text-xl" href="http://localhost:3000/resume.pdf">
              Download Resume
            </a>
          </div>
          <div className="flex text-[#3F403D] font-spline items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-lightPurple/100 h-7 w-7 animate-pulse" />
            <p className="text-xl">dev@mrbiskit.xyz</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
