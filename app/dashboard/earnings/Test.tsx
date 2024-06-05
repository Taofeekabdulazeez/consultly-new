"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function Test() {
  const status = useFormStatus();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    if (status.pending) {
      toast("loading");
    } else {
      toast.dismiss();
      toast("success");
    }
  }, [status]);

  console.log(status);

  const handleClick = () => {
    // if (status.pending) toast.loading("Loading");
  };
  return <Button>{status.pending ? "loading" : "Test"}</Button>;
}
