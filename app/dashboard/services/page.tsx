"use client";
import { DropdownMenuRadioGroupDemo } from "@/components/ActionMenu";
import Menus from "@/components/Menus";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

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
          <Button>Add a new service</Button>
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
