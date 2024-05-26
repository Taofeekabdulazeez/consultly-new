import { Heading } from "@/components/ui/Heading";
import SpinnerPage from "@/components/ui/spinner";
import { P } from "@/components/ui/typography";

export const metadata = {
  title: "Earnings",
};

export default function Page() {
  return (
    <div className="grid gap-24">
      <div>
        <Heading type="h1">My name is Abdulazeez Taofeek Taiwo</Heading>
        <Heading type="h2">My name is Abdulazeez Taofeek Taiwo</Heading>
        <Heading type="h3">My name is Abdulazeez Taofeek Taiwo</Heading>
        <Heading type="h4">My name is Abdulazeez Taofeek Taiwo</Heading>
        <Heading type="h5">My name is Abdulazeez Taofeek Taiwo</Heading>
        <Heading type="h6">My name is Abdulazeez Taofeek Taiwo</Heading>
      </div>
      <div>
        <P size="xl">I attended ikorodu junior high school</P>
        <P size="lg">I attended ikorodu junior high school</P>
        <P size="md">I attended ikorodu junior high school</P>
        <P size="sm">I attended ikorodu junior high school</P>
        <P size="xs">I attended ikorodu junior high school</P>
      </div>
      <div>
        <SpinnerPage />
      </div>
    </div>
  );
}
