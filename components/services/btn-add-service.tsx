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

export default function ButtonAddService() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add a new service</Button>
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[500px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Add a new service</SheetTitle>
          <SheetDescription>Provide details of the service</SheetDescription>
        </SheetHeader>
        <FormService />
      </SheetContent>
    </Sheet>
  );
}
