import Link from "next/link";
import React from "react";

export default function UbuntuTerminal({ children }) {
    return (
        <div className="w-full max-w-3xl mx-auto border rounded-lg shadow-lg bg-[#2c001e] text-white font-mono text-sm">
            {/* Top bar */}
            <div className="flex items-center px-3 py-1 bg-[#300a24] rounded-t-lg">
                {/* Circles */}
                <div className="flex space-x-2">
                    <Link href={'/'} className="w-3 h-3 bg-red-500 rounded-full"></Link>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="ml-auto text-xs text-gray-300">Terminal</div>
            </div>

            {/* Terminal body */}
            <div className="px-4 py-3 bg-[#1e0010] min-h-[300px]">
                {children ? (
                    children
                ) : (
                    <div>
                        <span className="text-green-400">user@ubuntu</span>
                        <span className="text-white">:~$</span>{" "}
                        <span className="animate-pulse text-white">|</span>
                    </div>
                )}
            </div>
        </div>
    );
}
