export const personalInfo = {
  name: "Aman Patel",
  title: "IT Support & Software Engineer",
  tagline:
    "Bridging reliable IT infrastructure with modern software engineering",
  objective:
    "Dedicated and detail-oriented IT Support and Software Engineer with hands-on experience in desktop support, troubleshooting, and modern web/mobile development. Seeking to leverage technical expertise in system administration, React/React Native development, and customer support to contribute to organizational success while continuously enhancing my skills in a dynamic IT environment.",
  phone: "7985278325",
  email: "amanpatel96321@gmail.com",
  linkedin: "https://www.linkedin.com/in/aman-patel-b26927234",
  github: "https://github.com/AmanPatel-Code",
  location: "Sukhrali, Near Sanatan Dharm Mandir, Gurugram – 122022",
};

export const experiences = [
  {
    id: 1,
    role: "Technical Desktop Support Engineer",
    company: "Tech Mahindra",
    period: "Sep 2022 – Sep 2023",
    type: "IT Support" as const,
    highlights: [
      "Provided L1/L2 technical support for desktops, laptops, and peripherals",
      "Installed, configured, and maintained Windows OS and software applications",
      "Diagnosed and resolved hardware/software issues",
      "Managed Active Directory users, permissions, and system access",
      "Handled ticketing systems and ensured timely resolution of issues",
      "Provided remote and on-site support to users",
      "Troubleshot network connectivity and printer-related issues",
    ],
  },
  {
    id: 2,
    role: "Technical Desktop Support Engineer",
    company: "Cogent E-Services",
    period: "Sep 2023 – Apr 2024",
    type: "IT Support" as const,
    highlights: [
      "Delivered end-user support and troubleshooting for IT-related issues",
      "Installed and configured system software and applications",
      "Managed system upgrades, patches, and antivirus solutions",
      "Assisted users with email configuration and network access",
      "Maintained IT inventory and documentation",
      "Ensured system performance and uptime",
    ],
  },
  {
    id: 3,
    role: "Technical Desktop Support Engineer",
    company: "DigiTech",
    period: "Jul 2024 – Mar 2025",
    type: "IT Support" as const,
    highlights: [
      "Provided comprehensive desktop and technical support services",
      "Diagnosed and resolved system, network, and hardware issues",
      "Configured and maintained LAN/WAN connectivity",
      "Supported software installations and system updates",
      "Assisted in IT asset management and system monitoring",
    ],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Independent / Freelance",
    period: "Jul 2025 – Feb 2026",
    type: "Development" as const,
    highlights: [
      "Developed responsive web applications using React.js",
      "Built mobile applications using React Native and deployed on Play Store",
      "Worked on live projects and handled production deployments",
      "Continuously maintained and updated applications",
      "Actively worked on Ruloans website and application enhancements",
    ],
  },
];

export const skillCategories = [
  {
    id: "it-support",
    label: "IT Support & Networking",
    type: "IT Support" as const,
    skills: [
      "Desktop & Laptop Troubleshooting",
      "Windows OS Installation & Configuration",
      "Hardware & Software Support",
      "Active Directory Management",
      "Network Troubleshooting (LAN/WAN)",
      "Printer & Peripheral Management",
      "Remote Desktop Support",
      "Ticketing Tools",
    ],
  },
  {
    id: "development",
    label: "Development Skills",
    type: "Development" as const,
    skills: [
      "React.js",
      "React Native",
      "JavaScript",
      "HTML & CSS",
      "Java (Core + Full Stack Basics)",
      "REST API Integration",
      "App Deployment (Play Store)",
    ],
  },
  {
    id: "tools",
    label: "Tools & Technologies",
    type: "Tools" as const,
    skills: ["Git / Version Control", "MS Office Suite", "SQL (Basics)"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Maapa Foundation",
    url: "https://maapafoundation.org",
    domain: "maapafoundation.org",
    description:
      "NGO/foundation website built with React.js — production deployed and maintained.",
    stack: ["React.js", "JavaScript", "CSS"],
    type: "Web App",
  },
  {
    id: 2,
    title: "ST Boston EdTech",
    url: "https://stbostonedtech.com/",
    domain: "stbostonedtech.com",
    description:
      "EdTech platform website delivering educational content and services online.",
    stack: ["React.js", "REST API", "JavaScript"],
    type: "Web App",
  },
  {
    id: 3,
    title: "AddRupee",
    url: "https://addrupee.com",
    domain: "addrupee.com",
    description:
      "Fintech web application with live data integration and production deployment.",
    stack: ["React.js", "REST API", "JavaScript"],
    type: "Fintech",
  },
  {
    id: 4,
    title: "Help Aana",
    url: "https://helpaana.com",
    domain: "helpaana.com",
    description:
      "E-commerce website & mobile application — currently ongoing with active development.",
    stack: ["React.js", "React Native", "REST API"],
    type: "E-Commerce",
    ongoing: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Delhi Institute of Engineering and Technology, Meerut",
    year: "Graduated",
    grade: "CGPA: 7.1",
  },
  {
    id: 2,
    degree: "12th – State Board",
    institution: "State Board of Education",
    year: "2019",
    grade: "",
  },
  {
    id: 3,
    degree: "10th – State Board",
    institution: "State Board of Education",
    year: "2016",
    grade: "",
  },
];

export const certifications = [
  { id: 1, title: "Full Stack Java Developer", issuer: "Certified Program" },
];

export const languages = [
  { id: 1, name: "Hindi", level: "Native" },
  { id: 2, name: "English", level: "Professional" },
];

export const strengths = [
  "Strong problem-solving skills",
  "Quick learner and adaptable",
  "Good communication and teamwork",
  "Ability to work under pressure",
];
