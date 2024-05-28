import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function captitalize(text: string) {
  // const result = text.split("").at(0);

  // console.log(result, text);

  return;
}

export function getCurrentHpur() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) return "Good Morning";

  if (currentHour < 18) return "Good afternoon";

  return "Good evening";
}
