

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <motion.div
      variants={isMobile ? {} : fadeIn("up", "spring", index * 0.5, 0.75)} // Disable animation on mobile
      className="w-[90%] sm:w-[300px] max-w-[360px]"
    >
      <motion.div
        whileHover={isMobile ? {} : { rotateX: 15, rotateY: 15, scale: 1.05, y: -10 }}
        whileTap={isMobile ? { scale: 0.95 } : { rotateX: 10, rotateY: 10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ perspective: 1200 }}
        className="bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        role="article"
        aria-label={`Project: ${name}`}
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={`${name} project preview`}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                role="button"
                aria-label={`View source code for ${name}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open(source_code_link, "_blank");
                  }
                }}
              >
                <img
                  src={github}
                  alt="GitHub source code link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px] line-clamp-1">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <>
      <motion.div variants={isMobile ? {} : textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-5 sm:gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");


