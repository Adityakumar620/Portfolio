// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 550,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           The following projects highlight my skills and experience through real-world applications of my work. Each project is thoughtfully described, with links to code repositories and live demos, providing a clear insight into my development process. These projects reflect my ability to solve complex problems, adapt to various technologies, and effectively manage projects from concept to completion.
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

import React from "react";
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <motion.div
        // Tilt effect on hover
        whileHover={{ rotateX: 20, rotateY: 20, scale: 1.05 }} // Mimics max: 45 and scale: 1
        transition={{ type: "spring", stiffness: 250, damping: 20 }} // Mimics speed: 550
        style={{ perspective: 1000 }} // 3D depth
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer" // Added cursor-pointer
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} project image`} // Improved alt text
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="Source code link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects highlight my skills and experience through real-world applications of my work. Each project is thoughtfully described, with links to code repositories and live demos, providing a clear insight into my development process. These projects reflect my ability to solve complex problems, adapt to various technologies, and effectively manage projects from concept to completion.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center"> {/* Centered cards */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       className="w-full sm:w-[300px] max-w-[360px]" // Adjusted for better responsiveness
//     >
//       <motion.div
//         whileHover={{ rotateX: 15, rotateY: 15, scale: 1.05, y: -10 }} // Enhanced hover with lift
//         whileTap={{ rotateX: 10, rotateY: 10, scale: 1.02 }} // Touch feedback
//         transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smoother animation
//         style={{ perspective: 1200 }} // Increased depth
//         className="bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//         role="article" // Accessibility
//         aria-label={`Project: ${name}`}
//       >
//         {/* Image Section */}
//         <div className="relative w-full h-[200px] sm:h-[230px]">
//           <img
//             src={image}
//             alt={`${name} project preview`}
//             className="w-full h-full object-cover rounded-2xl"
//             loading="lazy" // Optimize loading
//           />

//           {/* GitHub Link */}
//           {source_code_link && (
//             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => window.open(source_code_link, "_blank")}
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//                 role="button"
//                 aria-label={`View source code for ${name}`}
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     window.open(source_code_link, "_blank");
//                   }
//                 }}
//               >
//                 <img
//                   src={github}
//                   alt="GitHub source code link"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </motion.div>
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[20px] sm:text-[24px] line-clamp-1">
//             {name}
//           </h3>
//           <p className="mt-2 text-secondary text-[13px] sm:text-[14px] line-clamp-3">
//             {description}
//           </p>
//         </div>

//         {/* Tags Section */}
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[12px] sm:text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <section className="py-10 sm:py-20">
//       {/* Header */}
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center sm:text-left`}>
//           My Work
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
//           Projects.
//         </h2>
//       </motion.div>

//       {/* Description */}
//       <div className="w-full flex justify-center sm:justify-start">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] text-center sm:text-left"
//         >
//           The following projects highlight my skills and experience through real-world applications of my work. Each project is thoughtfully described, with links to code repositories and live demos, providing a clear insight into my development process. These projects reflect my ability to solve complex problems, adapt to various technologies, and effectively manage projects from concept to completion.
//         </motion.p>
//       </div>

//       {/* Project Cards */}
//       <div className="mt-10 sm:mt-20 flex flex-wrap gap-6 sm:gap-7 justify-center">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(Works, "works");


