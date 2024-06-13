import { generateTimeSlots } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import { P } from "../ui/typography";
import { useConsultState, useConsultUser } from "./ConsultContext";
import TimeSlots from "./time-slots";
import { Heading } from "../ui/Heading";
import BookingCalender from "./booking-calender";
import InputDate from "../common/input-date";
import InputTime from "../common/input-time";

export default function AvailabiltyScreen() {
  const user = useConsultUser();
  const { selectedService } = useConsultState();
  const [availability] = selectedService.availability;
  const duration = selectedService.duration;
  const startTime = availability.split("-")[0];
  const endTime = availability.split("-")[0];

  console.log(startTime, endTime);

  return (
    <div>
      <Heading className="mb-2">Select an appointment Date and Time</Heading>
      <div className="mb-4">
        <P size="sm">
          Below you can find a list of available time slot by{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>{" "}
          for the <strong>{selectedService.title}</strong> service . Click on
          the time slot and select a meeting time to proceed with booking.
        </P>
      </div>
      {/* <div className="grid grid-cols-[auto_1fr] gap-6">
        <BookingCalender />
        <div className="flex flex-col gap-4 mt-3">
          {availability.map((slot: any) => (
            <TimeSlots key={slot} slot={slot} duration={duration} />
          ))}
        </div>
      </div> */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label>Select a Date</Label>
          <InputDate
            min={selectedService.startDate}
            max={selectedService.endDate}
          />
        </div>
        <div>
          <Label>Select a Time</Label>
          <InputTime min={startTime} max={endTime} />
        </div>
      </div>
    </div>
  );
}
