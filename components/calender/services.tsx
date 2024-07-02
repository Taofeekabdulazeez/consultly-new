import { getServicesAndAvailabilty } from "@/lib/actions";
import { Service } from "./service";
import NoService from "../services/no-services";

export async function Services() {
  const services = await getServicesAndAvailabilty();

  if (!services || !services.length) return <NoService showAddButton={true} />;

  return (
    <div className="grid grid-cols-1 gap-6">
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
