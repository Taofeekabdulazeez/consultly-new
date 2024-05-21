import Aside from "@/components/Aside";
import Header from "@/components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="md:grid md:grid-cols-[240px_1fr] md:grid-rows-[auto_1fr] md:h-[100dvh] bg-slate-50">
      <Header />
      <Aside />
      <main className="overflow-y-scroll p-6">{children}</main>
    </div>
  );
}
