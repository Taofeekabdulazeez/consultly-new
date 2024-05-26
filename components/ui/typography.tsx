import clsx from "clsx";

type Paragraph_Props = {
  children?: any;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
};

export function P({ children, className, size }: Paragraph_Props) {
  return (
    <p
      className={clsx("text-gray-700 text-base leading-7", className, {
        "text-sm font-medium leading-6": size === "sm",
        "text-xs font-medium leading-5": size === "xs",
        "text-md font-medium": size === "md",
        "text-lg font-medium": size === "lg",
        "text-xl font-medium": size === "xl",
      })}
    >
      {children}
    </p>
  );
}
