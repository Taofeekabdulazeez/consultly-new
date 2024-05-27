export default function Logo() {
  return (
    <div className="flex flex-col mx-auto w-fit">
      <span className="text-3xl font-extrabold text-primary">Consultly</span>
      <div className="flex ml-4">
        <span className="rounded-full inline-block h-1.5 w-1.5 bg-red-500"></span>
        <span className="rounded-full inline-block  h-1.5 w-1.5 bg-yellow-500"></span>
        <span className="rounded-full inline-block  h-1.5 w-1.5 bg-green-500"></span>
      </div>
    </div>
  );
}
