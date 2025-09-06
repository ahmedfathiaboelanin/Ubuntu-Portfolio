import UbuntuTerminal from '@/components/UbuntuTerminal'
import React from 'react'

function ContactPage() {
  return (
    <UbuntuTerminal>
      <div>
        <span className="text-green-400">ahmed@ubuntu</span>
        <span className="text-white">:~$</span>{" "}
        <span className="text-white">cat contact.txt</span>
      </div>

      {/* Simulated file output */}
      <div className="text-white mt-2 space-y-1">
        <div><span className="text-blue-400">Name:</span> Ahmed Fathi</div>
        <div><span className="text-blue-400">Email:</span> ahmedfathiaboelanin@gmail.com</div>
        <div><span className="text-blue-400">Phone:</span> 01040284664</div>
        <div><span className="text-blue-400">Location:</span> Al-Mahlla Al-Kubra, Egypt</div>
        <div><span className="text-blue-400">Facebook:</span> https://www.facebook.com/ahmed.fathi.912811</div>
        <div><span className="text-blue-400">GitHub:</span> https://github.com/ahmedfathiaboelanin</div>
        <div><span className="text-blue-400">LinkedIn:</span> https://www.linkedin.com/in/ahmed-fathi-1a4593247/</div>
      </div>

      {/* Final blinking cursor */}
      <div className="mt-2 flex gap-2">
        <span className="text-green-400">ahmed@ubuntu</span>
        <span className="text-white">:~$</span>{" "}
        <span className="animate-pulse text-white">|</span>
        <input type="text" className="animate-pulse flex-1 bg-transparent border-none focus:outline-none" placeholder='leave your message' />
      </div>
    </UbuntuTerminal>
  )
}

export default ContactPage