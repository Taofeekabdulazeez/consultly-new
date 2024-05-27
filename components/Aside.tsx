"use client";

import AppNav from "./AppNav";
import Logo from "./Logo";

export default function Aside() {
  return (
    <aside className="bg-gray-50 md:row-[1/-1] overflow-y-scroll hidden sm:block">
      <div className="py-8">
        <Logo />
      </div>
      <AppNav />
    </aside>
  );
}
