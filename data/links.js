import { AiFillSound } from "react-icons/ai";
import { FcFolder, FcIdea } from "react-icons/fc";
import { MdBattery6Bar, MdNetworkWifi, MdOutlineLanguage } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

export const SIDEBAR_LINKS = [
    { href: '/portfolio', img: <IoHome className='text-4xl text-orange-400 ' />, tooltip: 'Home' },
    { href: '/portfolio/skills', img: <FcIdea className='text-4xl text-gray-500 ' />, tooltip: 'Skills' },
    { href: '/portfolio/projects', img: <FcFolder className='text-4xl text-gray-500 ' />, tooltip: 'Projects' },
    { href: '/portfolio/contact', img: <TbMessageChatbotFilled className='text-4xl text-[#ff5555] ' />, tooltip: 'Contact' },
]


export const HEADER_LINKS = [
    { href: '/', icon: <MdOutlineLanguage className='text-md text-gray-300' /> },
    { href: '/', icon: <MdNetworkWifi className='text-md text-gray-300' /> },
    { href: '/', icon: <AiFillSound className='text-md text-gray-300' /> },
    { href: '/', icon: <MdBattery6Bar className='text-md text-gray-300' /> },
]