import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";
import { useConsultState } from "./ConsultContext";

export default function ServicePreview() {
  const { selectedService } = useConsultState();

  return (
    <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md overflow-hidden relative before:content-[''] before:block before:w-[4px] before:bg-primary before:absolute before:left-0 before:top-0 before:h-full">
      <div>
        <Heading type="h6">{selectedService.title}</Heading>
        <P size="sm" className="italic">
          {selectedService.description}
        </P>
      </div>
      <div className="flex flex-col">
        <P size="sm">Free</P>
        <span className="text-gray-600 text-sm">
          / {selectedService.duration}m
        </span>
      </div>
    </div>
  );
}
