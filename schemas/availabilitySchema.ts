import { z } from "zod";

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

export function transformAvailability(
  availability: AvailabilityApi
): Availability {
  const transformed: Availability = {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  };

  for (const [day, timeRanges] of Object.entries(availability)) {
    transformed[day as keyof Availability] = timeRanges.map(
      (timeRange: string) => {
        const [startTime, endTime] = timeRange.split("-");
        return { startTime, endTime };
      }
    );
  }

  return transformed;
}

export function reverseTransformAvailability(
  availability: Availability
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
      (timeRange: { startTime: string; endTime: string }) => {
        return `${timeRange.startTime}-${timeRange.endTime}`;
      }
    );
  }

  return reversed;
}
