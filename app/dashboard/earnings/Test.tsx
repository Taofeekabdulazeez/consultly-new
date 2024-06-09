"use client";
import ButtonCopy from "@/components/button-copy";
import { useRef, useState } from "react";

export default function Test() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef<any>(null);

  return (
    <div>
      <div>
        {
          /* Logical shortcut for only displaying the 
          button if the copy command exists */
          document.queryCommandSupported("copy") && (
            <div>
              <button
                onClick={(e) => {
                  textAreaRef.current.select();
                  document.execCommand("copy");
                  // This is just personal preference.
                  // I prefer to not show the whole text area selected.
                  e.target.focus();
                  setCopySuccess("Copied!");
                }}
              >
                Copy
              </button>
              {copySuccess}
            </div>
          )
        }
        <form>
          <textarea ref={textAreaRef} value="Some text to copy" />
        </form>
      </div>
      <ButtonCopy />
    </div>
  );
}
