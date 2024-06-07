"use client";

import { BadgeCheck, Calendar, MapPin } from "lucide-react";
import { Heading } from "../ui/Heading";
import { useConsultUser } from "./ConsultContext";
import { P } from "../ui/typography";
import { getCurrentDateTime } from "@/lib/utils";

export default function ServiceScreen() {
  const user = useConsultUser();
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <div>
        <div className="relative flex items-center justify-center h-[6rem] aspect-square rounded border">
          <Heading type="h2" className="uppercase">
            {user.firstName[0]}
            {user.lastName[0]}
          </Heading>
          <BadgeCheck className="absolute top-0 right-0 text-gray-50 fill-green-500 translate-x-[50%] -translate-y-[50%]" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex flex-col">
            <Heading type="h4" className="uppercase font-bold">
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
            <P size="xs">Starting at</P>
            <div className="flex gap-2">
              <Heading type="h2" className="font-bold">
                PLN 0.00
              </Heading>
              <P size="sm">/20m</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
