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
import { ChevronDown, Settings } from "lucide-react";

type Props = {
  serviceId: string;
};

export default function ServiceActionMenu({ serviceId }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none text-gray-700 hover:text-gray-900 p-2 flex items-center gap-0">
        <Settings size={20} />
        <ChevronDown size={14} />
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
