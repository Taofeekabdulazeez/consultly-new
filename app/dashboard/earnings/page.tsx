import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Test from "./Test";
import { addService, getCurrentUser } from "@/lib/actions";

export const metadata = {
  title: "Earnings",
};

export default function Page() {
  return (
    <div>
      <form action={addService}>
        <Test />
      </form>
    </div>
  );
}
