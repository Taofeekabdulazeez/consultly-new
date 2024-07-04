import ButtonTheme from "@/components/common/button-theme";
import Logo from "@/components/common/logo";
import { ReactNode } from "react";

export const revalidate = 0; // revalidate at most every hour

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header className="z-10 bg-gray-50 shadow-md relative">
        <div className="py-4">
          <Logo />
          <div className="absolute left-0 top-0">
            <ButtonTheme />
          </div>
        </div>
      </header>
      <div className="max-w-[800px] mx-auto mt-10 w-[90%] mb-6">{children}</div>
    </section>
  );
}
