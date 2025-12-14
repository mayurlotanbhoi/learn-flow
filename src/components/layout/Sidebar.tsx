"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const generalLinks = [
     { title: "DSA", href: "/" },
     { title: "Leaderboard", href: "/leaderboard" },
     { title: "Test", href: "/account" },
];

const topics = [
     "Arrays",
     "Strings",
     "Linked List",
     "Stack",
     "Queue",
     "Recursion",
     "Binary Tree",
     "BST",
     "Graphs",
     "DP",
     "Arrays",
     "Strings",
     "Linked List",
     "Stack",
     "Queue",
     "Recursion",
     "Binary Tree",
     "BST",
     "Graphs",
     "DP",
];

export default function Sidebar() {
     const pathname = usePathname();

     return (
          <aside className=" left-4 px-2 py-2 top-4 h-[calc(100vh-2rem)] w-72  bg-dark text-white border-r border-white/20 shadow-lg">

               {/* Logo */}
               <Link href="/" className="text-2xl font-bold primary mb-6 block">
                    MyApp 🚀
               </Link>

               {/* ===== General Section ===== */}
               <div className="mb-8 px-3 py-3">

                    <ul className="space-y-2">
                         {generalLinks.map((item) => (
                              <li key={item.href}>
                                   <Link
                                        href={item.href}
                                        className={`block rounded-lg px-4 py-2 transition 
                  ${pathname === item.href
                                                  ? "primary-gradient text-primary font-semibold"
                                                  : "hover:[background:var(--primary-gradient)] "
                                             }`}
                                   >
                                        {item.title}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </div>
               <hr className="border-t my-3 border-white/20 transition" />

               {/* ===== Topics Section ===== */}
               <div className=" ">
                    <h3 className="text-sm px-2 py-2 uppercase text-gray-400 mb-3">
                         Topics
                    </h3>

                    <ul className="space-y-2 px-3 py-3  overflow-y-scroll h-100 pr-1">
                         {topics.map((topic) => (
                              <li
                                   key={topic}

                              >
                                   <div className="border border-white/20 rounded-lg px-4 py-2 text-sm cursor-pointer hover:bg-white/5 transition flex items-center gap-3">
                                        <Image className=" rounded-md" width={50} height={50} src={'https://myriad.markets/assets/crypto-Cwm21HlN.webp'} alt="topic" />
                                        <div>
                                             {topic}
                                             <p className=" text-xs text-gray-400">test</p>
                                        </div>

                                   </div>
                              </li>
                         ))}
                    </ul>
               </div>
          </aside>
     );
}
