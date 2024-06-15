import { Calendar } from "@/components/ui/calendar";
import MeetingsTable from "@/components/meetings/MeetingsTable";
import { WelcomeScreen } from "@/components/dashboard/WelcomeScreen";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <>
      {/* <StripeBanner /> */}
      <div className="grid md:grid-cols-[1fr_auto] md:gap-6 md:grid-rows-2 mb-10">
        <WelcomeScreen />
        <div className="bg-gray-50 hidden md:block md:row-span-2 rounded-md">
          <Calendar />
        </div>
        <div className="bg-gray-50 rounded-md"></div>
      </div>
      <div className="bg-gray-50 flex-1 rounded-md">
        <MeetingsTable filter="all" />
      </div>
    </>
  );
}
