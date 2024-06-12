import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdEdit } from "react-icons/md";
import FormEditService from "./FormEditService";
import { useService } from "./ServiceContext";
import FormService from "./form-service";

export default function ButtonEditService() {
  const { id, userId, availability, ...service } = useService();
  console.log(service);
  return (
    <Sheet>
      <SheetTrigger className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
        <MdEdit size={18} className="text-gray-500" /> Edit
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[500px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Edit Service</SheetTitle>
          <SheetDescription>Provide details of the service</SheetDescription>
        </SheetHeader>
        {/* <FormEditService /> */}
        <FormService id={id} data={service} />
      </SheetContent>
    </Sheet>
  );
}
