import { unstable_noStore as noStore } from "next/cache";
import { getUserServices } from "@/lib/actions";
import { ServiceProvider } from "./service-contex";
import Service from "./service";

export const revalidate = 0;

// const colors = new Map()
//   .set(0, "bg-orange-400")
//   .set(1, "bg-blue-400")
//   .set(2, "bg-green-400")
//   .set(3, "bg-red-400");
const colors = ["orange", "blue", "indigo", "blue", "purple", "indigo"];

export default async function ServiceList() {
  noStore();
  const services = await getUserServices();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <ServiceProvider key={service.id} service={service}>
          <Service color={colors[i]} />
        </ServiceProvider>
      ))}
    </div>
  );
}
