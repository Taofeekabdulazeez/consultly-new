import { getUserServices } from "@/lib/actions";
import Service from "./Service";
import { ServiceProvider } from "./ServiceContext";

export default async function ServiceList() {
  const services = await getUserServices();
  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => (
        <ServiceProvider key={service.id} service={service}>
          <Service />
        </ServiceProvider>
      ))}
    </div>
  );
}
