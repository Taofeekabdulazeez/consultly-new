"use client";

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
// import { useState } from "react";

export default function ButtonSetAvailabilty() {
  // const [open, setOpen] = useState(false);
  // const closeSheet = () => setOpen(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Set your availability</Button>
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[500px] pr-0">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Weekly hours</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <FormAvailability />
      </SheetContent>
    </Sheet>
  );
}
