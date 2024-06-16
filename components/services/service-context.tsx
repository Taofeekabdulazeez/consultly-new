"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ContextInterface {
  service: Service;
  selectedIds: string[];
  handleSelectedIds: (id: string) => void;
}

const ServiceContext = createContext({} as Service);

type Props = {
  children: ReactNode;
  service: Service;
};

function ServiceProvider({ children, service }: Props) {
  // const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // const handleSelectedIds = (serviceId: string) => {
  //   setSelectedIds((ids) =>
  //     ids.includes(serviceId)
  //       ? ids.filter((id) => id !== serviceId)
  //       : [...ids, serviceId]
  //   );
  // };

  return (
    <ServiceContext.Provider value={{ ...service }}>
      {children}
    </ServiceContext.Provider>
  );
}

function useService() {
  const context = useContext(ServiceContext);

  if (!context) throw new Error("ServiceContext used outside ServiceProvider");

  return context;
}

export { ServiceProvider, useService };
