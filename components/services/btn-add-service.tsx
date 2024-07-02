"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import FormService from "./form-service";
import { useState } from "react";
import { CirclePlus } from "lucide-react";

export default function ButtonAddService() {
  const [open, setOpen] = useState(false);

  const closeSheet = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <CirclePlus size={18} />
          Add a new service
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[550px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Add a new service</SheetTitle>
          <SheetDescription>Provide details of the service</SheetDescription>
        </SheetHeader>
        <FormService closeForm={closeSheet} />
      </SheetContent>
    </Sheet>
  );
}
