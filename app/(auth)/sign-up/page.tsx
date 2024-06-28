import { signup } from "./actions";
import Logo from "@/components/common/logo";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/input";
import { P } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import ButtonSubmit from "@/components/common/button-submit";
import Link from "next/link";
// import googleSVG from "@/public/google.svg";
// import microsoftSVG from "@/public/microsoft.svg";
// import { signInAction } from "@/lib/actions";

export const metadata = {
  title: "Sign up",
};

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <form action={signup}>
        <div className="mb-3">
          <Logo />
        </div>
        <div className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md">
          <div className="mb-6 text-center">
            <Heading type="h3">Sign up</Heading>
            <P size="sm">Please provide your details</P>
          </div>
          <div className="grid gap-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="mt-6 grid">
              <ButtonSubmit
                text="Sign up"
                showToast={false}
                pendingText=""
                showPendingToast={false}
              />
              <div className="text-center mt-2">
                <P size="sm" className="flex items-center gap-2 justify-center">
                  Already have an account?
                  <Link href="/login" className="text-primary">
                    Login
                  </Link>
                </P>
              </div>
            </div>

            {/* <button formAction={signup}>Sign up</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
