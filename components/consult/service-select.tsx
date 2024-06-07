"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConsultState, useConsultUser } from "./ConsultContext";
import { Label } from "../ui/label";

export default function ServiceSelect() {
  const { selectedService, handleSelectService } = useConsultState();
  const { services } = useConsultUser();

  return (
    <div>
      <Label>Please select a service</Label>
      <Select onValueChange={handleSelectService}>
        <SelectTrigger className={`w-full`}>
          <SelectValue placeholder={selectedService.title}></SelectValue>
        </SelectTrigger>
        <SelectContent>
          {services.map((service: any) => (
            <SelectItem key={service.id} value={service.title}>
              {service.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
