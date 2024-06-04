import SetAvailabilty from "@/components/calender/set-avalaibilty";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";

export const metadata = {
  title: "Calender",
};

export default function Page() {
  return (
    <div className="bg-gray-50 rounded p-6 w-full mx-auto">
      <div className="grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-48 mb-10">
        <div>
          <Heading>My availability</Heading>
          <P size="sm">
            {` Set your availability dates and times by clicking the "Set your availability" button on the right. Below you can see the set dates and times broken down by type of service.`}
          </P>
        </div>
        <SetAvailabilty />
      </div>
      <Services />
    </div>
  );
}

function Services() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
        <div>
          <Heading type="h6">Mentorship</Heading>
          <P size="sm">
            This has to do with providing a guidance for aspiring young
            individuals
          </P>
        </div>
        <div className="flex flex-col">
          <P size="sm">Free</P>
          <span className="text-gray-600 text-sm">/ 30m</span>
        </div>
      </div>
      <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
        <div>
          <Heading type="h6">IT Consultancy</Heading>
          <P size="sm">
            This has to do with anything around CTO-as-a-Service, IT consultancy
            service
          </P>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Free</span>
          <span className="text-gray-600 text-sm">/ 30m</span>
        </div>
      </div>
    </div>
  );
}
