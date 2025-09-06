import React from 'react'
import UbuntuSideBarLinks from './UbuntuSideBarLinks'
import { SIDEBAR_LINKS } from '@/data/links'
import Image from 'next/image'

function UbuntuSidebar() {
  return (
    <aside className='w-[70px] flex flex-col justify-between items-center glass bg-gray-800 py-2 px-2 h-screen left-0 top-0'>
      <nav className='flex flex-col gap-2 items-center w-full'>
        {SIDEBAR_LINKS.map((link, index) => (
          <div className="tooltip tooltip-bottom" key={index}>
            <div className="tooltip-content">{link.tooltip}</div>
            <UbuntuSideBarLinks  href={link.href} img={link.img} />
          </div>
        ))}
      </nav>
      <UbuntuSideBarLinks href={'/'} img={<Image src='/ubuntu.png' alt='Contact' width={40} height={40} />} />
    </aside>
  )
}

export default UbuntuSidebar