import { signOutAction } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { LogOut, Moon, X } from "lucide-react";
import Image from "next/image";
import ButtonTheme from "./ButtonTheme";
import { Button } from "./ui/button";
import { MobileProvider } from "@/hooks/useMobileNav";
import NavToggle from "./NavToggle";
import Logo from "./Logo";

export default async function Header() {
  const session = await auth();
  console.log(session);
  return (
    <header className="z-10 p-4 flex justify-between items-center gap-3 bg-gray-50 fixed sm:static w-full">
      <div>
        <div className="md:hidden block">
          <Logo />
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 relative">
            {session?.user?.image ? (
              <img
                // fill
                alt="user image"
                className="h-10 w-10 rounded-full"
                src={session.user.image}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-xl font-bold">TA</span>
            )}
          </div>
          <p className="text-sm font-medium hidden md:block">
            {session?.user?.name}
          </p>
        </div>

        <ButtonTheme />

        <form action={signOutAction}>
          <button className="p-1.5 hover:bg-gray-75">
            <LogOut className="text-primary" />
          </button>
        </form>
        {/* <NavToggle /> */}
      </div>
    </header>
  );
}
