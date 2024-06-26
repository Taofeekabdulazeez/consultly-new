"use client";

import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <form action="">
        <div className="w-[90%] max-w-[500px] mx-auto bg-gray-50 p-6 shadow-sm rounded-md">
          <Heading className="mb-3">Verify your email address</Heading>
          <P size="sm">
            To start using Consultly, confirm your email address with the email
            we sent to
          </P>
          <Suspense
            fallback={
              <div className="h-screen grid place-items-center">
                <div>Verifying email address...</div>
              </div>
            }
          >
            <Email />
          </Suspense>
          <div className="grid my-6">
            <Button type="button">Resend email</Button>
          </div>
          <P size="sm" className="flex items-center gap-2">
            Need help?{" "}
            <Link href="/confirm" className="text-primary">
              Contact customer support
            </Link>
          </P>
        </div>
      </form>
    </div>
  );
}

const Email = () => {
  const serachParams = useSearchParams();
  const email = serachParams.get("email");
  return (
    <Heading type="h6" className="my-4">
      {email}
    </Heading>
  );
};
