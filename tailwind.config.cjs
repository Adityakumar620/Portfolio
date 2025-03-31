/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
                xs: "320px", // Adjusted for smaller phones
                sm: "640px", // Explicitly define default sm
                md: "768px", // Tablet
                lg: "1024px", // Desktop
                xl: "1280px", // Large desktop
              },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#050816",
//         secondary: "#aaa6c3",
//         tertiary: "#151030",
//         "black-100": "#100d25",
//         "black-200": "#090325",
//         "white-100": "#f3f3f3",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         xs: "320px", // Adjusted for smaller phones
//         sm: "640px", // Explicitly define default sm
//         md: "768px", // Tablet
//         lg: "1024px", // Desktop
//         xl: "1280px", // Large desktop
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/herobg.png')",
//       },
//     },
//   },
//   plugins: [],
// };
