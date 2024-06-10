"use client";
import { useForm } from "react-hook-form";

type Data = {
  firstName: string;
  lastName: string;
  seatNumber: number;
};

export default function TestForm() {
  const {} = useForm();

  return (
    <form>
      <input type="text" />
    </form>
  );
}
