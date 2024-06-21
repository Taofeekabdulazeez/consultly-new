"use client";

import ServiceActionMenu from "./service-action-menu";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";
import { Checkbox } from "../ui/checkbox";
import ButtonCopy from "../common/button-copy";
import { Clock, Forward } from "lucide-react";
import Link from "next/link";
import { useServices } from "./services-context";
import ServiceCheckbox from "./service-checkbox";

type Props = {
  serviceId: string;
  color?: string;
};

export default function Service({ serviceId, color }: Props) {
  const { getService, selectedIds } = useServices();

  const { id, title, description, price, duration } = getService(serviceId);

  return (
    <div
      className={`p-3 border border-gray-200 rounded-sm relative overflow-hidden shadow cursor-pointer`}
    >
      <p>{selectedIds.length}</p>
      <div
        style={{ backgroundColor: color || "green" }}
        className="absolute w-full h-1 top-0 left-0"
      ></div>
      <div className="flex items-center justify-between">
        <ServiceCheckbox serviceId={id} />
        <ServiceActionMenu serviceId={id} />
      </div>
      <div className="mb-3">
        <Heading type="h5">{title}</Heading>
        <P size="sm" className="mt-0 leading-none flex items-center gap-1">
          <Clock size={14} />
          {duration} minutes, Video call
        </P>
      </div>
      <P size="sm" className="italic font-normal min-h-[80px]">
        {`"${description}"`}
      </P>

      <div className="border-t mt-4">
        <div className="flex items-center justify-between mt-4">
          <ButtonCopy size="sm" className="font-normal">
            Copy link
          </ButtonCopy>
          <Link href="" className="text-sm text-primary">
            View booking page
          </Link>
          {/* <Button
            variant="outline"
            size="sm"
            className="font-normal border-primary"
          >
            Share
            <Forward size={14} />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
