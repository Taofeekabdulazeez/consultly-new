"use client";

import ServiceActionMenu from "./service-action-menu";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";
import { useService } from "./service-context";
import { Checkbox } from "../ui/checkbox";
import ButtonCopy from "../common/button-copy";
import { Button } from "../ui/button";
import { Clock, Forward } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
  title?: string;
  description?: string;
  price?: number;
};

export default function Service({ color }: { color: string }) {
  const { id, title, description, price, duration } = useService();

  return (
    <div
      className={`p-3 border border-gray-200 rounded-sm relative overflow-hidden shadow cursor-pointer`}
    >
      <div
        style={{ backgroundColor: color || "green" }}
        className="absolute w-full h-1 top-0 left-0"
      ></div>
      <div className="flex items-center justify-between">
        <Checkbox />
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
