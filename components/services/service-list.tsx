import { unstable_noStore as noStore } from "next/cache";
import { getUserServices } from "@/lib/actions";
import { ServiceProvider } from "./service-contex";
import Service from "./service";

export const revalidate = 0;

export default async function ServiceList() {
  noStore();
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
