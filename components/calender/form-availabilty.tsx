import { getCurrentDateFormatted } from "@/lib/utils";
import { Button } from "../ui/button";
import FormWeekDay from "./form-weekday";
import TimeSlot from "../consult/time-slots";
import { useForm } from "react-hook-form";

// const availability = {
//   mon: ["07:00-13:00"],
//   tue: ["07:00-13:00", "15:00-19:00"],
//   wed: ["07:00-13:00"],
//   thu: ["07:00-13:00"],
//   fri: ["07:00-13:00"],
//   sat: ["07:00-13:00"],
//   sun: ["07:00-13:00"],
// };

// const days = new Map()
//   .set(0, "mon")
//   .set(1, "tue")
//   .set(2, "wed")
//   .set(3, "thu")
//   .set(4, "fri")
//   .set(5, "sat")
//   .set(6, "sun");

type weekdays = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

const days: weekdays[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const availability = {
  mon: [{ startTime: "07:00", endTime: "13:00" }],
  tue: [
    { startTime: "07:00", endTime: "13:00" },
    { startTime: "15:00", endTime: "19:00" },
  ],
  wed: [{ startTime: "07:00", endTime: "13:00" }],
  thu: [{ startTime: "07:00", endTime: "13:00" }],
  fri: [{ startTime: "07:00", endTime: "13:00" }],
  sat: [{ startTime: "07:00", endTime: "13:00" }],
  sun: [{ startTime: "07:00", endTime: "13:00" }],
};

const today = getCurrentDateFormatted();

type Props = {
  data?: typeof availability;
};

export default function FormAvailability({ data = availability }: Props) {
  const form = useForm<typeof availability>({ defaultValues: data });
  const { control, handleSubmit, register } = form;

  const onSubmit = async (data: typeof availability) => {
    console.log(data);
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
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button>submit</Button>
      </div>
    </form>
  );
}
