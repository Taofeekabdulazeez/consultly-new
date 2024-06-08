import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { P } from "../ui/typography";
import { useConsultState } from "./ConsultContext";

export default function DetailsScreen() {
  const { selectedService } = useConsultState();
  return (
    <div>
      <div className="mb-6">
        <P size="sm">
          You selected a booking for <strong>{selectedService.title}</strong> by{" "}
          <strong>Taofeek Abdulazeez</strong> at{" "}
          <strong>10:00am on 27 June 2024.</strong>
          Please provide your details in the form below to proceed with booking
        </P>
      </div>
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label>First name</Label>
            <Input type="text" placeholder="First name" />
          </div>
          <div>
            <Label>LastName</Label>
            <Input type="text" placeholder="Last name" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label>Phone</Label>
            <Input type="tel" placeholder="Phone number" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
        </div>

        <div>
          <Label>Notes</Label>
          <Textarea rows={6} placeholder="Say something..."></Textarea>
        </div>
      </div>
    </div>
  );
}
