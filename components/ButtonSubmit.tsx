"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import ButtonSpinner from "./ui/ButtonSpinner";

type Props = {
  pendingText?: string;
  text?: string;
};

export default function ButtonSubmit({
  text = "Save",
  pendingText = "saving",
}: Props) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
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
