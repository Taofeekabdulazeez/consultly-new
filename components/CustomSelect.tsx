import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  options: string[];
  className?: string;
};

export default function CustomSelect({ options, className }: Props) {
  return (
    <Select>
      <SelectTrigger className={`w-full ${className}`}>
        <SelectValue placeholder={options[0]} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
