"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import ButtonSpinner from "../ui/ButtonSpinner";
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
  showSuccessToast?: boolean;
  className?: string;
  isPending?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  onCompletion?: () => void;
};

export default function ButtonSubmit({
  className,
  text = "Save",
  pendingText = "saving",
  toastId = "1",
  showPendingToast = true,
  showSuccessToast = true,
  toastPendingMessage = "Loading..",
  toastSucessMessage = "Done!",
  isPending = false,
  disabled = false,
}: Props) {
  const { pending: loading } = useFormStatus();

  const pending = isPending || loading;

  useDidUpdateEffect(() => {
    pending
      ? showPendingToast && toast.loading(toastPendingMessage, { id: toastId })
      : showSuccessToast && toast.success(toastSucessMessage, { id: toastId });
  }, [pending]);

  return (
    <Button disabled={pending || disabled} type="submit" className={className}>
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
