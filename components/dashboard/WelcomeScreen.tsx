import { auth } from "@/lib/auth";
import { getCurrentHour, getTodaysDate } from "@/lib/utils";
import Image from "next/image";

import expert from "@/public/expert.png";
import { Heading } from "../ui/Heading";
import { P } from "../ui/typography";

export async function WelcomeScreen() {
  const session = await auth();

  return (
    <div className="bg-gray-50 p-4 rounded-md md:grid md:grid-cols-[1fr_0.8fr] md:items-center gap-4 md:gap-1">
      <div>
        <Heading>
          {getCurrentHour()}, {session?.user?.name?.split(" ")[0]}👋
        </Heading>
        <P size="sm">
          It&apos;s <strong className="text-primary">{getTodaysDate()}</strong>{" "}
          today.
        </P>
        <div className="max-w-md space-y-1">
          <P size="sm">
            Do you know there are 3 ways of scheduling meetings in Consultly?
            Read about them{" "}
            <a
              className="underline text-primary font-medium"
              href="#"
              target="_blank"
            >
              here.
            </a>
          </P>
        </div>
      </div>
      <div className="relative">
        <Image src={expert} alt="expert illustration" className="dark:hidden" />
      </div>
    </div>
  );
}
