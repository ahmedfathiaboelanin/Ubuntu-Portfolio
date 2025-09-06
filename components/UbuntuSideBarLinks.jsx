'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function UbuntuSideBarLinks({ href, img }) {
    const pathname =  usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`hover:bg-gray-400/60 hover:scale-110 ${isActive ? 'bg-gray-400/60 scale-110' : ''} p-2 rounded transition-transform duration-200 w-full flex items-center justify-center`}>
            {img}
        </Link>
    )
}


