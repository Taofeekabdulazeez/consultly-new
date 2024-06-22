import ButtonSetAvailabilty from "@/components/calender/btn-set-avalaibilty";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";
import { getUserServices } from "@/lib/actions";
import { Suspense } from "react";

export const metadata = {
  title: "My Calender",
};

export default function Page() {
  return (
    <div className="bg-gray-50 rounded p-6 w-full mx-auto">
      {/* <div className="grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-48 mb-10">
        <div>
          <Heading>My availability</Heading>
          <P size="sm">
            {` Set your availability dates and times by clicking the "Set your availability" button on the right. Below you can see the set dates and times broken down by type of service.`}
          </P>
        </div>
        <ButtonSetAvailabilty />
      </div> */}
      <Suspense fallback={<span>Loading..</span>}>
        <Services />
      </Suspense>
    </div>
  );
}

async function Services() {
  const services = await getUserServices();

  return (
    <div className="grid grid-cols-1 gap-3">
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
}

function Service({ service }: { service: Service }) {
  const { id, title, description, duration } = service;
  return (
    <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
      <div>
        <Heading type="h6">{title}</Heading>
        <P size="sm">{description}</P>
      </div>
      <div className="flex flex-col">
        <P size="sm">Free</P>
        <span className="text-gray-600 text-sm">/ {duration}m</span>
        <ButtonSetAvailabilty id={id} />
      </div>
    </div>
  );
}
