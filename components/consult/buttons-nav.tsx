"use client";

import { Button } from "../ui/button";
import { useConsult } from "./ConsultContext";

export default function ButtonsNav() {
  const { dispatch } = useConsult();
  return (
    <div className="flex justify-between">
      <Button onClick={() => dispatch({ type: "prev" })} variant="outline">
        Back
      </Button>
      <Button onClick={() => dispatch({ type: "next" })}>Next</Button>
    </div>
  );
}
