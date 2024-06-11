"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ConfirmDelete from "../ConfirmDelete";
import { deleteService } from "@/lib/actions";
import EditService from "./btn-edit-service";
import ViewService from "./ViewService";
import { useService } from "./ServiceContext";

type Props = {
  serviceId: string;
};

export default function ServiceActionMenu({ serviceId }: Props) {
  const service = useService();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none text-gray-500 hover:text-gray-900 p-2">
        <HiOutlineDotsVertical size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 justify-start">
        <ViewService />
        <EditService />
        <ConfirmDelete
          resourceId={serviceId}
          onDeleteResource={deleteService}
          resourceName="service"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
