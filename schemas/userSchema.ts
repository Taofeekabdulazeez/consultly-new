import { z } from "zod";

export const UserSchema = z.object({
  firstName: z
    .string({ required_error: "Please Provide your First Name" })
    .trim(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Please Provide your Last Name" })
    .trim(),
  seatNumber: z.coerce
    .number()
    .positive({ message: "Enter a valid seat number" }),
  date: z.string({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
});

// User.parse({ username: "Ludwig" });

export const ServiceSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().trim().min(1, "Please provide a Title"),
  description: z.string().trim().min(1, "Please provide a description"),
  duration: z.coerce
    .number()
    .positive({ message: `Duration can't be negative` }),
  price: z.coerce.number().positive({ message: "Enter a valid price" }),
});

export type ServiceSchemaType = z.infer<typeof ServiceSchema>;
