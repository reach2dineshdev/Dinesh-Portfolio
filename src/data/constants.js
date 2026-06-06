// Navigation links
export const NAV_LINKS = [
  { href: "#home",     label: "Home",    icon: "bi bi-house" },
  { href: "#about",    label: "About",   icon: "bi bi-info-circle" },
  { href: "#skills",   label: "Skills",  icon: "bi bi-code-slash" },
  { href: "#projects", label: "Projects",icon: "bi bi-clipboard2-data" },
  { href: "#contact",  label: "Contact", icon: "bi bi-telephone" },
];

// Social media links
export const SOCIAL = [
  {
    href: "https://www.instagram.com/royal_dinesh_16/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
    delay: 250,
    label: "Instagram"
  },
  {
    href: "https://www.linkedin.com/in/dinesh-fullstackwebdeveloper/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    delay: 300,
    label: "LinkedIn"
  },
  {
    href: "https://x.com/royal_dinesh_16",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",
    delay: 350,
    label: "X"
  },
  {
    href: "https://github.com/dinesh-fullstackwebdeveloper",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
    delay: 400,
    label: "GitHub"
  },
];

// Frontend Skills
export const FRONTEND_SKILLS = [
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Sass",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
];

// Backend Skills
export const BACKEND_SKILLS = [
  { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SpringBoot",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

// Other Skills
export const OTHER_SKILLS = [
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "AI-Assisted Dev", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "SonarQube",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
];

// Import project images
import amazonCloneImg from "../assets/images/amazonclone.png";
import dineverseImg from "../assets/images/dinverse.png";
import dinebuyImg from "../assets/images/DineBuy.png";
import todolistImg from "../assets/images/todolist.png";
import gfcImg from "../assets/images/gfc.png";
import rockPaperScissorsImg from "../assets/images/rockpaperscissor.png";
import ghostTicTacToeImg from "../assets/images/ghosttictactoe.png";

// Projects
export const PROJECTS = [
  {
    title: "Amazon Clone",
    img: amazonCloneImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Amazon+Clone",
    badges: ["HTML","CSS","JavaScript","Bootstrap","Redux Toolkit","Vite"],
    badgeColors: ["primary","info","warning","success","dark","secondary"],
    desc: "A responsive Amazon Clone replicating the popular e-commerce platform's homepage with fixed navigation, search, shopping cart, product sections, category banners, deals, and advertisements.",
    features: ["🏠 Landing Page with banners and featured products","📂 Category & Subcategory browsing","🔍 Product Search & Filtering","🛒 Product Details with images","👤 User Authentication","💳 Payment Modal (UI)","🌐 API Integration","🛠️ Redux Toolkit state management"],
    live: "https://kaadugal.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/Amazon_Clone",
    reverse: true,
  },
  {
    title: "DineVerse Movie Website",
    img: dineverseImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=DineVerse",
    badges: ["React","Bootstrap","JavaScript","Vite","TMDb API"],
    badgeColors: ["primary","info","warning","success","danger"],
    desc: "A modern movie discovery app built with React & Vite. Browse, search, and explore detailed info using The Movie Database (TMDb) API with responsive Bootstrap 5 UI and React Router.",
    features: ["🎞️ Browse by category (Now Playing, Top Rated, Popular, Upcoming)","🔍 Search movies by title","📝 Detailed movie information","📱 Responsive Bootstrap 5 design","🧭 React Router navigation","⬆️ Scroll to top on route change"],
    live: "https://dine-verse.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/DineVerse",
    reverse: false,
  },
  {
    title: "DineBuy",
    img: dinebuyImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=DineBuy",
    badges: ["Bootstrap","JavaScript","HTML","CSS"],
    badgeColors: ["info","warning","primary","danger"],
    desc: "An e-commerce platform specializing in premium-quality shoes with product browsing, cart management, and secure checkout built with React.js, Bootstrap, and Firebase.",
    features: ["🏠 Home Page – featured products and deals","👟 Detailed product pages","🔐 Secure user login","📱 Responsive Bootstrap design"],
    live: "https://dinebuy.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/DineBuy-Ecommerce",
    reverse: true,
  },
  {
    title: "TODO-LIST",
    img: todolistImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=TODO-LIST",
    badges: ["JavaScript","Firebase","HTML","CSS"],
    badgeColors: ["primary","info","success","danger"],
    desc: "A CRUD application using JavaScript and Firebase Realtime Database. Users can add, edit, delete, and mark tasks as completed with instant real-time updates.",
    features: ["📝 Add, View, Edit, Delete records","👀 Dynamic table display","✏️ Update existing records","📱 Responsive across all devices"],
    live: "https://dinesh-todolist-with-firebase.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/todolist-firebase",
    reverse: false,
  },
  {
    title: "GFC Website",
    img: gfcImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=GFC+Website",
    badges: ["HTML","CSS","JavaScript"],
    badgeColors: ["primary","danger","warning"],
    desc: "A responsive and interactive webpage for GFC featuring modern layouts, animations, and user engagement features built with HTML, CSS, and JavaScript.",
    features: ["✨ Modern layout with animations","📱 Fully responsive design","🎨 Interactive UI elements"],
    live: "https://66c73bc457638b2545a0e9e0--dinesh-gfc-webpage.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/gfc-webpage",
    reverse: true,
  },
  {
    title: "Rock Paper Scissors",
    img: rockPaperScissorsImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Rock+Paper+Scissors",
    badges: ["HTML","CSS","JavaScript"],
    badgeColors: ["primary","info","danger"],
    desc: "A fun and interactive Rock Paper Scissors game vs an AI opponent with smooth animations, glowing UI effects, and real-time score tracking.",
    features: ["⚔️ Player vs Computer","💫 Animated glowing UI","🔥 6-life system","🖱️ Custom animated cursor","❄️ Snowflake background","📱 Mobile responsive"],
    live: "https://kal-kaagidham-kathirikol.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/stone-paper-scissors",
    reverse: false,
  },
  {
    title: "Tic Tac Toe – Ghost Mode",
    img: ghostTicTacToeImg,
    fallbackImg: "https://placehold.co/500x260/23283a/0ef?text=Ghost+Tic+Tac+Toe",
    badges: ["HTML","CSS","JavaScript"],
    badgeColors: ["primary","success","danger"],
    desc: "A modern animated Tic Tac Toe with a ghostly theme. Features Player vs Player and Player vs AI (Ghost) modes, three AI difficulty levels, neon UI, and a real-time scoreboard.",
    features: ["🧠 Easy / Medium / Hard AI (Minimax)","👻 Ghost Mode with animated mist","🎨 Neon glow effects","💯 Real-time score tracking","📱 Responsive design","🔄 Mode switch & board reset"],
    live: "https://ghost-tic-tac-toe.netlify.app/",
    github: "https://github.com/dinesh-fullstackwebdeveloper/ghost-tic-tac-toe",
    reverse: true,
  },
];

// Badge Colors
export const BADGE_BG = {
  primary: "#0d6efd",
  info: "#0dcaf0",
  warning: "#ffc107",
  success: "#198754",
  danger: "#dc3545",
  dark: "#212529",
  secondary: "#6c757d"
};

// Contact email
export const CONTACT_EMAIL = "reach2dinesh.dev@gmail.com";

// CV link
export const CV_LINK = "https://drive.google.com/file/d/1mKKxK0m02I39K0kLR8Ya27WdIDYKqttb/view?usp=sharing";
