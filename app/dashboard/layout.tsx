import Aside from "@/components/Aside";
import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: {
    template: "%s / Consultly",
    default: "Dashboard",
  },
};

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[240px_1fr] md:grid-rows-[auto_1fr] md:h-[100dvh]">
      <Header />
      <Aside />
      <main className="md:col-[auto] col-span-2 md:p-6 bg-gray-100 pt-24 sm:pt-6 overflow-y-hidden">
        {children}
      </main>
    </div>
  );
}
