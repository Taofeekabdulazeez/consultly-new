import ButtonCopy from "@/components/button-copy";

export const metadata = {
  title: "Earnings",
};

export default function Page() {
  return (
    <div>
      <ButtonCopy />
      <span className="load"></span>
    </div>
  );
}
