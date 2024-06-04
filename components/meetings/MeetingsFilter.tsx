"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import ButtonFilter from "../ButtonFilter";

export default function MeetingsFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentFilter = searchParams.get("status") ?? "all";

  const handleFilter = (status: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("status", status);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filters = ["all", "confirmed", "in-progress", "paid", "pending"];

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {filters.map((filter) => (
        <ButtonFilter
          key={filter}
          onClick={() => handleFilter(filter)}
          isActive={currentFilter === filter}
        >
          {filter}
        </ButtonFilter>
      ))}
    </div>
  );
}
