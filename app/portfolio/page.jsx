import React from 'react'
import UbuntuTerminal from '@/components/UbuntuTerminal'
function InfoPage() {
  return (
    
    <div className=" overflow-y-auto h-full w-full text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-orange-400">Ahmed Fathi - Full Stack Developer</h1>

      {/* Terminal 1 - Introduction */}
      <UbuntuTerminal title="intro.txt">
        <p>
          Hello, I'm <span className="text-orange-400">Ahmed Fathi</span> — a dedicated Full Stack Web Developer with a
          strong passion for building clean, fast, and scalable applications.
        </p>
        <p className="mt-2">
          I'm experienced with both modern JavaScript technologies and traditional backend frameworks.
        </p>

        <div className="mt-4">
          <span className="text-green-400">ahmed@ubuntu</span>
          <span className="text-white">:~$</span> techstack --all
        </div>

        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><span className="text-blue-400">Frontend:</span> React, Vite, Tailwind CSS, Redux</li>
          <li><span className="text-blue-400">Backend (JS):</span> Node.js, Express, MongoDB (MERN)</li>
          <li><span className="text-blue-400">Backend (PHP):</span> Laravel, MySQL</li>
          <li><span className="text-blue-400">Dev Tools:</span> Git, Docker, Postman, VS Code</li>
          <li><span className="text-blue-400">OS:</span> Ubuntu Linux</li>
        </ul>

        <div className="mt-4">
          <span className="text-green-400">ahmed@ubuntu</span>
          <span className="text-white">:~$</span> cat experience.log
        </div>

        <div className="mt-2 space-y-2">
          <div>
            <span className="text-yellow-400">[2023 - 2024]</span> — Built multiple MERN stack applications with complex REST APIs.
          </div>
          <div>
            <span className="text-yellow-400">[2022 - 2023]</span> — Developed admin dashboards & APIs using Laravel + Vue.
          </div>
          <div>
            <span className="text-yellow-400">[Ongoing]</span> — Exploring AI integration, authentication, and Docker-based deployment.
          </div>
        </div>
      </UbuntuTerminal>
    </div>

  )
}

export default InfoPage