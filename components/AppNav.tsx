"use client";

import {
  CalendarCheck,
  CircleDollarSign,
  CircleUser,
  Home,
  List,
  Menu,
  MessageSquareText,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobile } from "@/hooks/useMobileNav";
import { Button } from "./ui/button";
import Logo from "./Logo";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    Icon: Home,
  },
  {
    name: "Meeting Requests",
    href: "/dashboard/meetings",
    Icon: MessageSquareText,
  },
  {
    name: "Avalabilty Calender",
    href: "/dashboard/calender",
    Icon: CalendarCheck,
  },
  {
    name: "My Services",
    href: "/dashboard/services",
    Icon: List,
  },
  {
    name: "Public Profile",
    href: "/dashboard/profile",
    Icon: CircleUser,
  },
  {
    name: "Account Settings",
    href: "/dashboard/account",
    Icon: Settings,
  },
  {
    name: "Earnings",
    href: "/dashboard/earnings",
    Icon: CircleDollarSign,
  },
];

export default function AppNav() {
  const pathname = usePathname();
  const { isNavOpen, toggleNav } = useMobile();

  return (
    <nav
      className={`transition-all fixed bg-gray-50 md:w-auto w-[100vw] right-0 top-0 min-h-screen md:static z-10 before:absolute before:content-[''] before:inset-0 before:h-screen before:w-screen before:bg-[rgba(0,_0,_0,_0.05)] before:-translate-x-full before:z-[8] ${
        !isNavOpen
          ? "translate-x-full md:translate-x-0 before:hidden"
          : "before:block"
      }`}
    >
      <Button
        onClick={toggleNav}
        variant="ghost"
        className={`z-10 fixed top-4 md:hidden bg-gray-50 ${
          !isNavOpen
            ? "right-[100vw] md:right-auto"
            : "left-[85vw] md:left-auto"
        }`}
      >
        {!isNavOpen ? <Menu size={30} /> : <X size={30} />}
      </Button>
      <div className="absolute left-4 top-5 block md:hidden">
        <Logo />
      </div>
      <ul className="flex flex-col p-3 gap-2 mt-20 md:mt-0">
        {navLinks.map((link) => {
          const { name, href, Icon } = link;
          return (
            <li key={name} className="text-gray-700">
              <Link
                href={href}
                onClick={toggleNav}
                className={`
                  flex gap-3 items-center py-2.5 px-3 md:text-sm font-medium hover:bg-gray-75 hover:text-primary relative overflow-hidden rounded-sm
                     after:content-[''] after:block after:h-full after:absolute after:w-[3px] after:right-0 ${
                       href === pathname
                         ? "bg-gray-100 text-primary after:bg-primary"
                         : ""
                     }`}
              >
                <Icon size={20} strokeWidth={1.75} />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
