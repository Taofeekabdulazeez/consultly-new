import { meetings } from "@/static_data/data";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { P } from "./ui/typography";
import clsx from "clsx";
import { Button } from "./ui/button";

export default function Table() {
  return (
    <div className="overflow-hidden rounded-lg w-full border border-gray-300">
      <table className="p-3 w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-75">
            <th className="uppercase text-sm font-semibold p-3">Date</th>
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
          {meetings.map((meeting) => {
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
                  <Tag status={meeting.status} />
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

          {/* <tr>
            <td className="p-3 flex items-center gap-6">
              <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
              <span className="flex flex-col">
                <span className="text-md font-medium">Today</span>
                <span className="text-sm font-medium text-stone-500">
                  10:30am → 10:45am
                </span>
              </span>
            </td>
            <td className="p-3 ">
              <span className="text-md font-medium flex flex-col">
                Adeleke Muyideen
              </span>
              <span className="text-sm text-stone-600">
                muyideeenadele@gmail.com
              </span>
            </td>
            <td className="p-3 text-sm font-medium">15 mins</td>
            <td className="p-3 text-sm font-medium">
              <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-green-300">
                Confirmed
              </span>
            </td>
            <td className="p-4 text-sm font-medium"></td>
          </tr>
          <tr className="divide">
            <td className="p-3 flex items-center gap-6">
              <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
              <span className="flex flex-col">
                <span className="text-md font-medium">May 27 2024</span>
                <span className="text-sm font-medium text-stone-500">
                  11:45am → 12:30am
                </span>
              </span>
            </td>
            <td className="p-4 ">
              <span className="text-md font-medium flex flex-col">
                Yusuf Balogun
              </span>
              <span className="text-sm text-stone-600">
                balogunyusuf@gmail.com
              </span>
            </td>
            <td className="p-4 text-sm font-medium">45 mins</td>
            <td className="p-4 text-sm font-medium">
              <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-blue-300">
                scheduled
              </span>
            </td>
            <td className="p-4 text-sm font-medium">
              <button className="cursor-pointer">
                <HiOutlineDotsVertical size={24} />
              </button>
            </td>
          </tr>
          <tr className="divide">
            <td className="p-3 flex items-center gap-6">
              <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
              <span className="flex flex-col">
                <span className="text-md font-medium">May 30 2024</span>
                <span className="text-sm font-medium text-stone-500">
                  12:45pm → 01:15pm
                </span>
              </span>
            </td>
            <td className="p-4 ">
              <span className="text-md font-medium flex flex-col">
                Gideon Chukwudi
              </span>
              <span className="text-sm text-stone-600">
                gideonthedon@gmail.com
              </span>
            </td>
            <td className="p-4 text-sm font-medium">30 mins</td>
            <td className="p-4 text-sm font-medium">
              <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-orange-300">
                pending
              </span>
            </td>
            <td className="p-4 text-sm font-medium">
              <button className="cursor-pointer">
                <HiOutlineDotsVertical size={24} />
              </button>
            </td>
          </tr>
          <tr className="divide">
            <td className="p-3 flex items-center gap-6">
              <span className="inline-block h-6 w-6 rounded-full bg-yellow-300"></span>
              <span className="flex flex-col">
                <span className="text-md font-medium">May 5 2024</span>
                <span className="text-sm font-medium text-stone-500">
                  9:45am → 10:00am
                </span>
              </span>
            </td>
            <td className="p-4 ">
              <span className="text-md font-medium flex flex-col">
                Olanredwaju Adam
              </span>
              <span className="text-sm text-stone-600">
                lanreadam@gmail.com
              </span>
            </td>
            <td className="p-4 text-sm font-medium">15 mins</td>
            <td className="p-4 text-sm font-medium">
              <span className="w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl bg-teal-300">
                completed
              </span>
            </td>
            <td className="p-4 text-sm font-medium">
              <button className="cursor-pointer">
                <HiOutlineDotsVertical size={24} />
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

type Tag_Props = {
  status: "confirmed" | "paid" | "in-progress" | "pending" | string;
};

function Tag({ status }: Tag_Props) {
  return (
    <span
      className={clsx(
        "w-fit uppercase text-xs font-semibold px-3 py-1.5 rounded-3xl",
        {
          "bg-blue-400   dark:bg-blue-600": status === "confirmed",
          "bg-green-300 dark:bg-green-600": status === "paid",
          "bg-purple-300 dark:bg-purple-600": status === "in-progress",
          "bg-yellow-300 dark:bg-yellow-600 text-gray-900":
            status === "pending",
        }
      )}
    >
      {status}
    </span>
  );
}
