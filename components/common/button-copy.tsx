"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { ReactNode } from "react";

type Props = {
  textToCopy?: string;
  children?: ReactNode;
};

export default function ButtonCopy({ textToCopy = "", children }: Props) {
  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
        toast.success("Copied to clipboard!");
      }}
    >
      {children}
    </Button>
  );
}
