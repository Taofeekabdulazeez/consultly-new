"use server";

import { getAvalaibilty } from "@/lib/actions";
import { AvailabilityApi } from "@/schemas/availabilitySchema";
import { ReactNode } from "react";

type Props = {
  serviceId: string;
};

export default async function AvailablilityProvider({ serviceId }: Props) {
  const availaibilty = (await getAvalaibilty(serviceId)) as AvailabilityApi;
  console.log(availaibilty);
  return <div></div>;
}
