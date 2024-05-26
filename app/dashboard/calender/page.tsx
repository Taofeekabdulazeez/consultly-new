import { CustomDatePicker } from "@/components/CustomDataPicker";
import CustomSelect from "@/components/CustomSelect";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { P } from "@/components/ui/typography";

export const metadata = {
  title: "Calender",
};

export default function Page() {
  return (
    <div className="bg-gray-50 rounded p-6">
      <div className="grid grid-cols-[1fr_auto] gap-48 mb-10">
        <div>
          <Heading>My availability</Heading>
          <P size="sm">
            {` Set your availability dates and times by clicking the "Set your availability" button on the right. Below you can see the set dates and times broken down by type of service.`}
          </P>
        </div>
        <div>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Set your availability</Button>
              </SheetTrigger>
              <SheetContent className="min-w-full sm:min-w-[500px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-lg">
                    Set your availability
                  </SheetTitle>
                  <SheetDescription>
                    Select the type of service and dates you want to set
                    availability for, e.g., July 10 - July 15. Then, add the
                    intervals you want to work on particular days, e.g.,
                    10.00-15.00. Consultly will suggest meeting times depending
                    on the duration of the specific type of service.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-6">
                  <div>
                    <Label>Type of service</Label>
                    <CustomSelect options={["IT consultancy", "Mentorship"]} />
                  </div>

                  <div>
                    <Label>Time zone</Label>
                    <CustomSelect
                      options={[
                        "(GMT+01:00) Lagos",
                        "(GMT+01:00) Texas",
                        "(GMT+02:00) Paris",
                      ]}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-14">
                    <div>
                      <Label>From</Label>
                      <CustomDatePicker label="start date" />
                    </div>

                    <div>
                      <Label>To</Label>
                      <CustomDatePicker label="end date" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Suggest meeting times</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <Heading type="h6">Mentorship</Heading>
            <P size="sm">
              This has to do with providing a guidance for aspiring young
              individuals
            </P>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
        </div>
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <Heading type="h6">IT Consultancy</Heading>
            <P size="sm">
              This has to do with anything around CTO-as-a-Service, IT
              consultancy service
            </P>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
