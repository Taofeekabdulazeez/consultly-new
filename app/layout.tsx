import type { Metadata } from "next";
import { Inter, Lato, Montserrat, Open_Sans, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });

const lato = Lato({
  weight: ["400", "900", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consultly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased relative overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-right" visibleToasts={1} />
      </body>
    </html>
  );
}
