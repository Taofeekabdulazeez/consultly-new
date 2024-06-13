import { z } from "zod";

export const ServiceSchema = z.object({
  // id: z.string().optional(),
  title: z.string().trim().min(1, "Please provide a Title"),
  startDate: z.string().date(),
  endDate: z.string().date(),
  description: z.string().trim().min(1, "Please provide a description"),
  duration: z.coerce
    .number()
    .positive({ message: `Duration can't be negative` }),
  price: z.coerce.number().positive({ message: "Enter a valid price" }),
});

export type ServiceSchemaType = z.infer<typeof ServiceSchema>;
