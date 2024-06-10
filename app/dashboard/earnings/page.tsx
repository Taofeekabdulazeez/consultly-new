import ButtonCopy from "@/components/button-copy";
import TestForm from "./TestForm";
import { time } from "console";

export const metadata = {
  title: "Earnings",
};

const value = { firstName: "Taofeek", seatNumber: 9, time: "", date: "" };

export default function Page() {
  return (
    <div>
      <TestForm data={value} />
    </div>
  );
}
