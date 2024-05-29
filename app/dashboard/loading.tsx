import SpinnerPage from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-screen">
      <div className="w-fit mx-auto mt-32">
        <SpinnerPage />
      </div>
    </div>
  );
}
