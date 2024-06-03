import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentHour() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) return "Good Morning";

  if (currentHour < 18) return "Good afternoon";

  return "Good evening";
}

export function getTodaysDate() {
  return new Date().toDateString();
}

export const getCurrentDateTime = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

export function formatDateString(dateString: string) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Parse the input date string
  const dateParts = dateString.split("-");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Months are zero-indexed
  const day = parseInt(dateParts[2], 10);

  // Create a Date object
  const date = new Date(year, month, day);

  // Get the day of the week, month name, and day of the month
  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthName = monthsOfYear[month];
  const dayOfMonth = date.getDate();

  // Format the date string
  return `${monthName} ${dayOfMonth}, ${year}`;
}
