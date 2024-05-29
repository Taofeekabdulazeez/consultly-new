import { Info, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { P } from "./ui/typography";
import { Heading } from "./ui/Heading";

export default function StripeBanner() {
  return (
    <div className="bg-gray-50 rounded-md grid grid-cols-[auto_1fr] p-4 gap-2 mb-6 overflow-hidden relative before:content-[''] before:block before:w-[4px] before:bg-primary before:absolute before:left-0 before:top-0 before:h-full">
      <div>
        <Info className="fill-primary stroke-gray-50" />
      </div>
      <div>
        <Heading type="h5" className="text-primary">
          Stripe
        </Heading>
        <P size="sm" className="mb-3 leading-[1.4] md:max-w-[80ch]">
          To charge your customers you need to verify your identity with Stripe
          and provide payment details.
        </P>
        <Button variant="outline">
          Create account and verify with Stripe{" "}
          <MoveRight className="text-gray-700" size={16} />
        </Button>
      </div>
    </div>
  );
}
