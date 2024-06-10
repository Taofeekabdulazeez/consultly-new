"use client";
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
  const { errors } = formState;

  const onSubmit = (data: Data) => {
    console.log(data);
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
          <label>Date: </label>
          {/* <input type="time" {...register("time", {})} /> */}
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
      <button className="bg-gray-800 text-white px-3 py-1.5 rounded">
        Submit
      </button>
    </form>
  );
}
