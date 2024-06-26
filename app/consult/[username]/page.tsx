import { ConsultProvider } from "../../../components/consult/ConsultContext";
import Steps from "@/components/consult/steps";

import ButtonsNav from "@/components/consult/buttons-nav";
import BookingForm from "@/components/consult/booking-form";
import {
  getConsultation,
  getCurrentUser,
  getUserServices,
} from "@/lib/actions";

type Props = {
  params: {
    username: string;
  };
};

export default async function Page({ params }: Props) {
  const { username } = params;

  const user = await getConsultation(username);
  console.log(user);

  return (
    <ConsultProvider user={user}>
      <Steps />
      <BookingForm />
      <ButtonsNav />
    </ConsultProvider>
  );
}
