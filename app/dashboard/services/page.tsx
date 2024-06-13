import ButtonAddService from "@/components/services/btn-add-service";
import ServiceList from "@/components/services/service-list";
import ServiceLoader from "@/components/services/service-loader";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";
import { Suspense } from "react";

export const metadata = {
  title: "Services",
};

export default async function Page() {
  return (
    <div className="bg-gray-50 rounded p-6">
      <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-48 mb-10">
        <div>
          <Heading>My Services</Heading>
          <P size="sm">
            {`Add the types of consultations you provide, e.g., "English lesson" or
          "Medical consultation". It will enable your clients to book a
          consultation through your Public Profile. You can arrange the order in
          which they appear on your Public Profile by dragging and dropping them
          in the desired order.`}
          </P>
        </div>
        <ButtonAddService />
      </div>
      <Suspense fallback={<ServiceLoader />}>
        <ServiceList />
      </Suspense>
    </div>
  );
}
