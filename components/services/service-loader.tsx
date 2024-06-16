import { Skeleton } from "../ui/skeleton";

export default function ServiceLoader() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Skeleton className="h-48 bg-gray-100"></Skeleton>
      <Skeleton className="h-48 bg-gray-100"></Skeleton>
      <Skeleton className="h-48 bg-gray-100"></Skeleton>
      <Skeleton className="h-48 bg-gray-100"></Skeleton>
    </div>
  );
}
