"use client";

import { getAvalaibilty } from "@/lib/actions";
import { transformAvailability } from "@/schemas/availabilitySchema";
import { ReactNode, useContext, createContext } from "react";

interface ContextI {
  serviceId: string;
  availaibility: Availability;
}

const AvailabilityContext = createContext({} as ContextI);

type Props = {
  serviceId: string;
  availaibility: AvailabilityApi;
  children: ReactNode;
};

function AvailablilityProvider({ serviceId, availaibility, children }: Props) {
  return (
    <AvailabilityContext.Provider
      value={{ serviceId, availaibility: transformAvailability(availaibility) }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
}

function useAvailability() {
  const context = useContext(AvailabilityContext);

  if (!context)
    throw new Error(
      "AvailabilityContext is used outside AvailabilityProvider!"
    );

  return context;
}

export { AvailablilityProvider, useAvailability };
