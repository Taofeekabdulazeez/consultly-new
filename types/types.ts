type MeetingFilter = "all" | "confirmed" | "in-progress" | "pending" | "paid";

type Meeting = {
  meetingId: string;
  duration: string;
  status: string;
  guest: string;
  email: string;
  time: string;
  date: string;
  price: string;
  meetingType: string;
};
