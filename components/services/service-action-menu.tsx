"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ConfirmDelete from "../common/ConfirmDelete";
import { deleteService } from "@/lib/actions";
import ButtonEditService from "./btn-edit-service";
import ButtonViewService from "./btn-view-service";

type Props = {
  serviceId: string;
};

export default function ServiceActionMenu({ serviceId }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none text-gray-500 hover:text-gray-900 p-2">
        <HiOutlineDotsVertical size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1 justify-start">
        <ButtonViewService />
        <ButtonEditService />
        <ConfirmDelete
          resourceId={serviceId}
          onDeleteResource={deleteService}
          resourceName="service"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
