import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "iOS Developer",
      icon: web,
    },
    {
      title: "Full Stack Web Developer",
      icon: mobile,
    },
    {
      title: "Cloud Developer (Learning)",
      icon: backend,
    },
    {
      title: "Machine Learning Explorer",
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
    {
      name: "Typescript",
      icon: typescript,
    },
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Software Developer",
      company_name: "999T Ltd",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Piloted the development of the H4X0R app, an innovative news platform for iOS, using advanced technologies and Swift.",
        "Engineered the implementation of third-party APIs to dynamically retrieve and showcase real-time news updates in a structured table format, improving code quality by 12% and reduced loading time by 11%.",
        "Standardized a cutting-edge feature allowing users to view complete articles directly in the app interface, eliminating the need for external browsing; resulting in a 8% increase in app performance.",
        "Concocted software development expertise by implementing version control with Git, minimizing code conflicts, and enhancing collaboration efficiency.",
      ],
    },
    {
      title: "Full-stack Web Developer Intern",
      company_name: "PressPeaK Pvt Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Directed the development of a fully-responsive website for PressPeaK that prioritized optimal user experiences using HTML, CSS, JS, Firebase, Node.js, and achieved significant improvements in site load time by 9% across all major platforms.",
        "Devised and applied a user-centric interface optimization strategy, significantly improving cross-device compatibility, resulting in a 10% decrease in development time.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Harshit proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Harshit does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Harshit optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PressPeaK",
      description:
        "PressPeaK is a burgeoning platform specifically designed to cater to the needs of aspiring and accomplished journalists in around the globe. A platform to showcase proof of work and highlight skills.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "DreamHost + PM2",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://presspeak.co.in/",
    },
    {
      name: "Will Nest",
      description:
        "WillNest is an intelligent iOS application that predicts potential diseases based on user-entered symptoms, medical history, and location-based trends using a Core ML-powered SVM model.",
      tags: [
        {
          name: "swift firebase",
          color: "blue-text-gradient",
        },
        {
          name: "UIKit",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Harshit-2/WillNest",
    },
    {
      name: "Todoey",
      description:
        "Todoey is a sleek and intuitive iOS task management app that enables users to create, organize, and track their daily to-dos with persistent local storage for a seamless productivity experience.",
      tags: [
        {
          name: "swift UIKit",
          color: "blue-text-gradient",
        },
        {
          name: "realm",
          color: "green-text-gradient",
        },
        {
          name: "mvc architecture",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Harshit-2/Todoey_iOS",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
