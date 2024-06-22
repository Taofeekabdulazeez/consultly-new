import { string, z } from "zod";

export const AvailabiltySchema = z.object({
  mon: z.array(z.string()),
  tue: z.array(z.string()),
  wed: z.array(z.string()),
  thu: z.array(z.string()),
  fri: z.array(z.string()),
  sat: z.array(z.string()),
  sun: z.array(z.string()),
});

export type AvailabiltySchemaType = z.infer<typeof AvailabiltySchema>;

type TimeRangeString = string; // Example: "07:00-13:00"
type TimeRangeObject = { startTime: string; endTime: string };

export type AvailabilityApi = {
  sun: TimeRangeString[];
  mon: TimeRangeString[];
  tue: TimeRangeString[];
  wed: TimeRangeString[];
  thu: TimeRangeString[];
  fri: TimeRangeString[];
  sat: TimeRangeString[];
};

type AvailabilityOutput = {
  sun: TimeRangeObject[];
  mon: TimeRangeObject[];
  tue: TimeRangeObject[];
  wed: TimeRangeObject[];
  thu: TimeRangeObject[];
  fri: TimeRangeObject[];
  sat: TimeRangeObject[];
};

export function transformAvailability(
  availability: AvailabilityApi
): AvailabilityOutput {
  const transformed: AvailabilityOutput = {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  };

  for (const [day, timeRanges] of Object.entries(availability)) {
    transformed[day as keyof AvailabilityOutput] = timeRanges.map(
      (timeRange: string) => {
        const [startTime, endTime] = timeRange.split("-");
        return { startTime, endTime };
      }
    );
  }

  return transformed;
}

export function reverseTransformAvailability(
  availability: AvailabilityOutput
): AvailabilityApi {
  const reversed: AvailabilityApi = {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  };

  for (const [day, timeRanges] of Object.entries(availability)) {
    reversed[day as keyof AvailabilityApi] = timeRanges.map(
      (timeRange: TimeRangeObject) => {
        return `${timeRange.startTime}-${timeRange.endTime}`;
      }
    );
  }

  return reversed;
}
