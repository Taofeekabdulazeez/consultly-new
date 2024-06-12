import { addServ, updateServ } from "@/lib/actions";
import { ServiceSchema, ServiceSchemaType } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type args = {
  data?: ServiceSchemaType;
  serviceId?: string;
  // updateFn: (data: ServiceSchemaType, id: string) => Promise<void>;
  // insertFn: (data: ServiceSchemaType) => Promise<void>;
};

export function useServiceForm({
  data = {} as ServiceSchemaType,
  serviceId,
}: args) {
  const isEditSession = Boolean(Object.entries(data).length);

  const form = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: isEditSession ? data : undefined,
  });

  const { control, handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (data: ServiceSchemaType) => {
    toast.loading("Adding service", { id: "1" });
    console.log(data);

    if (isEditSession) await updateServ(data, String(serviceId));
    else await addServ(data);

    toast.success("Successfully added!", { id: "1" });
  };

  const onError = (error: any) => {
    console.log("error => ", error);
  };

  const submitHandler = handleSubmit(onSubmit, onError);

  return { isSubmitting, control, submitHandler, form };
}
