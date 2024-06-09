import { Skeleton } from "../ui/skeleton";

export default function ServiceLoader() {
  return (
    <div className="grid gap-6">
      <Skeleton className="h-24 bg-gray-100"></Skeleton>
      <Skeleton className="h-24 bg-gray-100"></Skeleton>
      <Skeleton className="h-24 bg-gray-100"></Skeleton>
      <Skeleton className="h-24 bg-gray-100"></Skeleton>
    </div>
  );
}
