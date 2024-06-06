"use client";

import { ConsultProvider } from "../../../components/consult/ConsultContext";
import Steps from "@/components/consult/steps";

import ButtonsNav from "@/components/consult/buttons-nav";
import BookingForm from "@/components/consult/booking-form";

type Props = {
  params: {
    username: string;
  };
};

export default function Page({ params }: Props) {
  const { username } = params;

  return (
    <ConsultProvider>
      <Steps />
      <BookingForm />
      <ButtonsNav />
    </ConsultProvider>
  );
}
