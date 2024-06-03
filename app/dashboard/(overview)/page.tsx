import { Calendar } from "@/components/ui/calendar";
import StripeBanner from "@/components/StripeBanner";
import MeetingsTable from "@/components/MeetingsTable";
import { WelcomeScreen } from "@/components/WelcomeScreen";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <>
      <StripeBanner />
      <div className="grid md:grid-cols-[1fr_auto] md:gap-6 md:grid-rows-2 mb-10">
        <WelcomeScreen />
        <div className="bg-gray-50 hidden md:block md:row-span-2 rounded-md">
          <Calendar />
        </div>
        <div className="bg-gray-50 rounded-md"></div>
      </div>
      <div className="bg-gray-50 flex-1 rounded-md min-h-[320px]">
        <MeetingsTable filter="all" />
      </div>
    </>
  );
}
