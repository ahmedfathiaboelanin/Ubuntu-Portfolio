import { DiMongodb } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLaravel, FaNode, FaPhp, FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiExpress, SiTailwindcss } from "react-icons/si";

export const Skills = [
    { name: "JavaScript", level: "Advanced", icon: <FaSquareJs className="text-4xl text-yellow-300" /> },
    { name: "React", level: "Advanced", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", level: "Intermediate", icon: <FaNode className="text-4xl text-green-300" /> },
    { name: "Express.js", level: "Intermediate", icon: <SiExpress className="text-4xl text-yellow-300" /> },
    { name: "MongoDB", level: "Intermediate", icon: <DiMongodb className="text-4xl text-green-500" /> },
    { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS3", level: "Advanced", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-4xl text-teal-300" /> },
    { name: "Bootstrap", level: "Intermediate", icon: <FaBootstrap className="text-4xl text-purple-700" /> },
    { name: "Git", level: "Advanced", icon: <FaGithub className="text-4xl text-white" /> },
    { name: "PHP", level: "Intermediate", icon: <FaPhp className="text-4xl text-purple-400" /> },
    { name: "Laravel", level: "Intermediate", icon: <FaLaravel className="text-4xl text-red-900" /> },
];