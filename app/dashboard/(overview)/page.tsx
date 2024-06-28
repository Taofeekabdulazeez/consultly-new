import { Calendar } from "@/components/ui/calendar";
import MeetingsTable from "@/components/meetings/MeetingsTable";
import { WelcomeScreen } from "@/components/dashboard/WelcomeScreen";
// import { auth } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  // const session = await auth();
  const supabase = createClient();
  const { data: session } = await supabase.auth.getSession();
  console.log(session.session?.user);

  // console.log(session);
  return (
    <>
      {/* <StripeBanner /> */}
      <div className="grid md:grid-cols-[1fr_auto] md:gap-6 md:grid-rows-2 mb-10">
        <WelcomeScreen email={session.session?.user?.email as string} />
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
