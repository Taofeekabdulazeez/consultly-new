"use client";
import {
  reverseTransformAvailability,
  transformAvailability,
} from "@/schemas/availabilitySchema";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";
import { AvailablilityProvider } from "./availability-context";
import ButtonSetAvailabilty from "./btn-set-avalaibilty";
import { convert24HourTo12Hour } from "@/lib/utils";

type Props = {
  service: Service;
  availability: AvailabilityApi;
};

const daysMap = new Map()
  .set("sun", "Sunday")
  .set("mon", "Monday")
  .set("tue", "Tuesday")
  .set("wed", "Wednessday")
  .set("thu", "Thursday")
  .set("fri", "Friday")
  .set("sat", "Saturday");

const days: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[] = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
];

export function Service({ service, availability }: Props) {
  const { id, title, description, duration } = service;

  return (
    <AvailablilityProvider availaibility={availability} serviceId={id}>
      <div className="px-6 py-4 border flex-col md:flex-row gap-3 md:justify-between md:items-center rounded-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <Heading type="h5">{title}</Heading>
          <ButtonSetAvailabilty />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {days.map((day) => (
            <ul className="" key={day}>
              <P size="sm" className="text-gray-800">
                {daysMap.get(day)}
              </P>
              {availability[day].length !== 0 ? (
                availability[day].map((a, i) => {
                  console.log(day, a);
                  return (
                    <li className="italic text-sm text-gray-600" key={i}>
                      {a
                        ? a
                            .split("-")
                            .map((a) => [convert24HourTo12Hour(a)])
                            .join(" - ")
                        : "Unavailable"}
                    </li>
                  );
                })
              ) : (
                <li className="italic text-sm text-gray-600">Unavailable</li>
              )}
            </ul>
          ))}
        </div>
      </div>
    </AvailablilityProvider>
  );
}
