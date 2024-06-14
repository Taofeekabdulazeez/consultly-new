import profilePlaceholder from "@/public/profile-placeholder.png";
import Image from "next/image";
import { P } from "../ui/typography";

export default function ProfilePhoto() {
  return (
    <div className="flex gap-10 items-center mb-10">
      <div className="relative h-[6rem] aspect-square">
        <Image
          fill
          className="absolute rounded-full"
          src={profilePlaceholder}
          alt="profile picture"
        />
      </div>
      <div>
        <label className="focus:ring-primary relative inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <P size="sm">Change avatar</P>
          <input
            className="hidden"
            accept="image/png, image/jpeg"
            type="file"
          />
        </label>
        <P>JPG, GIF or PNG. Max size of 5MB.</P>
      </div>
    </div>
  );
}
