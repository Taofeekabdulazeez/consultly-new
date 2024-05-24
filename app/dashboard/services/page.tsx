"use client";
import { DropdownMenuRadioGroupDemo } from "@/components/ActionMenu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white rounded p-6">
      <div className="grid grid-cols-[1fr_auto] gap-48 mb-10">
        <div>
          <h3 className="text-lg mb-3 font-medium">My Services</h3>
          <p className="text-sm text-slate-600 leading-6">
            {`
          Add the types of consultations you provide, e.g., "English lesson" or
          "Medical consultation". It will enable your clients to book a
          consultation through your Public Profile. You can arrange the order in
          which they appear on your Public Profile by dragging and dropping them
          in the desired order.`}
          </p>
        </div>
        <div>
          <Sheet>
            <SheetTrigger>
              <Button>Add a new service</Button>
            </SheetTrigger>
            <SheetContent className="min-w-full sm:min-w-[500px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-lg">Add a new service</SheetTitle>
                <SheetDescription>
                  Provide details of the service
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-6">
                <div>
                  <Label>Title</Label>
                  <Input type="text" placeholder="IT consultation" />
                </div>
                <div>
                  <Label>Decription</Label>
                  <Textarea placeholder="E.g, Hourly IT consultaion, furing which we will discuss your duetary preferences and goals to achive to create a menu perfectly suited to your needs" />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input type="number" placeholder="" />
                  <div className="flex gap-2 items-center mt-2 mb-3">
                    <Checkbox id="terms" />
                    <span className="text-sm text-gray-700">
                      This type of service is free
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="flex items-center gap-1">
                      <Info className="text-gray-700" size={18} />
                      <span className="text-sm text-gray-700">
                        Want to create paid meeting?
                      </span>
                    </p>
                    <a
                      className="inline-block underline font-medium text-primary text-sm"
                      href="#"
                    >
                      Verify with stripe
                    </a>
                  </div>
                </div>

                <div>
                  <Label>Duration</Label>
                  <Input type="number" placeholder="Duration in minutes" />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">
              Mentorship
            </h4>
            <p className="text-xs text-slate-600">
              This has to do with providing a guidance fro aspiring young
              individuals
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
          <div>
            <DropdownMenuRadioGroupDemo />
          </div>
        </div>
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">
              Mentorship
            </h4>
            <p className="text-xs text-slate-600">
              This has to do with providing a guidance fro aspiring young
              individuals
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
          <div>
            <DropdownMenuRadioGroupDemo />
          </div>
        </div>{" "}
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">
              Mentorship
            </h4>
            <p className="text-xs text-slate-600">
              This has to do with providing a guidance fro aspiring young
              individuals
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
          <div>
            <DropdownMenuRadioGroupDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
