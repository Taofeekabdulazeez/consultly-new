import { Calendar } from "@/components/ui/calendar";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";
import MeetingsTable from "@/components/MeetingsTable";
import { auth } from "@/lib/auth";
import StripeBanner from "@/components/StripeBanner";
import { getCurrentHour, getTodaysDate } from "@/lib/utils";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <StripeBanner />
      <div className="grid md:grid-cols-[1fr_auto] md:gap-6 md:grid-rows-2 mb-10">
        <div className="bg-gray-50 p-4 rounded-md">
          <Heading>
            {getCurrentHour()}, {session?.user?.name?.split(" ")[0]}👋
          </Heading>
          <P size="sm">
            It&apos;s <strong>{getTodaysDate()}</strong> today.
          </P>
          <div className="max-w-md space-y-1">
            <P size="sm">
              Do you know there are 3 ways of scheduling meetings in Consultly?
              Read about them{" "}
              <a
                className="underline text-primary font-medium"
                href="#"
                target="_blank"
              >
                here.
              </a>
            </P>
          </div>
        </div>
        <div className="bg-gray-50 hidden md:block md:row-span-2 rounded-md">
          <Calendar />
        </div>
        <div className="bg-gray-50 rounded-md"></div>
      </div>

      <div className="bg-gray-50 flex-1 rounded-md min-h-[320px]">
        <MeetingsTable filter="all" />
      </div>
    </div>
  );
}
