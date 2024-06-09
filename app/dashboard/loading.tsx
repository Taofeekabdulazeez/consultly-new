import PageLoader from "@/components/page-loader";

export default function Loading() {
  return (
    <div className="h-screen">
      <div className="w-fit mx-auto mt-32">
        <PageLoader />
      </div>
    </div>
  );
}
