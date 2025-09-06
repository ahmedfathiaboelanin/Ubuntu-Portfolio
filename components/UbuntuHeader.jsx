import React from 'react'
import UbuntuHeaderLinks from './UbuntuHeaderLinks'
import { HEADER_LINKS } from '@/data/links'
function UbuntuHeader() {

  return (
    <div className='flex justify-between glass-dark items-center h-[30px] fixed w-full top-0 z-50 shadow-md '>
      <div className=""></div>
      <div className='text-sm text-gray-300'>
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | {new Date().toLocaleDateString()}
      </div>
      <div className="pe-[80px]">
        <ul className='text-md font-bold text-gray-300 hover:bg-gray-500 flex items-center rounded-lg justify-center py-1'>
          {HEADER_LINKS.map((link, index) =>
            <li key={index} className='inline-block mx-2'>
              <UbuntuHeaderLinks href={link.href} icon={link.icon} />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default UbuntuHeader