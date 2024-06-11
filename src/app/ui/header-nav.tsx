'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: '웹툰/만화',
    href: '/'
  },
  {
    name: '웹소설',
    href: '/1'
  },
  {
    name: '도서',
    href: '/2'
  },
  {
    name: '셀렉트',
    href: '/4'
  },
]
export const HeaderNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <ul className="flex">
      { links.map((link) => {
        return (
          <li className={` p-3`}>
            <Link href={link.href}><p className={`${pathname === link.href ? 'text-black' : 'text-[#aaa]'}`}>{link.name}</p></Link>
          </li>
        )
      })}
    </ul>
  )
}