type MeetingFilter = "all" | "confirmed" | "in-progress" | "pending" | "paid";

type Meeting = {
  id: string;
  status: string;
  time: string;
  duration: number;
  date: string;
  guest: Guest;
  service: Service;
};

type User = {
  id: string;
  created_at: string;
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
  duration: number;
};

type Guest = {
  id: string;
  email: string;
  fullName: string;
  note: string;
  userId: string;
};

type Session = {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
};
