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

export function formatISODate(date: Date) {
  return new Date(date).toISOString().slice(0, 10);
}

export function generateTimeSlots(
  startTime: string,
  endTime: string,
  slotDuration: number
): string[] {
  // Helper function to convert HH:MM string to minutes since start of the day
  function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Helper function to convert minutes since start of the day to 12-hour HH:MM AM/PM string
  function minutesTo12HourTime(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Convert 0 to 12 for 12 AM/PM

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(mins).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const slots: string[] = [];

  for (
    let current = startMinutes;
    current + slotDuration <= endMinutes;
    current += slotDuration
  ) {
    const slotStart = minutesTo12HourTime(current);
    const slotEnd = minutesTo12HourTime(current + slotDuration);
    slots.push(`${slotStart} - ${slotEnd}`);
  }

  return slots;
}

export function convert24HourTo12Hour(time24: string): string {
  // Split the input time string into hours and minutes
  const [hour, minute] = time24.split(":").map(Number);

  // Determine the period (AM/PM)
  const period = hour >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  let hour12 = hour % 12;
  hour12 = hour12 === 0 ? 12 : hour12; // Convert 0 to 12 for 12 AM/PM

  // Format hours and minutes to ensure they are always two digits
  const formattedHour = String(hour12).padStart(2, "0");
  const formattedMinute = String(minute).padStart(2, "0");

  // Return the formatted 12-hour time string with AM/PM
  return `${formattedHour}:${formattedMinute} ${period}`;
}

export function getCurrentDateFormatted() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
