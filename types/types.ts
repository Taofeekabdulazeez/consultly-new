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

type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  profession: string;
  country: string;
  language: string;
  city: string;
  about: string;
  website_url: string;
  linkedIn_url: string;
  twitter_url: string;
  facebook_url: string;
  instagram_url: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  userId: string;
};
