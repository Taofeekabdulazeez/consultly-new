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
