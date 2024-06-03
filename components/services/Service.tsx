import ServiceActionMenu from "./ServiceActionMenu";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";

type Props = {
  id: string;
  title?: string;
  description?: string;
  price?: number;
};

export default function Service({ id, title, description, price }: Props) {
  return (
    <div className="px-6 py-4 border border-gray-200 grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
      <div>
        <Heading type="h6">{title}</Heading>
        <P size="sm">{description}</P>
      </div>
      <div className="flex flex-col">
        <P size="sm">{price ? price : "Free"}</P>
        <span className="text-gray-600 text-sm">/ 30m</span>
      </div>
      <div>
        <ServiceActionMenu serviceId={id} />
      </div>
    </div>
  );
}
