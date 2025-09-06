'use client';
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import {Skills} from '@/data/skills';

export default function UbuntuFolderUI() {

    const openFolder = (folder) => {
        setPath([...path, folder.name]);
    };

    return (
        <div className="h-full w-full bg-gray-900 flex items-center justify-center">
            <div className="w-full h-full bg-[#1e0010] text-white rounded-lg shadow-lg border border-[#300a24]">
                {/* Top bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#300a24] rounded-t-lg">
                    <div className="w-6" />
                    <div className="text-sm text-gray-300">Skills Folder</div>
                    <div className="flex space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#1e0010] border-b border-[#300a24]">
                    <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-[#300a24] rounded"><FaArrowLeft /></button>
                        <button className="p-1 hover:bg-[#300a24] rounded"><FaArrowRight /></button>
                    </div>
                    <div className="flex-1 mx-4 bg-[#2c001e] px-2 py-1 rounded text-sm truncate">
                        Home/Skills
                    </div>
                    <div className="flex items-center bg-[#2c001e] px-2 py-1 rounded">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3  p-4 h-content">
                    {Skills.map((skill, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center p-3 rounded cursor-pointer hover:bg-[#300a24] transition-colors`}
                        >
                            {skill.icon}
                            <span className="mt-2 text-sm truncate">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
