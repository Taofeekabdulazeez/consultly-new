"use client";
import ButtonSubmit from "@/components/ButtonSubmit";
import CustomSelect from "@/components/CustomSelect";
import { Button } from "@/components/ui/button";
import { insertData } from "@/lib/actions";
import { UserSchema } from "@/schemas/userSchema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/form/form-input";

type Props = {
  data: z.infer<typeof UserSchema>;
};

export default function TestForm({ data }: Props) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: data,
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: z.infer<typeof UserSchema>) => {
    toast.loading("saving", { id: "1" });
    const { firstName, seatNumber, date, time } = data;
    console.log(data);

    await insertData({ firstName, seatNumber, date, time });

    toast.success("saved", { id: "1" });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 max-w-[600px]">
          <FormInput name="firstName" control={control} label="First Name" />
          <FormInput name="lastName" control={control} label="Last Name" />
          <FormInput
            type="number"
            name="seatNumber"
            control={control}
            label="Seat Number"
          />
          <FormInput type="time" name="time" control={control} />

          <FormInput type="date" name="date" control={control} />

          <div></div>
        </div>
        <Button>{isSubmitting ? "saving" : "save"}</Button>
      </form>
    </Form>
  );
}
