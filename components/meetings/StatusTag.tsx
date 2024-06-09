import clsx from "clsx";

type Tag_Props = {
  status: "confirmed" | "paid" | "in-progress" | "pending" | string;
};

export default function StatusTag({ status }: Tag_Props) {
  return (
    <span
      className={clsx(
        "w-fit capitalize text-xs font-semibold px-3 py-1.5 rounded-3xl",
        {
          "bg-blue-300   dark:bg-blue-600": status === "confirmed",
          "bg-green-300 dark:bg-green-600": status === "paid",
          "bg-purple-300 dark:bg-purple-600": status === "in-progress",
          "bg-yellow-300 dark:bg-yellow-600 text-gray-900":
            status === "pending",
        }
      )}
    >
      {status}
    </span>
  );
}
