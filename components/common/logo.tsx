import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col mx-auto w-fit">
      <span className="text-2xl md:text-3xl  font-extrabold text-primary">
        Consultify
      </span>
      <div className="flex ml-4">
        <span className="rounded-full inline-block h-1.5 w-1.5 bg-red-500"></span>
        <span className="rounded-full inline-block  h-1.5 w-1.5 bg-yellow-500"></span>
        <span className="rounded-full inline-block  h-1.5 w-1.5 bg-green-500"></span>
      </div>
    </Link>
  );
}
