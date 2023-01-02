import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-12 med:top-24 uppercase tracking-[20px] text-creme/25 font-block text-2xl ">
        About
      </h3>
      <div className="h-[10rem] "></div>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://imagizer.imageshack.com/img924/9020/i0kI0d.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] "
      />
      <div className="h-20"></div>

      <div className=" px-0 md:px-10 mt-2">
        <h4 className="text-4-xl font-spline text-creme p-5 mt-2">
          A{" "}
          <span className="underline decoration-4 decoration-lightPurple">
            little
          </span>{" "}
          bit about myself{" "}
        </h4>
        <p className="text-creme font-spline md:text-base  px-5 leading-loose text-[9px]">
          My name is{" "}
          <span className="text-sm md:text-lg text-lightPurple">Gabriel</span>{" "}
          or{" "}
          <span className="text-sm md:text-lg text-lightPurple">Mr Biskit</span>{" "}
          a former Chef de Cuisine turned Fullstack Developer. <br />
          With over a year of experience and a strong background in
          JavaScript/Solidity, I am passionate about using blockchain technology
          to enhance and transform traditional business models.
          <br /> I have a track record of success in building websites and
          decentralised web applications using frameworks like Next.js, React,
          and React Native. In addition to my technical skills, I am also highly
          skilled in user interface design, with a focus on creating beautiful,
          intuitive interfaces for my team.
          <br /> When I'm not coding, I enjoy cooking delicious food and
          exploring new culinary techniques. <br /> Overall, I am a driven and
          dedicated team member with a strong passion for blockchain and a
          commitment to delivering exceptional results for my team.
        </p>
        <div className="h-10" />
      </div>
    </motion.div>
  );
}
