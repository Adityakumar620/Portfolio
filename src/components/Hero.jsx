// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// import { styles } from "../styles";
// import { Model } from "./canvas/Computers";

// const Hero = () => {
//   const [isWebGLSupported, setIsWebGLSupported] = useState(true);

//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     const gl =
//       canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
//     if (!gl) setIsWebGLSupported(false);
//   }, []);

//   return (
//     <section className={`relative w-full h-[70vh] sm:h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[60px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Aditya</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-20 w-full h-[30vh] flex justify-center items-center">
//         {/* {isWebGLSupported ? (
//           <Model scale={0.3} position={[0.25, -5.5, 0]} rotation={[0.1, -Math.PI, 0]}  />
//         ) : (
//           <div className="text-slate-950 text-[16px] font-semibold text-center">
//             3D content not supported on this device.
//           </div>
//         )} */}
//         <Canvas
//           frameloop="demand"
//           shadows
//           dpr={[1, 2]}
//           camera={{ position: [20, 3, 5], fov: 25 }}
//           gl={{ preserveDrawingBuffer: true }}
//         >
//           <Suspense fallback={<CanvasLoader />}>
//             <OrbitControls
//               enableZoom={false}
//               maxPolarAngle={Math.PI / 2}
//               minPolarAngle={Math.PI / 2}
//             />
//             <Model isMobile={isMobile} />
//           </Suspense>

//           <Preload all />
//         </Canvas>
//       </div>
//       {/* <ComputersCanvas /> */}

//       <div className="absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 20, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   const [isWebGLSupported, setIsWebGLSupported] = useState(true);

//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
//     if (!gl) setIsWebGLSupported(false);
//   }, []);

//   return (
//     <section className="relative w-full h-[70vh] sm:h-screen mx-auto">
//       <div
//         className={`absolute inset-0 top-[60px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Aditya</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-0 w-full h-[50vh] sm:h-[60vh] flex justify-center items-center">
//         {isWebGLSupported ? (
//           <ComputersCanvas />
//         ) : (
//           <div className="text-white text-[16px] font-semibold text-center">
//             3D content not supported on this device.
//           </div>
//         )}
//       </div>

//       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 20, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[50vh] flex justify-center items-center">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
