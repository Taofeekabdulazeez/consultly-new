import { Skeleton } from "../ui/skeleton";

export default function ServiceLoader() {
  return (
    <div className="grid gap-6">
      <Skeleton className="h-24 bg-gray-75"></Skeleton>
      <Skeleton className="h-24 bg-gray-75"></Skeleton>
      <Skeleton className="h-24 bg-gray-75"></Skeleton>
      <Skeleton className="h-24 bg-gray-75"></Skeleton>
    </div>
  );
}
