"use client";

import { useConsult } from "./ConsultContext";

export default function Steps() {
  const { step: currentStep } = useConsult();
  return (
    <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
      <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
        {["Service", "Availability", "Details", "Confirmation"].map(
          (step, index) => (
            <li key={step} className="flex items-center gap-2 bg-white p-2">
              <span
                className={`size-6 rounded-full text-center text-[10px]/6 font-bold ${
                  currentStep === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {index + 1}
              </span>

              <span
                className={`hidden sm:block ${
                  currentStep === index + 1 ? "text-gray-800" : ""
                }`}
              >
                {step}
              </span>
            </li>
          )
        )}
      </ol>
    </div>
  );
}
