"use client";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";
import { AvailablilityProvider } from "./availability-context";
import ButtonSetAvailabilty from "./btn-set-avalaibilty";

type Props = {
  service: Service;
  availability: AvailabilityApi;
};

export function Service({ service, availability }: Props) {
  const { id, title, description, duration } = service;

  return (
    <AvailablilityProvider availaibility={availability} serviceId={id}>
      <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
        <div>
          <Heading type="h6">{title}</Heading>
          <P size="sm">{description}</P>
        </div>
        <div className="flex flex-col">
          <P size="sm">Free</P>
          <span className="text-gray-600 text-sm">/ {duration}m</span>
          <ButtonSetAvailabilty />
        </div>
      </div>
    </AvailablilityProvider>
  );
}
