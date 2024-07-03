import { Suspense } from "react";
import { Services } from "@/components/calender/services";
import AvailaibilityLoader from "@/components/calender/availability-loader";

export const metadata = {
  title: "My Calender",
};

export default function Page() {
  return (
    <div className="bg-gray-50 rounded p-6 w-full mx-auto">
      <Suspense fallback={<AvailaibilityLoader />}>
        <Services />
      </Suspense>
    </div>
  );
}
