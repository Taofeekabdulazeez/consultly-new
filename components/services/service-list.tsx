import { getUserServices } from "@/lib/actions";
import { ServicesProvider } from "./services-context";
import Service from "./service";
import ServiceToastAction from "./service-toast-action";

export const revalidate = 0;

export default async function ServiceList() {
  const colors = ["orange", "blue", "red", "purple", "indigo", "green"];
  const services = await getUserServices();

  return (
    <ServicesProvider services={services}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Service serviceId={service.id} key={service.id} color={colors[i]} />
        ))}
      </div>
      <ServiceToastAction />
    </ServicesProvider>
  );
}

// const toggleItem = (arr: any, item: any) =>
//   arr.includes(item) ? arr.filter((i: any) => i !== item) : [...arr, item];
