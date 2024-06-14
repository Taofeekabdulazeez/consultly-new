import { z } from "zod";

export const AvailabiltySchema = z.object({});

export type AvailabiltySchemaType = z.infer<typeof AvailabiltySchema>;
