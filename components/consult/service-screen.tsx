import ServicePreview from "./service-preview";
import ServiceSelect from "./service-select";
import ExpertPhoto from "./expert-photo";
import { ExpertDetails } from "./expert-details";

export default function ServiceScreen() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <ExpertPhoto />
      <div className="grid gap-6">
        <ExpertDetails />
        <ServiceSelect />
        <ServicePreview />
      </div>
    </div>
  );
}
