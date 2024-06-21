import CustomSelect from "@/components/common/CustomSelect";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { getAvalaibilty, getUserServices, setAvailabilty } from "@/lib/actions";
import SelectService from "../services/select-service";
import ButtonSubmit from "../common/button-submit";
import { getCurrentDateFormatted } from "@/lib/utils";
import InputTime from "../common/input-time";
import InputDate from "../common/input-date";

const today = getCurrentDateFormatted();

export default async function FormAvailability() {
  const services = await getUserServices();
  const availability = await getAvalaibilty("2");
  console.log(availability);

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
          <InputDate name="startDate" min={today} defaultValue={today} />
        </div>

        <div>
          <Label>To</Label>
          <InputDate name="endDate" showDefaultValue={false} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div>
          <Label>From</Label>
          <InputTime name="startTime" />
        </div>

        <div>
          <Label>To</Label>
          <InputTime name="endTime" />
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
