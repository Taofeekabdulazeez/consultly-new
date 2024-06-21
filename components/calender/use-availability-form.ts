import {
  AvailabiltySchema,
  AvailabiltySchemaType,
} from "@/schemas/availabilitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type args = {
  onSubmitted?: () => void;
  data: AvailabiltySchemaType;
};

export function useAvailabilityForm({ data, onSubmitted }: args) {
  const form = useForm<AvailabiltySchemaType>({
    defaultValues: data,
    resolver: zodResolver(AvailabiltySchema),
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: AvailabiltySchemaType) => {
    console.log(data);

    onSubmitted?.();
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const submitHandler = form.handleSubmit(onSubmit, onError);

  return {
    form,
    submitHandler,
    isSubmitting,
  };
}
