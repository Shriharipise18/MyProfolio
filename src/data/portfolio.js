// Portfolio Data - Easy to update and maintain

export const personalInfo = {
  name: "Shrihari Pise",
  role: "Full-Stack Software Engineer",
  tagline: "Building scalable web applications with modern technologies. Passionate about clean code and user experience.",
  email: "piseshrihari@gmail.com",
  linkedin: "https://www.linkedin.com/in/shrihari-pise-13958628a/",
  github: "https://github.com/Shriharipise18",
  leetcode: "https://leetcode.com/u/Shrihari_18/"
};

export const about = {
  summary: "I’m a full-stack developer and problem solver focused on building scalable, real-world products. I’ve developed social platforms with real-time messaging, geolocation alerts, and AI-powered developer tools, emphasizing performance, security, and user experience.\n\nI work extensively with Node.js, Express, MongoDB, SQL, Redis, and deploy microservices using Docker and Kubernetes. During my internship at VOIS, I built data pipelines, dashboards, and optimized SQL to drive business insights.\n\nWith strong foundations in DSA, system design, and competitive programming, I blend analytical thinking with execution and am actively exploring DevOps and AI to build software that scales in impact.",
  skills: {
    languages: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Python"
    ],

    frontend: [
      "React.js",
      "HTML",
      "CSS",
      "EJS"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication"
    ],

    database: [
      "MySQL",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Redis"
    ],

    dataAnalytics: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
      "Google Colab",
      "PowerBI"
    ],

    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Swagger"
    ],

    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Computer Networks"
    ],

    competitiveProgramming: [
      "LeetCode (1600 Rating)",
      "CodeChef (2★ – 1566)"
    ]
  }
};

export const projects = [
  {
    id: 1,
    title: "Safarnama",
    description: "Safarnama is a production-oriented, full-stack blog application designed to demonstrate real-world web engineering skills. It enables users to create rich multimedia blogs, interact socially with other writers, and authenticate securely using modern authentication standards.",
    tech: ["EJS", "Node.js", "MongoDB", "Express.js", "Google Auth"],
    github: "https://github.com/Shriharipise18/Safarnama",
    demo: "https://safarnama-sooty.vercel.app/"
  },
  {
    id: 2,
    title: "Ai-code-documentation-collaboration-CodeDocs",
    description: "An AI-powered platform that automatically generates clear, concise documentation from source code while enabling developers to write, run, and test programs. It supports real-time collaborative coding, improving productivity, code understanding, and team-based software development workflows.",
    tech: ["Node.js", "Express.js", "Flask (Python)", "MongoDB", "LLM (Large Language Model)", "Generative AI Engine"],
    github: "https://github.com/Shriharipise18/Ai-code-documentation-collaboration-CodeDocs"
  },
  {
    id: 3,
    title: "Academic Engagement Platform",
    description: "A platform for academic engagement and collaboration among students and educators.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/Shriharipise18/Academic-Engagement-Portal"
  },
  {
    id: 4,
    title: "Baliraja Framer Helper",
    description: "This platform enables farmers to modify and monitor watering of their farms.",
    tech: ["React", "Node.js", "ExpressJs", "MongoDB", "JWT"],
    github: "hhttps://github.com/Shriharipise18/Baliraja.o"
  },
  {
    id: 5,
    title: "SocialX",
    description: "Engineered a scalable MERN stack social platform with real-time interactions and Redux-based engagement features.Implemented Docker-Kubernetes microservices using REST and Socket.IO, improving system throughput by 40%.Built a Redis-backed geolocation emergency alert system delivering messages under 100ms latency.",
    tech: ["Node,js", "Express.js", "Redis", "MongoDb", "React", "kubernetes", "Socket.io"],
    github: "https://github.com/Shriharipise18/SocialX"
  },
  {
    id: 6,
    title: "CodeTracker - Competitive Programming Progress Tracker",
    description: "A production-ready competitive coding platform featuring real-time multiplayer battles, AI opponents, spectator mode, and comprehensive game management.",
    tech: ["MERN", "Socket.io", "Redis", "Docker"],
    github: "https://github.com/Shriharipise18/codebattle-3"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Enginnering in Electronics and Telecommunication",
    institution: "Pune Institute of Computer Technology",
    year: "2023 - 2027",
    achievements: [
      "Graduated with Honors (GPA: 9.3/10.0)"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certification",
    institution: "shri gajanan maharaj junior college,Shegaon",
    year: "2022",
    achievements: [
      "78.83% in HSC Board Exams"
    ]
  },
  {
    id: 3,
    degree: "Secondary School Certification",
    institution: "Harlalka High School,Shegaon",
    year: "2020",
    achievements: [
      "96.20% in SSC Board Exams"
    ]
  }
];



// GitHub API configuration
export const githubConfig = {
  username: "Shriharipise18", // Change this to your GitHub username
  apiUrl: "https://api.github.com/users/"
};

// LeetCode API configuration  
export const leetcodeConfig = {
  username: "Shrihari_18", // Change this to your LeetCode username
  // Using a public GraphQL endpoint
  apiUrl: "https://leetcode.com/u/Shrihari_18/"
};
