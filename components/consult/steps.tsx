"use client";

import { useConsultState } from "./ConsultContext";

export default function Steps() {
  const { step: currentStep } = useConsultState();
  return (
    <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-[1px] after:-translate-y-1/2 after:rounded-lg after:bg-gray-200">
      <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-600">
        {["Service", "Availability", "Details", "Confirmation"].map(
          (step, index) => (
            <li key={step} className="flex items-center bg-gray-50 gap-2 p-2">
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
