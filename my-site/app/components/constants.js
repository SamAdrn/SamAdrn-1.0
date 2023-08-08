/* NAVBAR ITEMS
 *
 * /navbar/nav-item-list.jsx
 *
 * Sections that can be accessed through the navbar.
 */
export const navbarItems = [
    { title: "About Me", href: "about" },
    { title: "Projects", href: "projects" },
    { title: "Contact", href: "contact" },
];

/* HOVERING ICONS
 *
 * /home/profile-picture.jsx
 *
 * The icons that hover around the profile picture at the Home section, along
 * with their tranlated positions.
 */
export const hoveringIcons = [
    { icon: "html", x: "-11rem", y: "-13rem" },
    { icon: "javascript", x: "-15rem", y: "-7rem" },
    { icon: "css", x: "-17rem", y: 0 },
    { icon: "react", x: "-15rem", y: "7rem" },
    { icon: "nodejs", x: "-12rem", y: "13rem" },
    { icon: "swift", x: "15rem", y: "-7rem" },
    { icon: "python", x: "17rem", y: 0 },
    { icon: "ruby", x: "15rem", y: "7rem" },
    { icon: "git", x: "12rem", y: "13rem" },
    { icon: "java", x: "11rem", y: "-13rem" },
];

/* ABOUT SUPBAGES
 *
 * /about/about.jsx
 *
 * The subpages that exist in the About section.
 */
export const aboutSubpages = ["About", "Education", "Experience"];

/* ABOUT DESCRIPTION
 *
 * /about/description.jsx
 *
 * Personal description for the About Me subpage.
 */
export const aboutDescription =
    "An enthusiastic Computer Science Student with a a passion for inventing " +
    "software. Extremely versatile with a variety of technologies and always " +
    "looking forward to learn something new. Currently a Senior at the " +
    "University of Maryland, College Park, with an interest in Full stack " +
    "development. Looking for Software Engineering Internships!";

/* CONTACT BAR ICONS
 *
 * /about/contact-bar.jsx
 *
 * The icons to be displayed in the contact bar.
 */
export const contactBarIcons = ["github", "linkedin", "mail", "spotify"];

/* CONTACT BAR ICONS
 *
 * /about/contact-bar.jsx
 *
 * Gradient combinations to complement the icons within the contact bar.
 */
export const contactBarGradients = {
    none: "from-orange-300 to-red-300",
    github: "from-slate-900 to-slate-600",
    mail: "from-amber-300 to-orange-300",
    linkedin: "from-blue-300 to-sky-300",
    spotify: "from-teal-400 to-emerald-400",
};

/* EDUCATION DATA
 *
 * /about/education-subpage.jsx
 *
 * Data to be displayed in the Education subpage
 */
export const educationData = [
    {
        title: "University of Maryland, College Park",
        timeframe: "August 2021 - May 2024",
        location: "College Park, MD",
        description: [
            "Bachelor's of Science (B.S.) in Computer Science",
            "Dean's List: Fall 2022, Spring 2023",
            "Coursework includes: iOS Development, Web Development, Algorithms, Advanced Data Structures",
        ],
    },
    {
        title: "Edmonds College",
        timeframe: "September 2019 - June 2021",
        location: "Lynnwood, WA",
        description: [
            "Associate's of Science (A.S.) in Computer Science",
            "Graduated with Academic Honors (3.8 GPA out of a 4.0 scale)",
            "Became a member of the Phi Theta Kappa Honor Society",
            "Achieved a High School Diploma while taking college courses",
            "Successfully overcame COVID-19",
        ],
    },
    {
        title: "Mahatma Gading Intercultural School",
        timeframe: "July 2009 - July 2019",
        location: "Jakarta, Indonesia",
        description: [
            "5 Cambridge IGCSEs (Mathematics [A], Physics [A], English [A], ICT [A], Business [C])",
            "Ranked Top-5 amongst 60 students within the Class of 2019",
            "Won the Most Diligent Student Award upon graduation",
        ],
    },
];

/* EXPERIENCES DATA
 *
 * /about/experiences-subpage.jsx
 *
 * Data to be displayed in the Experiences subpage
 */
export const experiencesData = [
    {
        title: "Student Lead @ Terrapin Tech UMD",
        timeframe: "November 2021 - Present",
        location: "College Park, MD",
        description: [
            "Assist members of the University of Maryland community in troubleshooting various software issues",
            "Collaborated with other technicians to ensure a quick flow of customer service",
            "Maintained and created hundreds of customer purchase orders made by various university departments.",
        ],
    },
    {
        title: "Sponsorship Officer @ PERMIAS Seattle",
        timeframe: "February 2021 - July 2021",
        location: "Seattle, WA",
        description: [
            "Organized community events for Indonesian students across the state of Washington",
            "Teamed with fellow board members to promote the wonderful cultures of Indonesia",
            "This is a volunteer position",
        ],
    },
    {
        title: "Head of Logistics @ Edmonds Indonesian Club",
        timeframe: "September 2020 - July 2021",
        location: "Lynnwood, WA",
        description: [
            "Control and manage supplies for organizational events that take place within the college for students.",
            "This is a volunteer position",
        ],
    },
];

/* LANGUAGES TECH STACK
 *
 * /about/tech-stack.jsx
 *
 * Languages to include in the tech stack.
 */
export const languagesTechStack = [
    "javascript",
    "ruby",
    "java",
    "python",
    "swift",
    "html",
    "ocaml",
    "ansic",
];

/* LIBRARIES TECH STACK
 *
 * /about/tech-stack.jsx
 *
 * Libraries and Frameworks to include in the tech stack.
 */
export const librariesTechStack = [
    "react",
    "nodejs",
    "tailwind",
    "nextjs",
    "bootstrap",
    "swiftui",
    "jquery",
];

/* TOOLS TECH STACK
 *
 * /about/tech-stack.jsx
 *
 * Tools to include in the tech stack.
 */
export const toolsTechStack = [
    "git",
    "firebase",
    "mongodb",
    "gcloud",
    "vsc",
    "xcode",
];

/* PROJECTS DATA
 *
 * /projects/gallery.jsx
 *
 * Data of all the projects to be showcased in the Projects section.
 */
export const projectsData = [
    {
        id: "pocket-garage",
        title: "Pocket Garage",
        hashtags: ["#reactnative", "#mobiledevelopment"],
        languages: ["React Native", "Firebase"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/PocketGarage",
            },
        ],
        type: "personal",
        date: "July 2023",
        description: [
            {
                content:
                    "Pocket Garage is an innovative automobile data " +
                    "retrieval application that provides users with quick " +
                    "and detailed information about various vehicles.",
                showOnMobile: true,
            },
            {
                content:
                    "Users can easily access comprehensive vehicle " +
                    "information, including specifications such as body " +
                    "classification, fuel type, drivetrain details, " +
                    "engine specifications, and more. I made this project " +
                    "as a form of practicing mobile development.",
                showOnMobile: false,
            },
            {
                content:
                    "It is built upon React Native to achieve " +
                    "cross-platform compatibility.",
                showOnMobile: true,
            },
        ],
        numPreviewImages: 5,
        carouselScheme: "light",
        techstack: ["react", "firebase", "gcloud", "vsc"],
    },
    {
        id: "unity",
        title: "Unity",
        hashtags: ["#swift", "#iosdevelopment", "#geolocation"],
        languages: ["Swift"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/Unity",
            },
        ],
        type: "academic",
        date: "May 2023",
        description: [
            {
                content:
                    "This app was created as a final project for our IOS  " +
                    "Development class.",
                showOnMobile: false,
            },
            {
                content:
                    "Unity is an app that allows its users to engage more " +
                    "with their environment. To achieve this, Unity encourages " +
                    "users to explore their surroundings as it counts their steps " +
                    "using it as a currency to purchase various icons for the " +
                    "purpose of collecting them.",
                showOnMobile: true,
            },
            {
                content:
                    "I contributed by utilizing SwiftUI's MapKit to develop the map " +
                    "and created the in-game store using Swift's method of persistence. " +
                    "This project was a team effort, teaching me the true value " +
                    "of collaboration.",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 4,
        carouselScheme: "dark",
        techstack: ["swift", "swiftui", "xcode"],
    },
    {
        id: "triples",
        title: "Triples",
        hashtags: ["#swift", "#iosdevelopment", "#minigame"],
        languages: ["Swift"],
        sources: [],
        type: "academic",
        date: "April 2023",
        description: [
            {
                content:
                    "My first mobile application. This is an introductory project for an " +
                    "iOS development class. Triples is a spin-off of the tile puzzle game " +
                    "called Threes The project helped me understand the core principles of " +
                    "Swift, such as basic syntax, state management, formatting, and animations.",
                showOnMobile: true,
            },
            {
                content:
                    "Due to potential risk of academic violation, the " +
                    "source code will not be publicly shared",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 4,
        carouselScheme: "dark",
        techstack: ["swift", "xcode"],
    },
    {
        id: "testudo-revamped",
        title: "Testudo Revamped",
        hashtags: ["#webdevelopment", "#api", "#database"],
        languages: ["HTML", "Javascript"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/Testudo-Revamp",
            },
            {
                sourceType: "web",
                sourceLink: "https://testudo2-0.onrender.com/",
            },
        ],
        type: "personal",
        date: "December 2022",
        description: [
            {
                content:
                    "Revamped Testudo visualizes a newly-designed class schedule " +
                    "system servicing students of the University of Maryland. Its " +
                    "mission is to enhance the experiences that students go through " +
                    "when looking or registering for classes.",
                showOnMobile: true,
            },
            {
                content:
                    "It runs on an Express server hosted on Render.com. Pages " +
                    "were built with HTML and EJS, designed using Bootstrap " +
                    "mixed with some custom CSS, and powered by Javascript with " +
                    "support of the jQuery library.",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 6,
        carouselScheme: "light",
        techstack: [
            "html",
            "css",
            "bootstrap",
            "javascript",
            "nodejs",
            "mongodb",
            "vsc",
        ],
    },
    {
        id: "simon-game",
        title: "The Simon Game",
        hashtags: ["#webdevelopment", "#webgame"],
        languages: ["HTML", "Javascript"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/Simon-Game/",
            },
            {
                sourceType: "web",
                sourceLink: "https://samadrn.github.io/Simon-Game/",
            },
        ],
        type: "personal",
        date: "October 2022",
        description: [
            {
                content:
                    "A recreation of the classic Simon Game. I created this " +
                    "project with the intention to practice creating CSS designs " +
                    "and adding Javascript logic to my websites. Try out the game " +
                    "by clicking on the Web source button. ",
                showOnMobile: true,
            },
        ],
        numPreviewImages: 3,
        carouselScheme: "light",
        techstack: ["html", "css", "javascript", "jquery", "vsc"],
    },
    {
        id: "tic-tac-toe",
        title: "Tic Tac Toe",
        hashtags: ["#gamelogic", "#consolegame"],
        languages: ["Ruby"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/TicTacToe",
            },
        ],
        type: "personal",
        date: "July 2022",
        description: [
            {
                content:
                    "Tic Tac Toe in your own terminal. This project was inspired " +
                    "by my previous work, another terminal game called Maze. Since I " +
                    "really enjoyed coding with Ruby, I decided to tackle on another challenge.",
                showOnMobile: true,
            },
            {
                content:
                    "Not only did it help improve my OOP knowledge, it introduced me " +
                    "to the world of game logic. Particularly, this game utilizes the " +
                    "Minimax algorithm to create decisions for the CPU. A very " +
                    "interesting learn overall, as it opened up a whole new perspective " +
                    "for me.",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 3,
        carouselScheme: "light",
        techstack: ["ruby", "vsc"],
    },
    {
        id: "maze",
        title: "Maze",
        hashtags: ["#graphs", "#consolegame"],
        languages: ["Ruby"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/Maze",
            },
        ],
        type: "personal",
        date: "June 2022",
        description: [
            {
                content:
                    "Maze started out as a project for one of my classes, but it " +
                    "was so interesting to me that I had to expand on it over the summer. " +
                    "Maze was a way for me to comprehend, at a deeper level, the concept " +
                    "of graphs in the world of programming.",
                showOnMobile: true,
            },
            {
                content:
                    "I found out that given an fully condensed adjacency matriz that " +
                    "represented walls, I could carve out a pathway by traversing through " +
                    "it. As I tackled upon this challenge, I wanted to present what I learned " +
                    "in a form of creativity, hence, I created this project.",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 3,
        carouselScheme: "light",
        techstack: ["ruby", "vsc"],
    },
    {
        id: "caraoke",
        title: "Caraoke",
        hashtags: ["#hackathon", "#hardware"],
        languages: ["Arduino", "Python"],
        sources: [
            {
                sourceType: "github",
                sourceLink: "https://github.com/SamAdrn/Caraoke",
            },
            {
                sourceType: "devpost",
                sourceLink:
                    "https://devpost.com/software/caraoke-lyrics-on-the-go?",
            },
        ],
        type: "hackathon",
        date: "April 2022",
        description: [
            {
                content:
                    "Caraoke was inspired by the love of carpool karaoke that I " +
                    "share with my friends. As our inspiration, we developed this  " +
                    "project for the 2022 Bitcamp Hackathon hosted at the  " +
                    "University of Maryland.",
                showOnMobile: true,
            },
            {
                content:
                    "Sending lyrics to our borrowed hardware is a Python backend " +
                    "that grabs the currently playing song on your Spotify account " +
                    "and looks for its lyrics on Textyl.co's API. Being that it was my " +
                    "first time dealing with hardware, and it was my biggest contribution " +
                    "my first Hackathon experience allowed me to learn so much in so little time.",
                showOnMobile: false,
            },
        ],
        numPreviewImages: 2,
        carouselScheme: "dark",
        techstack: ["arduino", "python", "c++", "vsc"],
    },
];

/* CONTACT BUTTONS
 *
 * /contact/contact.jsx
 *
 * CTA buttons for the Contact section.
 */
export const contactButtons = [
    { icon: "mail", link: "", label: "Say Hello!" },
    { icon: "file", link: "", label: "View my Resume" },
    { icon: "linkedin", link: "", label: "Connect with me" },
    { icon: "github", link: "", label: "Browse my GitHub" },
];

/* CTA MESSAGE
 *
 * /contact/contact.jsx
 *
 * CTA message for the Contact section
 */
export const ctaMessage =
    "Looking for Spring 2024 Software Engineering internships";

/* SVG ICONS
 *
 * Inline customizable SVG icons by FontAwesome. Best used with SVG components.
 */
export const svgIcons = {
    academic: {
        name: "Academic",
        viewbox: "0 0 576 512",
        path: "M288 0H400c8.8 0 16 7.2 16 16V80c0 8.8-7.2 16-16 16H320.7l89.6 64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H336V400c0-26.5-21.5-48-48-48s-48 21.5-48 48V512H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64H165.7L256 95.5V32c0-17.7 14.3-32 32-32zm48 240a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm368 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16zM80 352c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H80zm384 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H464z",
    },
    briefcase: {
        name: "Briefcase",
        viewbox: "0 0 512 512",
        path: "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z",
    },
    burgermenu: {
        name: "Burger Menu",
        viewbox: "0 0 448 512",
        path: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
    },
    calendar: {
        name: "Calendar",
        viewbox: "0 0 448 512",
        path: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z",
    },
    chevronleft: {
        name: "Chevron Left",
        viewbox: "0 0 512 512",
        path: "M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z",
    },
    chevronright: {
        name: "Chevron Right",
        viewbox: "0 0 512 512",
        path: "M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z",
    },
    devpost: {
        name: "Dev Symbol",
        viewbox: "0 0 448 512",
        path: "M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z",
    },
    file: {
        name: "file",
        viewbox: "0 0 384 512",
        path: "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z",
    },
    fontawesome: {
        name: "Font Awesome",
        viewbox: "0 0 448 512",
        path: "M384.5,32.5h-320c-35.3,0-64,28.7-64,64v320c0,35.3,28.7,64,64,64h320c35.3,0,64-28.7,64-64v-320 C448.5,61.2,419.8,32.5,384.5,32.5z M336.5,312.5c-31.6,11.2-41.2,16-59.8,16c-31.4,0-43.2-16-74.6-16c-10.2,0-18.2,1.6-25.6,4v-32 c7.4-2.2,15.4-4,25.6-4c31.2,0,43.2,16,74.6,16c10.2,0,17.8-1.4,27.8-4.6v-96c-10,3.2-17.6,4.6-27.8,4.6c-31.4,0-43.2-16-74.6-16 c-25.4,0-37.4,10.4-57.6,14.4v153.6c0,8.8-7.2,16-16,16c-8.8,0-16-7.2-16-16v-192c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16v6.4 c20.2-4,32.2-14.4,57.6-14.4c31.2,0,43.2,16,74.6,16c18.6,0,28.2-4.8,59.8-16V312.5z",
    },
    github: {
        name: "GitHub",
        viewbox: "0 0 496 512",
        path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    },
    graduationcap: {
        name: "Graduation Cap",
        viewbox: "0 0 640 512",
        path: "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z",
    },
    hackathon: {
        name: "Hackathon",
        viewbox: "0 0 448 512",
        path: "M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z",
    },
    info: {
        name: "Info",
        viewbox: "0 0 512 512",
        path: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
    },
    linkedin: {
        name: "Linkedin",
        viewbox: "0 0 448 512",
        path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    },
    mail: {
        name: "mail",
        viewbox: "0 0 512 512",
        path: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
    },
    none: {
        name: "none",
        viewbox: "0 0 512 512",
        path: "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z",
    },
    personal: {
        name: "Personal",
        viewbox: "0 0 512 512",
        path: "M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z",
    },
    react: {
        name: "React",
        viewbox: "0 0 512 512",
        path: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
    },
    spotify: {
        name: "Spotify",
        viewbox: "0 0 496 512",
        path: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z",
    },
    web: {
        name: "Web",
        viewbox: "0 0 512 512",
        path: "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z",
    },
};
