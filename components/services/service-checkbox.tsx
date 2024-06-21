"use client";

import { useServices } from "./services-context";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";

export default function ServiceCheckbox({ serviceId }: { serviceId: string }) {
  const { dispatch } = useServices();

  return (
    <Checkbox
      onCheckedChange={() => dispatch({ type: "select", payload: serviceId })}
    />
  );
}
