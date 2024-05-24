"use client";

import {
  CalendarCheck,
  CalendarHeart,
  CircleDollarSign,
  CircleUser,
  Home,
  List,
  ListChecks,
  ListOrdered,
  MessageSquareText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCoin } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import {
  IoCalendarNumberOutline,
  IoChatboxEllipsesOutline,
  IoChatboxOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";

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
  return (
    <nav>
      <ul className="flex flex-col p-3 gap-2">
        {navLinks.map((link) => {
          const { name, href, Icon } = link;
          return (
            <li key={name} className="text-slate-600">
              <Link
                href={href}
                className={`
                  md:flex md:gap-3 md:items-center md:py-2.5 md:px-3 md:text-sm font-medium hover:bg-slate-50 hover:text-primary relative overflow-hidden rounded-sm
                     after:content-[''] after:block after:h-full after:absolute after:w-[3px] after:right-0 ${
                       href === pathname
                         ? "bg-blue-50 text-primary after:bg-primary"
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
