"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextInterface {
  getService: (id: string) => Service;
  selectedServices: string[];
  toggleServiceSelection: (id: string) => void;
  onSelectMode: boolean;
}

const ServicesContext = createContext({} as ContextInterface);

type ProviderProps = {
  children: ReactNode;
  services: Service[];
};

function ServicesProvider({ children, services }: ProviderProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [onSelectMode, setOnSelectMode] = useState(false);

  useEffect(() => {
    if (selectedServices.length === 0) setOnSelectMode(false);
    else setOnSelectMode(true);
  }, [selectedServices]);

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices((ids) =>
      ids.includes(serviceId)
        ? ids.filter((id) => id !== serviceId)
        : [...ids, serviceId]
    );

    console.log(selectedServices);
  };

  const getService = (serviceId: string) =>
    services.find((service) => serviceId === service.id) as Service;

  return (
    <ServicesContext.Provider
      value={{
        getService,
        selectedServices,
        toggleServiceSelection,
        onSelectMode,
      }}
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
