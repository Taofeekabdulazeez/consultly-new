"use client";

import { updateService } from "@/lib/actions";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import ButtonSubmit from "../ButtonSubmit";
import { useService } from "./ServiceContext";

export default function FormEditService() {
  const { price, title, description, id, duration } = useService();

  return (
    <form action={updateService.bind(null, id)} className="grid gap-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          defaultValue={title}
          name="title"
          type="text"
          placeholder="IT consultation"
        />
      </div>
      <div>
        <Label htmlFor="description">Decription</Label>
        <Textarea
          defaultValue={description}
          name="description"
          placeholder="E.g, Hourly IT consultaion, furing which we will discuss your duetary preferences and goals to achive to create a menu perfectly suited to your needs"
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input defaultValue={price} name="price" type="number" placeholder="" />
        <div className="flex gap-2 items-center mt-2 mb-3">
          <Checkbox id="terms" />
          <span className="text-sm text-gray-700">
            This type of service is free
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            <Info className="text-gray-700" size={18} />
            <span className="text-sm text-gray-700">
              Want to create paid meeting?
            </span>
          </p>
          <a
            className="inline-block underline font-medium text-primary text-sm"
            href="#"
          >
            Verify with stripe
          </a>
        </div>
      </div>

      <div>
        <Label htmlFor="duration">Duration</Label>
        <Input
          defaultValue={duration}
          name="duration"
          type="number"
          placeholder="Duration in minutes"
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="reset">
          Cancel
        </Button>
        <ButtonSubmit text="Edit" pendingText="Editing" />
      </div>
    </form>
  );
}
