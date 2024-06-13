"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ButtonTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => setIsDarkMode((mode) => !mode);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleMode}
      className="p-1.5 order-2 md:-order-1 hover:bg-gray-75 text-primary"
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
