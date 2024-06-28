import { getUserServices } from "@/lib/actions";
import { ServicesProvider } from "./services-context";
import ServiceCards from "./service-cards";
import NoServices from "./no-services";

export const revalidate = 0;

export default async function ServiceList() {
  const services = await getUserServices();

  if (!services || !services.length) return <NoServices />;

  return (
    <ServicesProvider services={services}>
      <ServiceCards />
    </ServicesProvider>
  );
}
