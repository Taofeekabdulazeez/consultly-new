"use client";

import { useServices } from "./services-context";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";

export default function ServiceCheckbox({ serviceId }: { serviceId: string }) {
  const { toggleServiceSelection, onSelectMode } = useServices();

  const handleServiceToggle = () => {
    toggleServiceSelection(serviceId);

    console.log(onSelectMode);

    onSelectMode
      ? toast("Event has been created", {
          id: "2",
          position: "bottom-right",
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      : toast.dismiss();
  };

  return <Checkbox onCheckedChange={handleServiceToggle} />;
}
