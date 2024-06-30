import { HiOutlineDotsVertical } from "react-icons/hi";
import { getUserMeetings } from "@/lib/actions";
import { formatDateString } from "@/lib/utils";
import { P } from "../ui/typography";
import StatusTag from "./StatusTag";
import { Button } from "../ui/button";
import NoMeetings from "./NoMeetings";
import { createClient } from "@/utils/supabase/server";

type Props = {
  filter: MeetingFilter;
};

export default async function MeetingsTable({ filter }: Props) {
  const meetings = await getUserMeetings();
  console.log(meetings);

  if (!meetings || !meetings.length) return <NoMeetings />;

  const displayedMeetings = filterMeetings(
    meetings as unknown as Meeting[],
    filter
  );

  return (
    <div className="rounded-lg border min-w-full border-gray-300 overflow-x-scroll">
      <table className="p-3 text-left border-collapse w-[1000px] md:w-full">
        <thead className="">
          <tr className="bg-gray-75">
            <th className="uppercase text-sm font-medium p-3">Date</th>
            <th className="uppercase text-sm font-medium py-3">Guest</th>
            <th className="uppercase text-sm font-medium py-3">Duration</th>
            <th className="uppercase text-sm font-medium py-3">Meeting type</th>
            <th className="uppercase text-sm font-medium py-3">status</th>
            <th className="uppercase text-sm font-medium py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 border-collapse">
          {displayedMeetings?.map((meeting) => {
            return (
              <tr key={meeting.id}>
                <td className="p-2 flex items-center gap-4">
                  {/* <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span> */}
                  <span className="flex flex-col">
                    <P size="sm" className="leading-none">
                      {formatDateString(meeting.date)}
                    </P>
                    <P size="xs" className="text-gray-500">
                      {formatTo12Hour(meeting.time)}
                    </P>
                  </span>
                </td>
                <td>
                  <P size="sm" className="leading-none">
                    {meeting.guest.fullName}
                  </P>
                  <P size="xs" className="">
                    {meeting.guest.email}
                  </P>
                </td>
                <td>
                  <P size="sm">{meeting.duration}mins</P>
                </td>
                <td className="">
                  <P size="sm">{meeting.service.title}</P>
                </td>
                <td>
                  <StatusTag status={meeting.status} />
                </td>
                <td>
                  <span className="flex items-center gap-1">
                    <Button size="sm">Join</Button>
                    <button className="cursor-pointer">
                      <HiOutlineDotsVertical size={24} />
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const filterMeetings = (meetings: Meeting[], filter: MeetingFilter) => {
  if (filter === "all") return meetings;

  if (filter === "confirmed")
    return meetings.filter((meeting: any) => meeting.status === "confirmed");

  if (filter === "in-progress")
    return meetings.filter((meeting: any) => meeting.status === "in-progress");

  if (filter === "pending")
    return meetings.filter((meeting: any) => meeting.status === "pending");

  if (filter === "paid")
    return meetings.filter((meeting: any) => meeting.status === "paid");
};

function formatTo12Hour(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12; // convert 0 to 12 for 12 AM
  const formattedHours = adjustedHours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${suffix}`;
}
