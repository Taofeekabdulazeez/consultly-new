"use client";

import { useForm } from "react-hook-form";
import FormInput from "../form/form-input";
import { ServiceSchema, ServiceSchemaType } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTextarea from "../form/form-textarea";
import { Checkbox } from "../ui/checkbox";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { addServ } from "@/lib/actions";
import { randomUUID } from "crypto";

type Props = {
  data?: ServiceSchemaType;
};

export default function FormService({ data = {} as ServiceSchemaType }: Props) {
  const isEditSession = Boolean(Object.entries(data).length);
  console.log(isEditSession);

  const form = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: isEditSession
      ? data
      : {
          title: "",
          description: "",
          price: undefined,
          duration: undefined,
        },
  });

  const { control, handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (data: ServiceSchemaType) => {
    console.log(data);
    await addServ(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <FormInput
          name="title"
          placeholder="IT Consultation"
          control={control}
          label="Title"
        />
        <FormTextarea
          name="description"
          control={control}
          label="Description"
          placeholder="E.g, Hourly IT consultaion, furing which we will discuss your duetary preferences and goals to achive to create a menu perfectly suited to your needs"
        />
        <div>
          <FormInput
            name="price"
            type="number"
            control={control}
            label="Price"
          />
          <div className="flex gap-2 items-center mt-2 mb-3">
            <Checkbox id="terms" />
            <span className="text-sm text-gray-700">
              This type of service is free
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1">
              <Info className="text-gray-700" size={18} />
              <span className="text-sm text-gray-700">
                Want to create paid meeting?
              </span>
            </p>
            <a
              className="inline-block underline font-medium text-primary text-sm"
              href="#"
            >
              Verify with stripe
            </a>
          </div>
        </div>

        <FormInput
          type="number"
          name="duration"
          control={control}
          label="Duration"
          placeholder="duration in minutes"
        />

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="reset">
            Cancel
          </Button>
          <Button type="submit">{isSubmitting ? "saving" : "save"}</Button>
        </div>
      </form>
    </Form>
  );
}
