"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type Props = {
  options: string[];
  className?: string;
};

export default function CustomSelect({ options, className }: Props) {
  const [value, setValue] = useState(options[0]);
  console.log(value);
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className={`w-full ${className}`}>
        <SelectValue placeholder={options[0]} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
