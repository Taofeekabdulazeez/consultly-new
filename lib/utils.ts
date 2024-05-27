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
