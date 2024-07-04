import { useConsultState, useConsultUser } from "./ConsultContext";

import { BookingCalendar } from "../booking/booking-calender";
import {
  CalendarDate,
  // DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { useState } from "react";
import { DateValue } from "@react-aria/calendar";
import { convertTo24Hour, generateTimeSlots } from "@/lib/utils";
import { BookingTime } from "../booking/bookingTime";
import { LeftPanel } from "../booking/left-panel";

export default function AvailabiltyScreen() {
  const user = useConsultUser();
  const { selectedService, setSelectedDate } = useConsultState();
  const [date, setDate] = useState(today(getLocalTimeZone()));
  const handleChangeDate = (date: DateValue) => {
    setDate(date as unknown as CalendarDate);
    // console.log(date.toString());
    setSelectedDate(date.toString());
    // console.log(new CalendarDate(2024, 10, 8));
  };

  const handleChangeAvailableTime = (time: string) => {
    // console.log(time);
    if (time.includes("m")) console.log(convertTo24Hour(time));
    else console.log(time);
  };

  return (
    <div className="grid grid-cols-[200px_1fr_200px] gap-3">
      <LeftPanel />
      <BookingCalendar
        minValue={today(getLocalTimeZone()) as unknown as DateValue}
        defaultValue={today(getLocalTimeZone()) as unknown as DateValue}
        value={date as unknown as DateValue}
        onChange={handleChangeDate}
      />
      <BookingTime
        startTime="8:00"
        endTime="17:00"
        duration={30}
        handleChangeAvailableTime={handleChangeAvailableTime}
      />
    </div>
  );
}
