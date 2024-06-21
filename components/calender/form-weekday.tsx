import { useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { Minus, Plus, X } from "lucide-react";
import ButtonCopy from "../common/button-copy";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

type Props = {
  control: any;
  day: string;
  register: any;
};

export default function FormWeekDay({ control, day, register }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: day,
  });

  return (
    <div className="grid grid-cols-[4rem_1fr_auto_auto_auto] gap-4">
      <div className="mt-3 flex gap-2">
        <Checkbox />
        <span className="-mt-0.5 uppercase text-sm text-gray-700 font-medium">
          {day}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-[1fr_auto_1fr_auto] gap-2 items-center"
          >
            <Input
              type="time"
              key={field.id}
              {...register(`${day}.${index}.startTime` as const)}
            />
            <Minus size={18} />
            <Input
              type="time"
              key={field.id}
              {...register(`${day}.${index}.endTime` as const)}
            />
            <Button size="xs" variant="outline" onClick={() => remove(index)}>
              <X size={16} />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          size="xs"
          onClick={() => append({ startTime: "", endTime: "" })}
        >
          <Plus size={16} />
        </Button>
        <ButtonCopy size="xs"></ButtonCopy>
      </div>
    </div>
  );
}
