import { Calendar, MapPin } from "lucide-react";
import { Heading } from "../ui/Heading";
import { useConsultState, useConsultUser } from "./ConsultContext";
import { P } from "../ui/typography";

export function ExpertDetails() {
  const user = useConsultUser();
  const { selectedService } = useConsultState();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6">
      <div className="flex flex-col mb-6 md:mb-0">
        <Heading type="h4" className="font-bold">
          {user.firstName} {user.lastName}
        </Heading>
        <div className="flex gap-2 items-center mt-1">
          <Calendar size={18} className="text-primary" />
          <P size="sm">{`Fri, Jun 7, 2024, 9:35 AM`}</P>
        </div>
        <div className="flex gap-2 items-center mt-1">
          <MapPin size={18} className="text-primary" />
          <P size="sm">{user.country}</P>
        </div>
      </div>
      <div>
        <P size="xs" className="hidden md:block">
          Starting at
        </P>
        <div className="flex gap-2">
          <Heading type="h2" className="font-bold">
            PLN 0.00
          </Heading>
          <P size="sm">/{selectedService.duration}m</P>
        </div>
      </div>
    </div>
  );
}
