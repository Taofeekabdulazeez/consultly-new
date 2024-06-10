"use client";
import ButtonSubmit from "@/components/ButtonSubmit";
import { insertData } from "@/lib/actions";
import { useForm } from "react-hook-form";

type Data = {
  firstName: string;
  lastName?: string;
  seatNumber: number;
  date: string;
  time: string;
};

type Props = {
  data: Data;
};

export default function TestForm({ data }: Props) {
  const { register, handleSubmit, formState } = useForm<Data>({
    defaultValues: data,
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: Data) => {
    const { firstName, seatNumber, date, time } = data;
    console.log(data);

    await insertData({ firstName, seatNumber, date, time });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div>
          <label>firstName: </label>
          <input
            type="text"
            {...register("firstName", {
              required: { value: true, message: "Please input your firstName" },
            })}
          />
        </div>
        <div>
          <label>LastName: </label>
          <input
            type="text"
            {...register("lastName", {
              required: { value: true, message: "Please input your lastName" },
            })}
          />
          {errors.lastName && (
            <span className="text-red-800">{errors.lastName.message}</span>
          )}
        </div>
        <div>
          <label>seat number: </label>
          <input type="number" {...register("seatNumber", {})} />
        </div>
        <div>
          <label>Time: </label>
          <input type="time" {...register("time", {})} />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="Date"
            {...register("date", {
              value: "2024-06-10",
              required: {
                value: true,
                message: "select a time",
              },
              validate: (date: string) => {
                const x = new Date(date);
                const y = new Date("2024-06-10");
                if (+x === +y) return true;
                else return "error!";
              },
            })}
          />
          {errors?.date && (
            <span className="text-red-800">{errors.date.message}</span>
          )}
        </div>
      </div>
      <ButtonSubmit
        isPending={isSubmitting && Object.keys(errors).length === 0}
      />
    </form>
  );
}
