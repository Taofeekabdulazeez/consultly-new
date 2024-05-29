import { HiOutlineDotsVertical } from "react-icons/hi";
import { P } from "./ui/typography";
import { Button } from "./ui/button";
import { meetingsData } from "@/static_data/data";
import NoMeetings from "./NoMeetings";
import StatusTag from "./StatusTag";

type Props = {
  filter: MeetingFilter;
};

export default function MeetingsTable({ filter }: Props) {
  const meetings = meetingsData;

  if (!meetings.length) return <NoMeetings />;

  const displayedMeetings = filterMeetings(meetings, filter);

  return (
    <div className="overflow-hidden rounded-lg w-full border border-gray-300 overflow-y-scroll">
      <table className="p-3 w-full text-left border-collapse">
        <thead className="">
          <tr className="bg-gray-75">
            <th className="uppercase text-sm font-semibold p-3 pl-8">Date</th>
            <th className="uppercase text-sm font-semibold py-3">Guest</th>
            <th className="uppercase text-sm font-semibold py-3">Duration</th>
            <th className="uppercase text-sm font-semibold py-3">
              Meeting type
            </th>
            <th className="uppercase text-sm font-semibold py-3">status</th>
            <th className="uppercase text-sm font-semibold py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 border-collapse">
          {displayedMeetings?.map((meeting) => {
            return (
              <tr key={meeting.meetingId}>
                <td className="p-2 flex items-center gap-4">
                  <span className="inline-block w-5 h-5 rounded-full bg-yellow-400"></span>
                  <span className="flex flex-col">
                    <P size="sm" className="leading-none">
                      {meeting.date}
                    </P>
                    <P size="xs" className="text-gray-500">
                      {meeting.time}
                    </P>
                  </span>
                </td>
                <td>
                  <P size="sm" className="leading-none">
                    {meeting.guest}
                  </P>
                  <P size="xs" className="">
                    {meeting.email}
                  </P>
                </td>
                <td>
                  <P size="sm">{meeting.duration}</P>
                </td>
                <td className="">
                  <P size="sm">{meeting.meetingType}</P>
                </td>
                <td>
                  <StatusTag status={meeting.status} />
                </td>
                <td className="flex items-center gap-2">
                  <Button size="sm">Join</Button>
                  <button className="cursor-pointer">
                    <HiOutlineDotsVertical size={24} />
                  </button>
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
