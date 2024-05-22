"use client";

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
    Icon: IoHomeOutline,
  },
  {
    name: "Meeting Requests",
    href: "/dashboard/meetings",
    Icon: IoChatboxEllipsesOutline,
  },
  {
    name: "Avalabilty",
    href: "/dashboard/calender",
    Icon: IoCalendarNumberOutline,
  },
  {
    name: "Services",
    href: "/dashboard/services",
    Icon: IoIosList,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    Icon: FaRegUser,
  },
  {
    name: "Account Settings",
    href: "/dashboard/account",
    Icon: IoSettingsOutline,
  },
  {
    name: "Earnings",
    href: "/dashboard/earnings",
    Icon: BsCoin,
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
            <li key={name} className="text-slate-500">
              <Link
                href={href}
                className={`
                  md:flex md:gap-3 md:items-center md:py-2.5 md:px-3 md:text-sm font-medium hover:bg-slate-50 hover:text-blue-600 relative overflow-hidden rounded-sm
                     after:content-[''] after:block after:h-full after:absolute after:w-1 after:left-0 ${
                       href === pathname ? "bg-blue-50 text-blue-700" : ""
                     }`}
              >
                <Icon size={20} />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
