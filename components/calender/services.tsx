import { getServicesAndAvailabilty } from "@/lib/actions";
import { Service } from "./service";

export async function Services() {
  const services = await getServicesAndAvailabilty();

  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => {
        return (
          <Service
            key={service.id}
            service={service}
            availability={service.availability}
          />
        );
      })}
    </div>
  );
}
