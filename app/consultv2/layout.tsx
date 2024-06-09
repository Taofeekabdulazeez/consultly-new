import Logo from "@/components/Logo";
import { ReactNode } from "react";

export const revalidate = 0; // revalidate at most every hour

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header className="z-10 bg-white shadow-md">
        <div className="py-6 ">
          <Logo />
        </div>
      </header>
      <div className="max-w-[800px] mx-auto mt-10 w-[90%]">{children}</div>
    </section>
  );
}
