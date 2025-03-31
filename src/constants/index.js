import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  onyourown,
  pulsevault,
  threejs,
  simonsays,
  dstooling,
  movidu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tech Support Intern",
    company_name: "D.S Tooling System",
    icon: dstooling,
    iconBg: "#383E56",
    date: "May 2021 - Augest 2021",
    points: [
      "Worked on CNC programming using G-code and M-code for milling and turning operations.",
      "Assisted in modifying and debugging CNC programs to optimize tool paths and cycle times.",
      "Also use math skills to measure dimensions, set parameters in the software and check part tolerances/quality control.",
      "Improving tool movement to minimize material waste, reduce cycle time, and enhance efficiency",
    ],
  },
  {
    title: "Backend Development Intern",
    company_name: "Movidu Technology",
    icon: movidu,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Developed and maintained backend services for dashboard applications, ensuring seamless data integration and real-time updates",
      "Worked with databases, APIs, and server-side logic to optimize performance and scalability",
      "Collaborated with the business development team to identify tech solutions that aligned with client needs",
      "I thrive in collaborative, Agile-driven environments, working closely with cross-functional teams to develop robust backend solutions that enhance user experience and business efficiency",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "On Your Own",
    description:
      "On Your Own is a seamless short-term rental platform where hosts list properties and guests book stays effortlessly. With real-time availability, secure payments, and a responsive UI, it ensures a smooth and flexible travel experience.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: onyourown,
    source_code_link: "https://github.com/Adityakumar620/On-Your-On",
  },
  {
    name: "Pulse Vault",
    description:
      "PulseVault is a real-time portfolio and asset management web app built with React and Node.js. It features a sleek UI, live updates, and secure data handling, offering a scalable and efficient tool for tracking investments and market trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pulsevault,
    source_code_link: "https://github.com/Adityakumar620/Pulse-Vault",
  },
  {
    name: "Simon Says",
    description:
      "Developed a Simon Says game using JavaScript, enabling players to test memory and reaction skills through interactive gameplay. Implemented dynamic UI, real-time feedback, and event-driven logic for an engaging and responsive experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: simonsays,
    source_code_link: "https://github.com/Adityakumar620/Simon-says",
  },
];

export { services, technologies, experiences, testimonials, projects };
