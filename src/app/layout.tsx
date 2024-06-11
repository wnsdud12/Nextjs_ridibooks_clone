import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeaderNav } from "./ui/header-nav";

export const metadata: Metadata = {
  title: "리디 RIDI - clonecoding",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body>
        <header className="px-8 flex justify-between border-b">
          <HeaderNav />
          <ul className="flex">
            <li className="p-3">
              <Link href="#"><p>로그인</p></Link>
            </li>
            <li className="p-3">
              <Link href="#"><p>회원가입</p></Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
