"use client";

import FormInput from "../form/form-input";
import { ServiceSchemaType } from "@/schemas/serviceSchema";
import FormTextarea from "../form/form-textarea";
import { Checkbox } from "../ui/checkbox";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useServiceForm } from "./use-service-form";

type Props = {
  data?: ServiceSchemaType;
  id?: string;
  closeForm?: () => void;
};

export default function FormService({ data, id, closeForm }: Props) {
  const { form, control, isSubmitting, submitHandler } = useServiceForm({
    data,
    serviceId: id,
    onSubmitted: closeForm,
  });

  return (
    <Form {...form}>
      <form onSubmit={submitHandler} className="grid gap-6">
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

        {/* <div className="grid grid-cols-2 gap-4">
          <FormDatePicker
            name="startDate"
            control={control}
            label="Start date"
          />
          <FormDatePicker name="endDate" control={control} label="End date" />
        </div> */}

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
