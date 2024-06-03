import { auth } from "@/lib/auth";
import { getCurrentHour, getTodaysDate } from "@/lib/utils";
import { Heading } from "./ui/Heading";
import { P } from "./ui/typography";

export async function WelcomeScreen() {
  const session = await auth();

  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <Heading>
        {getCurrentHour()}, {session?.user?.name?.split(" ")[0]}👋
      </Heading>
      <P size="sm">
        It&apos;s <strong>{getTodaysDate()}</strong> today.
      </P>
      <div className="max-w-md space-y-1">
        <P size="sm">
          Do you know there are 3 ways of scheduling meetings in Consultly? Read
          about them{" "}
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
  );
}
