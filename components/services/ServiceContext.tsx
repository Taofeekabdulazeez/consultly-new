"use client";

import { ReactNode, createContext, useContext } from "react";

const ServiceContext = createContext({} as Service);

type Props = { children: ReactNode; service: Service };

function ServiceProvider({ children, service }: Props) {
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
