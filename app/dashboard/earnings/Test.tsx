"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { useDidUpdateEffect } from "./useDidUpdateEffect";

export default function Test() {
  const status = useFormStatus();

  useDidUpdateEffect(() => {
    if (status.pending) {
      toast.loading("loading", { id: "1" });
    } else {
      toast.success("edited", { id: "1" });
    }
  }, [status.pending]);

  return <Button>{status.pending ? "loading" : "Test"}</Button>;
}
