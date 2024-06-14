import {
  AvailabiltySchema,
  AvailabiltySchemaType,
} from "@/schemas/availabilitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type args = {
  onSubmitted?: () => void;
};

export function useAvailabilityForm({ onSubmitted }: args) {
  const form = useForm<AvailabiltySchemaType>({
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
