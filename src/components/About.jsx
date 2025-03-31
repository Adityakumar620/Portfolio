

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
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
      whileHover={isMobile ? {} : { rotateX: 15, rotateY: 15, scale: 1.05 }} // Disable 3D tilt on mobile
      whileTap={isMobile ? { scale: 0.95 } : { rotateX: 10, rotateY: 10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className="w-[90%] xs:w-[250px] max-w-[300px]" // Added max-width for consistency
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-8 sm:px-12 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            loading="lazy" // Added lazy loading
          />
          <h3 className="text-white text-[20px] sm:text-[25px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]"
      >
        I’m a skilled web developer with extensive experience in JavaScript and deep expertise in frameworks like React and Node.js. Passionate about crafting seamless digital experiences, I specialize in building high-performance, scalable, and user-friendly web applications. With a keen eye for design and functionality, I ensure responsive, accessible, and optimized solutions tailored to meet unique business needs. I thrive in collaborative environments, working closely with clients to transform ideas into impactful digital products. Whether it’s front-end interactivity, back-end efficiency, or full-stack development, I’m committed to delivering innovative solutions that drive real-world success. Let’s bring your vision to life!
      </motion.p>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
