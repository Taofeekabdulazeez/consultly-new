"use client";

import ServiceScreen from "@/components/consult/service-screen";
import AvailabiltyScreen from "@/components/consult/availabilty-screen";
import DetailsScreen from "@/components/consult/details-screen";
import ConfirmationScreen from "@/components/consult/confirmation-screen";
import { useConsultState } from "./ConsultContext";

export default function BookingForm() {
  const { step } = useConsultState();

  return (
    <div className="bg-gray-50 p-6 rounded-md my-5 shadow-sm">
      {step === 1 && <ServiceScreen />}
      {step === 2 && <AvailabiltyScreen />}
      {step === 3 && <DetailsScreen />}
      {step === 4 && <ConfirmationScreen />}
    </div>
  );
}
