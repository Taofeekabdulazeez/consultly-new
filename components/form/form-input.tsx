import { Input } from "../ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type Props = {
  control: any;
  label?: string;
  name: string;
  description?: string;
  type?: string;
  placeholder?: string;
};

export default function FormInput({
  control,
  label = "label",
  name,
  description,
  type = "text",
  placeholder,
}: Props) {
  // const form = useFormControl();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
