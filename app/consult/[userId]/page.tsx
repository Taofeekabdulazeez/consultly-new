import { ConsultProvider } from "../../../components/consult/ConsultContext";
import Steps from "@/components/consult/steps";
import ButtonsNav from "@/components/consult/buttons-nav";
import BookingForm from "@/components/consult/booking-form";
import { getConsultationData } from "@/lib/actions";

type Props = {
  params: {
    userId: string;
  };
};

export default async function Page({ params }: Props) {
  const { userId } = params;

  const user = await getConsultationData(userId);

  return (
    <ConsultProvider user={user}>
      <Steps />
      <BookingForm />
      <ButtonsNav />
    </ConsultProvider>
  );
}
