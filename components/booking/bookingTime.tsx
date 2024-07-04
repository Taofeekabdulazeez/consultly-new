import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { DateValue } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { generateTimeSlots } from "@/lib/utils";

export function BookingTime({
  date,
  timeZone,
  weeksInMonth,
  handleChangeAvailableTime,
  startTime,
  endTime,
  duration,
}: {
  date?: DateValue;
  timeZone?: string;
  weeksInMonth?: number;
  handleChangeAvailableTime: (time: string) => void;
  startTime: string;
  endTime: string;
  duration: number;
}) {
  // const { locale } = useLocale();
  // const [dayNumber, dayName] = date
  //   .toDate(timeZone)
  //   .toLocaleDateString(locale, {
  //     weekday: "short",
  //     day: "numeric",
  //   })
  //   .split(" ");
  const availableTimes = generateTimeSlots(startTime, endTime, duration);
  console.log(availableTimes);
  return (
    <Tabs defaultValue="12" className="flex flex-col gap-4 border-l pl-6">
      <div className="flex justify-center">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="12">12h</TabsTrigger>
          <TabsTrigger value="24">24h</TabsTrigger>
        </TabsList>
      </div>
      {["12", "24"].map((time) => (
        <TabsContent key={time} value={time}>
          <ScrollArea
            type="always"
            className="h-full"
            style={{ maxHeight: "320px" }}
            // style={{
            //   maxHeight: weeksInMonth > 5 ? "380px" : "320px",
            // }}
          >
            <div className="grid gap-2 pr-3">
              {availableTimes.map((availableTime) => (
                <Button
                  variant="outline"
                  className="hover:bg-blue-50 dark:hover:bg-muted"
                  onClick={() =>
                    handleChangeAvailableTime(
                      availableTime[time as "12" | "24"]
                    )
                  }
                  key={availableTime[time as "12" | "24"]}
                >
                  {availableTime[time as "12" | "24"]}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  );
}
