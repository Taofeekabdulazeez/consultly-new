"use client";

import { useForm } from "react-hook-form";
import { LeftPanel } from "../booking/left-panel";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { P } from "../ui/typography";
import { useConsultState } from "./ConsultContext";
import FormInput from "../form/form-input";
import FormTextarea from "../form/form-textarea";

export default function DetailsScreen() {
  const { selectedService } = useConsultState();
  const form = useForm();
  const { control } = form;

  return (
    <div>
      <div className="grid grid-cols-[0.4fr_1fr] gap-6">
        <LeftPanel />
        <div>
          <form>
            <Form {...form}>
              <div className="grid gap-4">
                <FormInput
                  name="fullName"
                  control={control}
                  label="Your full name *"
                />
                <FormInput
                  name="email"
                  control={control}
                  label="Email address *"
                  type="email"
                />
                <FormInput
                  name="phoneNumber"
                  control={control}
                  label="Phone number *"
                  type="phone"
                />
                <FormTextarea
                  name="notes"
                  control={control}
                  label="Notes (optional)"
                  placeholder="Say something..."
                />
              </div>
            </Form>
          </form>
        </div>
      </div>
    </div>
  );
}
