export function getCurrentHour() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) return "Good Morning";

  if (currentHour < 18) return "Good afternoon";

  return "Good evening";
}
