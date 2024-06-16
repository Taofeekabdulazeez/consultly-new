import { z } from "zod";

export const AvailabiltySchema = z.object({
  startDate: z.string().date(),
  endDate: z.string().date(),
});

export type AvailabiltySchemaType = z.infer<typeof AvailabiltySchema>;
