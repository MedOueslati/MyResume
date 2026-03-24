import {
  HiHome,
  HiFolder,
  HiHeart,
  HiUser,
  HiShoppingBag,
  HiMail,
} from "react-icons/hi";
import { FaServer, FaReact, FaPencilRuler, FaVideo, FaShareAlt, FaShoppingCart } from "react-icons/fa";

export const sidebarLinks = [
  { label: "Home", icon: HiHome, href: "/" },
  { label: "Projects", icon: HiFolder, href: "/projects" },
  { label: "Services", icon: HiHeart, href: "/services" },
  { label: "About Me", icon: HiUser, href: "/about" },
  { label: "Shop", icon: HiShoppingBag, href: "/buy" },
  { label: "Contact", icon: HiMail, href: "/contact" }
];


export const services = [
  {
    title: "Web Hosting",
    description: "Reliable and secure hosting solutions for your websites.",
    icon: <FaServer className="text-primary text-3xl mb-4" />
  },
  {
    title: "React Development",
    description: "Modern, scalable web applications built with React.",
    icon: <FaReact className="text-primary text-3xl mb-4" />
  },
  {
    title: "Custom Design",
    description: "Tailored design solutions that match your brand identity.",
    icon: <FaPencilRuler className="text-primary text-3xl mb-4" />
  },
  {
    title: "Pack Vidéo Editing",
    description: "Professional video editing services for impactful storytelling.",
    icon: <FaVideo className="text-primary text-3xl mb-4" />
  },
  {
    title: "Social Media",
    description: "Social media strategies and content to grow your audience.",
    icon: <FaShareAlt className="text-primary text-3xl mb-4" />
  },
  {
    title: "E-commerce Website",
    description: "Custom online stores with secure payment integration.",
    icon: <FaShoppingCart className="text-primary text-3xl mb-4" />
  }
];

export const musicList = [
  {
    title: "idk",
    artist: "Highvyn & Taylor Shin",
    image: "/images/idk-cover.jpg",
    audio: "/.mp3",
  },
  {
    title: "Dreamscape",
    artist: "Nova",
    image: "/images/dreamscape.jpg",
    audio: "/audio/dreamscape.mp3",
  },
  {
    title: "Echoes",
    artist: "Luma",
    image: "/images/echoes.jpg",
    audio: "/audio/echoes.mp3",
  },
];