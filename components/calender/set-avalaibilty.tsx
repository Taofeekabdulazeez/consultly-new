import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormAvailability from "@/components/calender/form-availabilty";

export default function SetAvailabilty() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Set your availability</Button>
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[500px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Set your availability</SheetTitle>
          <SheetDescription>
            Select the type of service and dates you want to set availability
            for, e.g., July 10 - July 15. Then, add the intervals you want to
            work on particular days, e.g., 10.00-15.00. Consultly will suggest
            meeting times depending on the duration of the specific type of
            service.
          </SheetDescription>
        </SheetHeader>
        <FormAvailability />
      </SheetContent>
    </Sheet>
  );
}
