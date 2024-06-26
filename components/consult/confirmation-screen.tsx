import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { P } from "../ui/typography";
import { useConsultUser } from "./ConsultContext";
import ExpertPhoto from "./expert-photo";

export default function ConfirmationScreen() {
  const user = useConsultUser();
  return (
    <div className="flex flex-col gap-4 items-center">
      <ExpertPhoto />
      <div>
        <P>
          Meeting with
          <strong>
            {" "}
            {user.firstName} {user.lastName}
          </strong>
        </P>
      </div>
      <P size="sm">
        Meeting will be scheduled for{" "}
        <strong>July 1st 2024, at 10:30am GMT-1</strong>
      </P>
      <P size="sm" className="max-w-[60ch] text-center">
        Use the button below to book a meeting. After booking, we will send you
        an email with the meeting link
      </P>
      <div className="flex items-center gap-2">
        <Checkbox />
        <P size="sm">
          I accept the{" "}
          <a className="underline" href="#">
            Terms of service
          </a>{" "}
          and{" "}
          <a className="underline" href="#">
            Privacy
          </a>
        </P>
      </div>
      <Button>Book a Meeting</Button>
    </div>
  );
}
