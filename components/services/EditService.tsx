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

export default function EditService() {
  return (
    <Sheet>
      <SheetTrigger className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
        <MdEdit size={18} className="text-gray-500" /> Edit
      </SheetTrigger>
      <SheetContent className="min-w-full sm:min-w-[500px]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-lg">Add a new service</SheetTitle>
          <SheetDescription>Provide details of the service</SheetDescription>
        </SheetHeader>
        <FormEditService />
      </SheetContent>
    </Sheet>
  );
}
