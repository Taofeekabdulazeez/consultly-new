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
  const status = searchParams?.status ?? "all";
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <Heading>Your meetings</Heading>
        <MeetingsFilter />
      </div>
      <Suspense fallback={<TableLoader />} key={status}>
        <MeetingsTable filter={status} />
      </Suspense>
    </div>
  );
}
