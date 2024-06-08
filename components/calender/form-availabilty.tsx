import CustomSelect from "@/components/CustomSelect";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { getUserServices, setAvailabilty } from "@/lib/actions";
import SelectService from "../services/select-service";
import ButtonSubmit from "../ButtonSubmit";
import { StartDatePicker } from "./start-date-picker";
import { EndDatePicker } from "./end-date-picker";

export default async function FormAvailability() {
  const services = await getUserServices();

  const serviceOptions = services.map((service) => {
    return { id: service.id, value: service.title };
  });

  return (
    <form action={setAvailabilty} className="grid gap-6">
      <div>
        <Label>Type of service</Label>
        <SelectService options={serviceOptions} />
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
          <StartDatePicker label="start date" />
        </div>

        <div>
          <Label>To</Label>
          <EndDatePicker label="end date" />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <ButtonSubmit
          text="Set availability"
          pendingText="setting"
          toastPendingMessage="Setting your availabilty"
          toastSucessMessage="Availability successfully updated!"
        />
      </div>
    </form>
  );
}
