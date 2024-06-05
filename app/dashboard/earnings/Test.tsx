"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function Test() {
  const status = useFormStatus();
  const firstMount = useRef(true);

  useLayoutEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    console.log("didItmount =>", firstMount.current);

    // if (status.pending) {
    //   toast.loading("loading", { id: "1" });
    // } else {
    //   toast.success("edited", { id: "1" });
    // }
  });

  const handleClick = () => {
    // if (status.pending) {
    //   toast.loading("loading", { id: "1" });
    // } else {
    //   toast.success("edited", { id: "1" });
    // }
  };
  return (
    <Button onClick={handleClick}>{status.pending ? "loading" : "Test"}</Button>
  );
}
