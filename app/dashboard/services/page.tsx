import Fetching from "@/components/Fetching";
import ServiceList from "@/components/ServiceList";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { P } from "@/components/ui/typography";
import { getUserServices } from "@/lib/actions";
import { Info } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
  title: "Services",
};

export default async function Page() {
  const services = await getUserServices();
  console.log(services);
  return (
    <div className="bg-gray-50 rounded p-6">
      <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-48 mb-10">
        <div>
          <Heading>My Services</Heading>
          <P size="sm">
            {`
          Add the types of consultations you provide, e.g., "English lesson" or
          "Medical consultation". It will enable your clients to book a
          consultation through your Public Profile. You can arrange the order in
          which they appear on your Public Profile by dragging and dropping them
          in the desired order.`}
          </P>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Add a new service</Button>
            </SheetTrigger>
            <SheetContent className="min-w-full sm:min-w-[500px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-lg">Add a new service</SheetTitle>
                <SheetDescription>
                  Provide details of the service
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-6">
                <div>
                  <Label>Title</Label>
                  <Input type="text" placeholder="IT consultation" />
                </div>
                <div>
                  <Label>Decription</Label>
                  <Textarea placeholder="E.g, Hourly IT consultaion, furing which we will discuss your duetary preferences and goals to achive to create a menu perfectly suited to your needs" />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input type="number" placeholder="" />
                  <div className="flex gap-2 items-center mt-2 mb-3">
                    <Checkbox id="terms" />
                    <span className="text-sm text-gray-700">
                      This type of service is free
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="flex items-center gap-1">
                      <Info className="text-gray-700" size={18} />
                      <span className="text-sm text-gray-700">
                        Want to create paid meeting?
                      </span>
                    </p>
                    <a
                      className="inline-block underline font-medium text-primary text-sm"
                      href="#"
                    >
                      Verify with stripe
                    </a>
                  </div>
                </div>

                <div>
                  <Label>Duration</Label>
                  <Input type="number" placeholder="Duration in minutes" />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Suspense fallback={<Fetching name="services" />}>
        <ServiceList />
      </Suspense>
    </div>
  );
}
