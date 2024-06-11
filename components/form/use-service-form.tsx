import { ServiceSchema, ServiceSchemaType } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { randomUUID } from "crypto";
import { useForm } from "react-hook-form";

export function useSeviceForm() {
  const form = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      price: undefined,
      duration: undefined,
    },
  });

  const { control, handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  return { control, handleSubmit, isSubmitting };
}
