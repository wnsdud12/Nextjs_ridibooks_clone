'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });
const links = [
  {
    name: '웹툰',
    href: '/webtoon'
  },
  {
    name: '만화',
    href: '/comics  '
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
          <li key={`header-nav-${link.name}`} className='p-3'>
            <Link href={link.href}><p className={`header-nav text-sm font-bold ${pathname === link.href ? 'text-[#141414] cursor-default' : 'text-[#787878] hover:opacity-40'} ${notoSans.className}`}>{link.name}</p></Link>
          </li>
        )
      })}
    </ul>
  )
}