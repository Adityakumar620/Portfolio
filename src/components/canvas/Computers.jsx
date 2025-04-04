

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.glb", true, (loader) => {
//     loader.manager.onStart = () => console.log("GLTF loading started");
//     loader.manager.onLoad = () => console.log("GLTF loaded successfully");
//     loader.manager.onError = (url) => console.error(`GLTF load failed: ${url}`);
//   });

//   // Log geometry details to catch NaN
//   useEffect(() => {
//     if (computer.scene) {
//       computer.scene.traverse((obj) => {
//         if (obj.isMesh && obj.geometry) {
//           const positions = obj.geometry.attributes.position.array;
//           if (positions.some((val) => isNaN(val))) {
//             console.error("NaN found in geometry positions:", obj.name, positions);
//           }
//         }
//       });
//     }
//   }, [computer]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={0.5} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.25 : 1.5}
//         position={isMobile ? [0, -2, -1] : [0, -4, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleChange = (e) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows={false}
//       dpr={[1, 1.2]}
//       camera={{ position: [20, 3, 5], fov: 25, near: 0.1, far: 100 }}
//       gl={{ powerPreference: "low-power" }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.glb", true, (loader) => {
//     loader.manager.onStart = () => console.log("GLTF loading started");
//     loader.manager.onLoad = () => console.log("GLTF loaded successfully");
//     loader.manager.onError = (url) => console.error(`GLTF load failed: ${url}`);
//   });

//   // Debug NaN in geometry
//   useEffect(() => {
//     if (computer.scene) {
//       computer.scene.traverse((obj) => {
//         if (obj.isMesh && obj.geometry) {
//           const positions = obj.geometry.attributes.position.array;
//           if (positions.some((val) => isNaN(val))) {
//             console.error("NaN found in positions for mesh:", obj.name, positions);
//           }
//         }
//       });
//     }
//   }, [computer]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow={!isMobile}
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 1.3}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (event) => setIsMobile(event.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows={false} // Disabled for mobile simplicity
//       dpr={[1, 1.5]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true, powerPreference: "low-power" }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.glb", true, (loader) => {
    loader.manager.onStart = () => console.log("GLTF loading started");
    loader.manager.onLoad = () => console.log("GLTF loaded successfully");
    loader.manager.onError = (url) => console.error(`GLTF load failed: ${url}`);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Mobile: Render plain image
  if (isMobile) {
    return (
      <img
        src="https://i.ibb.co/MkRb8rbx/computer.png"
        alt="Computer Fallback"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "contain",
        }}
      />
    );
  }

  // Laptop: Render 3D model in Canvas
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;









