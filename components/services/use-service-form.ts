import { addService, updateService } from "@/lib/actions";
import { ServiceSchema, ServiceSchemaType } from "@/schemas/serviceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { title } from "process";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type args = {
  data?: ServiceSchemaType;
  serviceId?: string;
  onSubmitted?: () => void;
};

export function useServiceForm({
  data = {} as ServiceSchemaType,
  serviceId,
  onSubmitted,
}: args) {
  const isEditSession = Boolean(Object.entries(data).length);

  const editData = {
    title: data.title,
    description: data.description,
    duration: data.duration,
    price: data.price,
  };

  const form = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: isEditSession ? editData : undefined,
  });

  const { control, handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (data: ServiceSchemaType) => {
    isEditSession
      ? toast.loading("Updating service", { id: "1" })
      : toast.loading("Adding service", { id: "1" });
    console.log(data);

    if (isEditSession) await updateService(data, String(serviceId));
    else await addService(data);

    isEditSession
      ? toast.success("Service successfully edited!", { id: "1" })
      : toast.success("Service successfully added!", { id: "1" });

    onSubmitted?.();
    console.log("executed!");
  };

  const onError = (error: any) => {
    console.log("error => ", error);
  };

  const submitHandler = handleSubmit(onSubmit, onError);

  return { isSubmitting, control, submitHandler, form };
}
