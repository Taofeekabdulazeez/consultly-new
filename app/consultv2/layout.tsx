import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-[700px] mx-auto mt-16 w-[90%]">{children}</div>;
}