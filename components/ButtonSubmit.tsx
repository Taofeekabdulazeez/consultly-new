"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import ButtonSpinner from "./ui/ButtonSpinner";
import { useDidUpdateEffect } from "@/app/dashboard/earnings/useDidUpdateEffect";
import { toast } from "sonner";

type Props = {
  pendingText?: string;
  text?: string;
  showToast?: boolean;
  toastId?: string | number;
  toastPendingMessage?: string;
  toastSucessMessage?: string;
  toastErrorMessage?: string;
  showPendingToast?: boolean;
  className?: string;
};

export default function ButtonSubmit({
  className,
  text = "Save",
  pendingText = "saving",
  toastId = "1",
  showPendingToast = true,
  toastPendingMessage = "Updating..",
  toastSucessMessage = "Done!",
}: Props) {
  const { pending } = useFormStatus();

  useDidUpdateEffect(() => {
    pending
      ? showPendingToast && toast.loading(toastPendingMessage, { id: toastId })
      : toast.success(toastSucessMessage, { id: toastId });
  }, [pending]);

  return (
    <Button disabled={pending} type="submit" className={className}>
      {pending ? (
        <>
          <ButtonSpinner /> {pendingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
