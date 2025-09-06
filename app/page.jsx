'use client';

import { useState } from "react";
import { MdLanguage, MdWifi, MdBatteryFull } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setSetUsername] = useState("");
  const router = useRouter();
  const handleChangeName = (e) => {
    setSetUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect to /portfolio and store the username in local storage
    localStorage.setItem("username", username);
    router.push("/portfolio");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center full-glass relative">
      <div className="flex flex-col items-center space-y-6">
        {/* User Avatar */}
        <div className="flex flex-col items-center space-y-2">
          <FaUserCircle className="w-96 h-24 text-gray-300" />
          <span className="text-xl text-white font-medium">Wellcome !!</span>
        </div>

        <div className="relative w-80">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={username}
              onChange={handleChangeName}
              className="w-full px-4 py-2 rounded-md bg-purple-900/40 text-white placeholder-gray-300 focus:outline-none"
            />
          </form>
        </div>
      </div>

      {/* Top-right icons */}
      <div className="absolute top-4 right-6 flex items-center space-x-4 text-white">
        <span className="text-sm">en</span>
        <MdWifi className="w-5 h-5" />
        <MdBatteryFull className="w-5 h-5" />
        <MdLanguage className="w-5 h-5" />
      </div>
    </div>
  );
}
