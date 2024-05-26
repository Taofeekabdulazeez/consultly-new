import { GoCopy } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/CustomSelect";
import { countryOptions } from "@/static_data/data";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";

export const metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div className="bg-gray-50 p-6 rounded-md">
      <Heading>Profile</Heading>
      <P size="sm" className="mb-10">
        Fill in the fields below to share your profile publicly via a link on
        your social media or website. You can preview your profile by clicking
        the {`"View Public Profile" button`}. Remember to click the {`"Save"`}
        button after filling in the fields or changing the data.
      </P>

      <Label htmlFor="username">Username</Label>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] mb-10">
        <div className="grid grid-cols-[auto_1fr] border rounded-md">
          <Input disabled type="text" value={`consultly.com/consult/`} />
          <Input disabled type="text" value={`taofeek-abdulazeez`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">
            <GoCopy />
            <P size="sm">Copy Link</P>
          </Button>
          <Button variant="outline">
            <RiExternalLinkLine />
            <P size="sm">View profile</P>
          </Button>
        </div>
      </div>

      <Label htmlFor="avatar">Avatar</Label>
      <div className="flex items-center gap-3 mb-10">
        <div className="h-16 w-16 rounded-full border flex items-center justify-center">
          <Heading type="h4">{`TA`}</Heading>
        </div>
        <label className="focus:ring-primary relative inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <P size="sm">Change avatar</P>
          <input
            className="hidden"
            accept="image/png, image/jpeg"
            type="file"
          />
        </label>
      </div>

      <div className="grid gap-6">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input disabled type="text" value={`Taofeek`} />
        </div>

        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input disabled type="text" value={`Abdulazeez`} />
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <P size="xs" className="mt-0 m-0">
              0 / 80
            </P>
            <Label htmlFor="profession">Your profession</Label>
          </div>

          <Input value={""} />
        </div>

        {/* country */}
        <div className="grid md:grid-cols-2 gap-6 ">
          <div>
            <Label htmlFor="country">Country</Label>
            <CustomSelect options={countryOptions} />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input type="text" value={``} />
          </div>
        </div>

        <div>
          <Label htmlFor="city" className="text-sm font-medium mb-1 block">
            Language
          </Label>
          {/* <CustomSelect /> */}
        </div>

        <div>
          <Label htmlFor="city">Website</Label>
          <input type="text" value={``} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="city">Linkedin</Label>
            <Input type="text" value={``} />
          </div>
          <div>
            <Label htmlFor="city">Twitter</Label>
            <Input type="text" value={``} />
          </div>
          <div>
            <Label htmlFor="city">Facebook</Label>
            <Input type="text" value={``} />
          </div>
          <div>
            <Label htmlFor="city">Instagram</Label>
            <Input type="text" value={``} />
          </div>
        </div>
        <div>
          <Label htmlFor="city">About</Label>
          <Textarea
            rows={6}
            value={``}
            placeholder="A few words about you and your professional experience?"
          ></Textarea>
        </div>
        <div className="flex justify-end">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
