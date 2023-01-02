import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity1";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-creme/70 text-2xl font-block ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overlow-y-hidden snap-x snap-mandatory mt-12 z-20 scrollbar-track-gray-400/20 scrollbar-thumb-lightPurple/80">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 mt-12 md:p-44 md:mt-20 h-screen "
          >
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className="h-45 w-80 "
            />
            <div className="space-y-2 px-0 md:px-10 max-w-6xl items-center justify-center">
              <h4 className="text-creme font-block text-center text-2xl">
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    className="h-6 w-6 rounded-full bg-creme"
                  />
                ))}
              </div>

              <p className="font-spline text-xs md:text-lg text-creme/70 text-center w-60 md:w-full">
                {project?.summary}
              </p>
              <div className="flex justify-center items-center">
                <SocialIcon
                  url={project?.linkToBuild}
                  fgColor="#FCFDF2"
                  bgColor="transparent"
                  className=" hover:bg-darkPurple rounded-full flex text-center items-center "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
