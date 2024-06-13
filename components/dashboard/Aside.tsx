"use client";

import { MobileProvider } from "@/hooks/useMobileNav";
import AppNav from "./AppNav";
import Logo from "../common/logo";

export default function Aside() {
  return (
    <aside className="md:h-screen bg-gray-50 md:row-[1/-1] md:overflow-y-scroll col-start-1 row-start-1 self-center md:self-start">
      <div className="sm:py-8 hidden md:block">
        <Logo />
      </div>
      <MobileProvider>
        <AppNav />
      </MobileProvider>
    </aside>
  );
}
