import { Button } from "./ui/button";

type Props = {
  onClick: () => void;
  children?: string;
  isActive: boolean;
};

export default function ButtonFilter({ onClick, children, isActive }: Props) {
  return (
    <Button
      onClick={onClick}
      size="xs"
      className="hover:bg-primary hover:text-gray-100 dark:hover:text-white capitalize"
      variant={isActive ? "default" : "outline"}
    >
      {children}
    </Button>
  );
}
