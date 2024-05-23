"use client";

import AppNav from "./AppNav";
import Logo from "./Logo";

export default function Aside() {
  return (
    <aside className="bg-white md:row-[1/-1] overflow-y-scroll hidden sm:block">
      <Logo />
      <AppNav />
    </aside>
  );
}