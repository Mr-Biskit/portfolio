// Rewrite this code so that the Spline component is loaded lazily
// and the page is rendered without it until the component is loaded
// and rendered.
import React, { Suspense } from "react";
import AnimatedGif from "./AnimatedGif";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["<Mr Biskit />", "Gabriel Vince"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="h-[100vh] relative overflow-hidden">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Spline scene="https://prod.spline.design/HOGJJUHwoZEpHhh3/scene.splinecode" />
      {/* </Suspense> */}

      <div className="p-3 absolute left-0  mb-10 bottom-10  lg:inset-y-0 lg:left-0 lg:w-1/3 flex flex-col md:justify-center md:items-center">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-creme font-spline flex md:items-center md:justify-center rounded-3xl lg:text-[1.5rem] text-[0.88rem]"
        >
          Hey I am
        </motion.div>
        <div className="text-creme uppercase flex md:items-center md:justify-center rounded-3xl lg:text-[3.00rem] font-block text-[1.67rem]">
          <span>{text}</span>
          <Cursor cursorColor="#610094" />
        </div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-creme flex md:items-center md:justify-center rounded-3xl lg:text-[1.5rem] text-[0.88rem] font-spline"
        >
          Fullstack
        </motion.div>
        <div className=" flex  md:items-center md:justify-center rounded-3xl ">
          <AnimatedGif text="BLOCKCHAIN" />
        </div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-creme flex md:items-center md:justify-center rounded-3xl lg:text-[1.5rem] text-[0.88rem] font-spline"
        >
          Developer
        </motion.div>
      </div>
    </div>
  );
}
