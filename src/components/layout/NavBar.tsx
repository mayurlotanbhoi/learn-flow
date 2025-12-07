"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, SlidingButton } from "../buttons";

export default function Navbar() {
     const pathname = usePathname();

     const navItems = [
          { title: "Blog", href: "/" },
          { title: "DSA Sheet", href: "/dsa/sheet" },
          { title: "How to Use", href: "/profile" },
     ];

     return (
          <nav className="container fixed top-0 z-50 rounded-2xl mt-4 fixed custom-outline bg-dark text-white px-6 py-4 flex items-center justify-between shadow-md">

               {/* Brand Logo */}
               <Link href="/" className="text-xl font-bold primary">
                    MyApp 🚀
               </Link>

               {/* Navigation Links */}
               <ul className="flex gap-6">
                    {navItems.map((item) => (
                         <li key={item.href}>
                              <Link
                                   href={item.href}
                                   className={` transition ${pathname === item.href ? "primary-dark hover:primary font-semibold" : ""
                                        }`}
                              >
                                   {item.title}
                              </Link>
                         </li>
                    ))}
               </ul>
               <div className="flex gap-2">
                    <Button content="Login" buttonClass="btn-primary w-24 h-14 text-black" />
                    <SlidingButton arrowDirection="left" content="Explore" />
               </div>
          </nav>
     );
}
