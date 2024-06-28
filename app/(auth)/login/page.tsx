import { Heading } from "@/components/ui/Heading";
import { login } from "./actions";
import { P } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ButtonSubmit from "@/components/common/button-submit";
import Logo from "@/components/common/logo";
import Link from "next/link";

// import { signInAction } from "@/lib/actions";
// import Image from "next/image";
// import Logo from "@/components/common/logo";
// import { Heading } from "@/components/ui/Heading";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { P } from "@/components/ui/typography";
// import googleSVG from "@/public/google.svg";
// import microsoftSVG from "@/public/microsoft.svg";

// export const metadata = {
//   title: "Login",
// };

// export default function Page() {
//   return (
//     <div className="bg-gray-100 min-h-screen pt-20">
//       <form action={signInAction}>
//         <div className="mb-3">
//           <Logo />
//         </div>
//         <div className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md">
//           <div className="mb-6 text-center">
//             <Heading type="h3">{`Welcome!`}</Heading>
//             <P size="sm">Login to your account</P>
//           </div>
//           <div className="grid gap-4 mb-6">
//             <Button variant="outline">
//               <Image src={googleSVG} alt="google icon" /> Login with Google
//             </Button>
//             <Button variant="outline">
//               <Image src={microsoftSVG} alt="google icon" /> Login with
//               Microsoft
//             </Button>
//           </div>
//           <div className="grid grid-cols-[1fr_auto_1fr] mb-6 items-center gap-3">
//             <span className="h-[1px] bg-gray-500"></span>
//             <span className="text-sm text-gray-700">or</span>
//             <span className="h-[1px] bg-gray-500"></span>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               {/* <Label>Please provide your Email address</Label> */}
//               <Input type="email" placeholder="Email address" />
//             </div>
//             <Button>Login</Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

export default function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <form action={login}>
        <div className="mb-3">
          <Logo />
        </div>
        <div className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md">
          <div className="mb-6 text-center">
            <Heading type="h3">{`Welcome!`}</Heading>
            <P size="sm">Login to your account</P>
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
                text="Log in"
                showToast={false}
                pendingText=""
                showPendingToast={false}
              />
              <div className="text-center mt-2">
                <P size="sm">
                  {`Doesn't have an account?`}{" "}
                  <Link href="/sign-up" className="text-primary">
                    Sign up
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
