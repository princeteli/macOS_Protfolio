const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
  {
    id: 5,
    name: "About Me",
    type: "about",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Gsap"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/princeteli",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/codezen.ai",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/prince-teli-9054b5345",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Royal King Gym",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "RoyalKingGym.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built RoyalKingGym — a modern gym website with a bold, premium design using Next.js and Tailwind CSS.",
            "Features an eye-catching hero section, membership plans, trainer profiles, and a fully responsive layout across all devices.",
            "Tailwind CSS powers the sleek dark theme, smooth hover effects, and consistent spacing throughout the site.",
            "Optimized with Next.js for lightning-fast page loads, clean routing, and SEO-friendly structure right out of the box.",
          ],
        },
        {
          id: 1,
          name: "RoyalKingGym.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://v0-gym-navbar-component.vercel.app/",
          position: "top-30 left-30",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "DSA-Visualizer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-15 left-5",
      windowPosition: "top-[17vh] left-4",
      children: [
        {
          id: 1,
          name: "Dsa-Visulizer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a DSA Visualizer in React that brings data structures and algorithms to life through smooth, interactive animations.",
            "Visualizes key algorithms like Bubble Sort, Merge Sort, Binary Search, and graph traversals (BFS, DFS) step by step.",
            "Users can control animation speed, input custom data, and watch each comparison and swap happen in real time.",
            "Built entirely with React — no backend needed — using component state and hooks to drive every animation frame.",
          ],
        },
        {
          id: 2,
          name: "dsa-visualizer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://dsa-visualizer-five-mauve.vercel.app/",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Practice Projects",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-30",
      windowPosition: "top-[30vh] left-5",
      children: [
        // 01 — To-do List
        {
          id: 1,
          name: "01 To-do List.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "01 — To-do List",
          description: [
            "Built a to-do list application using HTML, CSS, and JavaScript.",
            "Implemented task creation, completion, and deletion.",
            "Practiced DOM manipulation and event handling.",
          ],
        },
        {
          id: 2,
          name: "01 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://todolistapphackthon.netlify.app/",
        },

        // 02 — Calculator
        {
          id: 3,
          name: "02 Calculator.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "02 — Calculator",
          description: [
            "Built a calculator using HTML, CSS, and JavaScript.",
            "Implemented basic arithmetic operations.",
            "Practiced JavaScript logic and event handling.",
          ],
        },
        {
          id: 4,
          name: "02 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://calculator-by-prince-teli.netlify.app/",
        },

        // 03 — Digital Clock
        {
          id: 5,
          name: "03 Digital Clock.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "03 — Digital Clock",
          description: [
            "Built a digital clock using HTML, CSS, and JavaScript.",
            "Displayed the current time dynamically.",
            "Practiced Date methods and setInterval.",
          ],
        },
        {
          id: 6,
          name: "03 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://digital-clock-by-prince.netlify.app/",
        },

        // 04 — Tip Calculator
        {
          id: 7,
          name: "04 Tip Calculator.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "04 — Tip Calculator",
          description: [
            "Built a tip calculator using HTML, CSS, and JavaScript.",
            "Calculated tips and total bills based on user input.",
            "Practiced mathematical operations and form handling.",
          ],
        },
        {
          id: 8,
          name: "04 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tip-calculator-by-prince.netlify.app/",
        },

        // 05 — Weather App
        {
          id: 9,
          name: "05 Weather App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "05 — Weather App",
          description: [
            "Built a weather application using HTML, CSS, JavaScript, and a Weather API.",
            "Fetched weather information from an external API.",
            "Practiced asynchronous JavaScript and API integration.",
          ],
        },
        {
          id: 10,
          name: "05 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://weather-app-by-prince-teli.netlify.app/",
        },

        // 06 — Quote Generator
        {
          id: 11,
          name: "06 Quote Gen.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "06 — Quote Generator",
          description: [
            "Built a quote generator using HTML, CSS, and JavaScript.",
            "Displayed quotes through random selection.",
            "Practiced arrays and DOM manipulation.",
          ],
        },
        {
          id: 12,
          name: "06 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quote-generator-by-prince.netlify.app/",
        },

        // 07 — Countdown Timer
        {
          id: 13,
          name: "07 Countdown.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "07 — Countdown Timer",
          description: [
            "Built a countdown timer using HTML, CSS, and JavaScript.",
            "Implemented countdown functionality using timing methods.",
            "Practiced time calculations and event handling.",
          ],
        },
        {
          id: 14,
          name: "07 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://countdown-timer-by-prince.netlify.app/",
        },

        // 08 — Random Password Generator
        {
          id: 15,
          name: "08 Password Gen.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "08 — Random Password Generator",
          description: [
            "Built a random password generator using HTML, CSS, and JavaScript.",
            "Generated passwords using different character combinations.",
            "Practiced strings, randomization, and JavaScript logic.",
          ],
        },
        {
          id: 16,
          name: "08 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://randompassword-generator-by-prince.netlify.app/",
        },

        // 09 — BMI Calculator
        {
          id: 17,
          name: "09 BMI Calculator.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "09 — BMI Calculator",
          description: [
            "Built a BMI calculator using HTML, CSS, and JavaScript.",
            "Calculated BMI using height and weight inputs.",
            "Practiced form handling and mathematical operations.",
          ],
        },
        {
          id: 18,
          name: "09 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://bmi-calculator-create-by-prince.netlify.app/",
        },

        // 10 — Simple Quiz App
        {
          id: 19,
          name: "10 Simple Quiz.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "10 — Simple Quiz App",
          description: [
            "Built a quiz application using HTML, CSS, and JavaScript.",
            "Implemented question selection and score calculation.",
            "Practiced arrays, conditions, and event handling.",
          ],
        },
        {
          id: 20,
          name: "10 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://simple-quiz-app-by-prince.netlify.app/",
        },

        // 11 — Color Picker
        {
          id: 21,
          name: "11 Color Picker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "11 — Color Picker",
          description: [
            "Built a color picker using HTML, CSS, and JavaScript.",
            "Allowed users to select colors and view their values.",
            "Practiced color inputs and DOM manipulation.",
          ],
        },
        {
          id: 22,
          name: "11 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://color-picker-create-by-prince.netlify.app/",
        },

        // 12 — Tic-Tac-Toe Game
        {
          id: 23,
          name: "12 Tic-Tac-Toe.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "12 — Tic-Tac-Toe Game",
          description: [
            "Built a Tic-Tac-Toe game using HTML, CSS, and JavaScript.",
            "Implemented player turns and winning-condition checks.",
            "Practiced arrays, game logic, and event handling.",
          ],
        },
        {
          id: 24,
          name: "12 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tic-tac-toe-game-by-prince.netlify.app/",
        },

        // 13 — Stopwatch
        {
          id: 25,
          name: "13 Stopwatch.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "13 — Stopwatch",
          description: [
            "Built a stopwatch using HTML, CSS, and JavaScript.",
            "Implemented start, stop, and reset functionality.",
            "Practiced timing methods and time calculations.",
          ],
        },
        {
          id: 26,
          name: "13 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stop-watch-create-by-prince.netlify.app/",
        },

        // 14 — Guess the Number
        {
          id: 27,
          name: "14 Guess Number.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "14 — Guess the Number",
          description: [
            "Built a number guessing game using HTML, CSS, and JavaScript.",
            "Generated random numbers and checked user guesses.",
            "Practiced conditionals, randomization, and game logic.",
          ],
        },
        {
          id: 28,
          name: "14 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/princeteli/full-mern-stack/tree/main/frontend/14%20guess-the-number-game",
        },

        // 15 — Expense Tracker
        {
          id: 29,
          name: "15 Expense Tracker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          subtitle: "15 — Expense Tracker",
          description: [
            "Built an expense tracker using HTML, CSS, and JavaScript.",
            "Implemented expense entry and expense tracking.",
            "Practiced arrays, objects, and DOM manipulation.",
          ],
        },
        {
          id: 30,
          name: "15 Live URL",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://assengement8.netlify.app/pages/settings",
        },

       
      ],

    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/myImg.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/myImg.png",
    },

    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-50 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/image2.jpg",
      description: [
        "Hey! I’m Prince 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  about: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash:   { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };