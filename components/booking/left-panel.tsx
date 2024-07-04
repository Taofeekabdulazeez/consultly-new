import { useLocale } from "@react-aria/i18n";
import {
  BadgeCheck,
  CalendarCheck,
  CalendarIcon,
  Clock4,
  Video,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Heading } from "../ui/Heading";
import { useConsultState, useConsultUser } from "../consult/ConsultContext";
import { P } from "../ui/typography";

export function LeftPanel() {
  const user = useConsultUser();
  const { selectedDate, selectedService } = useConsultState();
  return (
    <div className="border-r pr-6">
      <div className="relative bg-gray-75 flex items-center justify-center h-[5rem] aspect-square rounded border">
        {user.image_url ? (
          <img src={user.image_url} alt="user image" />
        ) : (
          <Heading type="h3" className="uppercase">
            {user.firstName[0]}
            {user.lastName[0]}
          </Heading>
        )}
        <BadgeCheck className="absolute top-0 right-0 text-gray-50 fill-green-500 translate-x-[50%] -translate-y-[50%]" />
      </div>

      <div className="my-2 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-gray-800">
          <P size="sm" className="text-gray-800">
            {selectedService.title}
          </P>
        </div>

        <div className="flex items-center gap-2 text-gray-800">
          <CalendarCheck className="size-5" />
          <P size="sm">{selectedDate}</P>
        </div>

        <div className="flex items-center gap-2 text-gray-800">
          <Clock4 className="size-5" />
          <P size="sm">{selectedService.duration} mins</P>
        </div>

        <div className="flex items-center gap-2 text-gray-800">
          <Video className="size-6" strokeWidth={1.5} />
          <P size="sm">Video call</P>
        </div>
      </div>
    </div>
  );
}
