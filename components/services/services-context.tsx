"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface ContextInterface {
  getService: (id: string) => Service;
  selectedServices: string[];
  toggleServiceSelection: (id: string) => void;
}

const ServicesContext = createContext({} as ContextInterface);

type ProviderProps = {
  children: ReactNode;
  services: Service[];
};

function ServicesProvider({ children, services }: ProviderProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleServiceSelection = (serviceId: string) => {
    console.log(selectedServices.includes(serviceId));

    setSelectedServices((ids) =>
      ids.includes(serviceId)
        ? ids.filter((id) => id !== serviceId)
        : [...ids, serviceId]
    );
  };

  const getService = (serviceId: string) =>
    services.find((service) => serviceId === service.id) as Service;

  return (
    <ServicesContext.Provider
      value={{ getService, selectedServices, toggleServiceSelection }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

function useServices() {
  const context = useContext(ServicesContext);

  if (!context)
    throw new Error("ServicesContext used outside ServicesProvider!");

  return context;
}

export { ServicesProvider, useServices };
