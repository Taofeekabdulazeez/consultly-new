import { Suspense } from "react";
import { Services } from "@/components/calender/services";

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
      <Suspense fallback={<span>Loading services..</span>}>
        <Services />
      </Suspense>
    </div>
  );
}
