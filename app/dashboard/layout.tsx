import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="md:grid md:grid-cols-[240px_1fr] md:grid-rows-[auto_1fr] md:h-[100dvh]">
      <header className="bg-slate-100 p-4">header</header>
      <aside className="bg-slate-50 md:row-[1/-1]">Aside</aside>
      <main className="overflow-y-scroll p-6">{children}</main>
    </div>
  );
}
