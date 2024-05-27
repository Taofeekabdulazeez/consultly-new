import MeetingsFilter from "@/components/MeetingsFilter";
import MeetingsTable from "@/components/MeetingsTable";
import TableLoader from "@/components/TableLoader";
import { Heading } from "@/components/ui/Heading";
import { Suspense } from "react";

export const metadata = {
  title: "Meetings",
};

type Props = {
  searchParams?: {
    status: "paid" | "in-progress" | "confirmed" | "pending";
  };
};

export default function Page({ searchParams }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Heading>Your meetings</Heading>
        <MeetingsFilter />
      </div>
      <Suspense fallback={<TableLoader />} key={searchParams?.status ?? "all"}>
        <MeetingsTable filter={searchParams?.status ?? "all"} />
      </Suspense>
    </div>
  );
}
