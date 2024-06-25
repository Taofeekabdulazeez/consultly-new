import { getCurrentDateFormatted } from "@/lib/utils";
import { Button } from "../ui/button";
import FormWeekDay from "./form-weekday";
import { useForm } from "react-hook-form";
import { useAvailability } from "./availability-context";
import { reverseTransformAvailability } from "@/schemas/availabilitySchema";
import { updateAvailability } from "@/lib/actions";
import { toast } from "sonner";

type weekdays = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

const days: weekdays[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

type Props = {
  closeForm?: () => void;
};

export default function FormAvailability({ closeForm }: Props) {
  const { availaibility, serviceId } = useAvailability();

  const form = useForm<Availability>({ defaultValues: availaibility });
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = form;

  const onSubmit = async (formData: Availability) => {
    toast.loading("Updating availability...", { id: serviceId });
    const data = reverseTransformAvailability(formData);
    console.log(data);
    await updateAvailability(serviceId, data);

    toast.success("Availability successfully pdated!", { id: serviceId });
    closeForm?.();
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col mb-4 gap-4">
        {days.map((day) => (
          <FormWeekDay
            key={day}
            day={day}
            control={control}
            register={register}
            value={getValues(day)}
            reset={reset}
          />
        ))}
      </div>
      <div className="flex justify-end mr-3">
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </form>
  );
}
