"use client";

import Service from "@/components/services/service";
import { useServices } from "./services-context";

export default function ServiceCards() {
  const { services } = useServices();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <Service serviceId={service.id} key={service.id} />
      ))}
    </div>
  );
}
