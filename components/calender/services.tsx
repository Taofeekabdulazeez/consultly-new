import { getUserServices } from "@/lib/actions";
import { Service } from "./service";

let serviceIds;

export async function Services() {
  const services = await getUserServices();
  // const serviceIds = services.map((service) => service.id);
  const serviceIds = ["153", "153", "153"];

  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
}
