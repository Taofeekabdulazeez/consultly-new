"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none text-gray-500 hover:text-gray-900 p-2">
          <HiOutlineDotsVertical size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <div className="flex flex-col gap-1 justify-start">
          <button className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
            <IoMdEye size={18} className="text-gray-500" />
            <span className="text-sm">View</span>
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
            <MdEdit size={18} className="text-gray-500" />
            <span className="text-sm">Edit</span>
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
            <MdDelete size={18} className="text-gray-500" />
            <span className="text-sm">Delete</span>
          </button>
        </div>

        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
