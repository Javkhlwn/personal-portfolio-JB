// Centralized Data Store for Javkhlan Battulga's Portfolio

const portfolioData = {
    profile: {
        name: "Javkhlan Battulga",
        title: "High School Student & Aspiring Developer",
        location: "Ulaanbaatar, Mongolia",
        education: "Cambridge A Level Student",
        bio: "Pursuing Cambridge A Levels with a focus on Mathematics, Physics, and Information Technology. Dedicated to mastering modern web development through rigorous, hands-on coding practice.",
        email: "javkhlan@example.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },

    skills: {
        frontend: [
            { name: "HTML5 / Semantic Markup", level: "Proficient", known: true },
            { name: "CSS3 / Flexbox & Grid", level: "Proficient", known: true },
            { name: "Responsive Design & Media Queries", level: "Proficient", known: true }
        ],
        programming: [
            { name: "JavaScript (ES6+)", level: "Intermediate", known: true },
            { name: "DOM Manipulation & Events", level: "Intermediate", known: true },
            { name: "Algorithmic Logic", level: "Intermediate", known: true }
        ],
        tools: [
            { name: "Visual Studio Code", level: "Proficient", known: true },
            { name: "Git & GitHub", level: "Intermediate", known: true },
            { name: "Chrome Developer Tools", level: "Proficient", known: true }
        ],
        learning: [
            { name: "React.js Framework", level: "Studying", known: false },
            { name: "TypeScript Fundamentals", level: "Studying", known: false },
            { name: "Database Normalization (1NF-3NF)", level: "Studying", known: false }
        ]
    },

    projects: [
        {
            id: "taskmaster",
            title: "TaskMaster (To-Do App)",
            category: "javascript",
            summary: "An interactive task management application built using vanilla JavaScript and DOM manipulation.",
            description: "TaskMaster allows users to input new tasks dynamically, manage their daily checklist, and remove completed items in real time. Built as part of a 30-day web development curriculum.",
            challenge: "Managing dynamic element creation and event listeners so that items could be added and deleted seamlessly without breaking the UI state.",
            solution: "Utilized JavaScript template literals (`${}`), `document.createElement`, and event delegation to attach clean removal handlers.",
            techStack: ["HTML5", "CSS3", "JavaScript", "DOM API"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: "novashop",
            title: "NovaShop Landing Page",
            category: "frontend",
            summary: "A mobile-first product landing page utilizing advanced CSS Flexbox layouts and responsive media queries.",
            description: "A meticulously styled commercial landing page featuring a sticky navigation header, responsive grid feature cards, and smooth hover state transitions.",
            challenge: "Ensuring the multi-column feature grid adapted smoothly from desktop monitors down to mobile smartphone screens without horizontal overflow.",
            solution: "Implemented modern CSS Flexbox with `flex-wrap`, relative sizing units (`rem`, `max-width`), and strict mobile-first media query breakpoints (`768px`).",
            techStack: ["HTML5", "CSS Flexbox", "Media Queries"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: "devportfolio",
            title: "Developer Portfolio (Capstone)",
            category: "fullstack",
            summary: "A personal portfolio website built from scratch documenting a 30-day coding journey with dynamic theme switching.",
            description: "A comprehensive developer portfolio featuring modular data-driven rendering, category filters, search capabilities, and project modal views.",
            challenge: "Structuring a vanilla JavaScript app to dynamically render complex cards and handle search filtering efficiently.",
            solution: "Created a centralized `data.js` file and wrote reusable rendering loops combined with real-time `input` event listeners.",
            techStack: ["JavaScript", "CSS Variables", "Semantic HTML", "DOM"],
            github: "https://github.com",
            demo: "#"
        }
    ],

    journey: [
        {
            period: "Present (2026)",
            title: "Cambridge A Level Studies",
            description: "Focusing on advanced Mathematics, Physics, and IT in Ulaanbaatar, strengthening analytical and computational problem-solving skills."
        },
        {
            period: "30-Day Milestone",
            title: "Intensive Web Development Curriculum",
            description: "Successfully progressed from foundational HTML/CSS structure to advanced JavaScript logic, DOM manipulation, and building fully functional web applications."
        }
    ],

    certificates: [
        {
            title: "Web Development Foundation",
            issuer: "Self-Directed 30-Day Intensive",
            date: "2026",
            description: "Mastered HTML document structure, CSS styling architecture, and interactive JavaScript programming."
        },
        {
            title: "Cambridge AS & A Level Track",
            issuer: "High School Curriculum",
            date: "Ongoing",
            description: "Rigorous academic coursework emphasizing scientific reasoning, mathematical modeling, and information technology."
        }
    ],

    blogPosts: [
        {
            id: 1,
            title: "Transitioning from Static HTML to Dynamic JavaScript",
            date: "October 2026",
            readTime: "3 min read",
            category: "Web Development",
            snippet: "Reflections on how understanding the DOM transformed my perspective of web pages from static text documents into interactive software.",
            content: "When I first started building web pages with HTML and CSS, everything felt rigid. Adding JavaScript introduced me to state, events, and real-time manipulation. Learning how document.querySelector() bridges markup and logic was a major turning point in my coding journey."
        },
        {
            id: 2,
            title: "Why Building Real Projects Beats Tutorial Watching",
            date: "November 2026",
            readTime: "4 min read",
            category: "Learning",
            snippet: "Why writing code from scratch, hitting bugs, and debugging in VS Code accelerates learning faster than passive video tutorials.",
            content: "It is easy to follow a video tutorial and feel like you understand a concept. However, when you open an empty text editor and build a To-Do app or portfolio from a blank slate, you encounter real problems—syntax errors, layout overflow, and scoping issues—that force you to truly understand how the web works."
        }
    ]
};