import Image from "next/image";
import Logo from "@/components/common/logo";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { P } from "@/components/ui/typography";
import googleSVG from "@/public/google.svg";
import microsoftSVG from "@/public/microsoft.svg";
// import { signInAction } from "@/lib/actions";

export const metadata = {
  title: "Sign up",
};

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* <form >
        <div className="mb-3">
          <Logo />
        </div>
        <div className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md">
          <div className="mb-6 text-center">
            <Heading type="h4">{`Let's get started`}</Heading>
            <P size="sm">Sign-up to with Consultly for free </P>
          </div>
          <div className="grid gap-4 mb-6">
            <Button variant="outline">
              <Image src={googleSVG} alt="google icon" /> Sign up with Google
            </Button>
            <Button variant="outline">
              {" "}
              <Image src={microsoftSVG} alt="google icon" /> Sign up with
              Microsoft
            </Button>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] mb-6 items-center gap-3">
            <span className="h-[1px] bg-gray-500"></span>
            <span className="text-sm text-gray-700">or</span>
            <span className="h-[1px] bg-gray-500"></span>
          </div>
          <div className="grid gap-4">
            <div>
              <Input type="email" placeholder="Email address" />
            </div>
            <Button>Get started</Button>
          </div>
        </div>
      </form> */}
    </div>
  );
}
