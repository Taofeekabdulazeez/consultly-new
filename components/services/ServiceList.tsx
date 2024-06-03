import { getUserServices } from "@/lib/actions";
import Service from "./Service";

export default async function ServiceList() {
  const services = await getUserServices();
  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => {
        const { id, title, description, price } = service;
        return (
          <Service
            key={service.id}
            id={id}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
}
