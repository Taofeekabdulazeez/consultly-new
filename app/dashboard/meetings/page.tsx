import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div>
      <NoMeetings />
    </div>
  );
}

function NoMeetings() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="border-2 rounded grid place-items-center py-14 border-dotted">
        <div className="mb-3">
          <IoChatboxEllipsesOutline size={80} className="text-slate-300" />
        </div>
        <h3 className="text-stone-900 font-medium text-xl mb-1">
          No meeting requests yet
        </h3>
        <span className="text-sm text-slate-500">{`You don't have any meeting requests yet`}</span>
      </div>
    </div>
  );
}
