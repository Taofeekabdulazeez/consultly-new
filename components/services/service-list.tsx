import { getUserServices } from "@/lib/actions";
import { ServicesProvider } from "./services-context";
import ServiceCards from "./service-cards";

export const revalidate = 0;

export default async function ServiceList() {
  const services = await getUserServices();

  return (
    <ServicesProvider services={services}>
      <ServiceCards />
    </ServicesProvider>
  );
}
