import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";
import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5";

export const metadata = {
  title: "Meetings",
};

export default function Page() {
  return (
    <div>
      <NoMeetings />
    </div>
  );
}

function NoMeetings() {
  return (
    <div className="bg-gray-50 p-4 rounded shadow-sm">
      <div className="border-2 rounded grid place-items-center py-14 border-dotted border-gray-200">
        <div className="mb-3">
          <IoChatboxEllipsesOutline size={80} className="text-gray-300" />
        </div>
        <Heading>No meeting requests yet</Heading>
        <P>{`You don't have any meeting requests yet`}</P>
      </div>
    </div>
  );
}
