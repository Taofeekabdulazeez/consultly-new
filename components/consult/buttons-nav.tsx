"use client";

import { Button } from "../ui/button";
import { useConsultState } from "./ConsultContext";

export default function ButtonsNav() {
  const { dispatch } = useConsultState();
  return (
    <div className="flex justify-between">
      <Button onClick={() => dispatch({ type: "prev" })} variant="outline">
        Back
      </Button>
      <Button onClick={() => dispatch({ type: "next" })}>Next</Button>
    </div>
  );
}
