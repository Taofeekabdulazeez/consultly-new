import { ReactNode } from "react";

export const revalidate = 0; // revalidate at most every hour

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-[800px] mx-auto mt-10 w-[90%]">{children}</div>;
}
