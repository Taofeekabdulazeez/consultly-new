// import { auth } from "@/lib/auth";
import Logo from "../common/logo";
import ButtonTheme from "../common/button-theme";
import ProfileMenu from "./ProfileMenu";
import { getCurrentUser } from "@/lib/actions";

export default async function Header() {
  // const session = await auth();
  const user = await getCurrentUser();

  return (
    <header className="z-10 p-4 flex justify-between items-center gap-3 bg-gray-50 fixed sm:static w-full">
      <div className="hidden md:block">
        <div className="hidden">
          <Logo />
        </div>
      </div>
      <div className="flex md:justify-end items-center gap-3">
        <ButtonTheme />
        <ProfileMenu name={user.email as string} />
      </div>
    </header>
  );
}
