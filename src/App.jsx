// import { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading (replace with actual asset loading logic if needed)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Adjust based on your needs
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <BrowserRouter>
//       <ErrorBoundary>
//         {isLoading ? (
//           <div className="w-full h-screen flex justify-center items-center bg-primary">
//             <div className="text-white text-2xl">Loading...</div>
//           </div>
//         ) : (
//           <div className="relative z-0 bg-primary">
//             <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//               <Navbar />
//               <Hero />
//             </div>
//             <About />
//             <Experience />
//             <Tech />
//             <Works />
//             <Feedbacks />
//             <div className="relative z-0">
//               <Contact />
//               <StarsCanvas />
//             </div>
//           </div>
//         )}
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

// Enable React Router v7 future flags to silence warnings
const routerConfig = {
  future: {
    v7_startTransition: true, // Opt-in to startTransition
    v7_relativeSplatPath: true, // Opt-in to relative splat paths
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual asset loading logic if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust based on your needs
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter {...routerConfig}>
      <ErrorBoundary>
        {isLoading ? (
          <div className="w-full h-screen flex justify-center items-center bg-primary">
            <div className="text-white text-2xl">Loading...</div>
          </div>
        ) : (
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
