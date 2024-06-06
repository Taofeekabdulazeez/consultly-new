import ServiceScreen from "@/components/consult/service-screen";
import AvailabiltyScreen from "@/components/consult/availabilty-screen";
import DetailsScreen from "@/components/consult/details-screen";
import ConfirmationScreen from "@/components/consult/confirmation-screen";
import { useConsult } from "./ConsultContext";

export default function BookingForm() {
  const { step } = useConsult();
  console.log(step);
  return (
    <>
      {step === 1 && <ServiceScreen />}
      {step === 2 && <AvailabiltyScreen />}
      {step === 3 && <DetailsScreen />}
      {step === 4 && <ConfirmationScreen />}
    </>
  );
}
