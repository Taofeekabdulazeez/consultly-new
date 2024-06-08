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
import { getCurrentUser, updateProfile } from "@/lib/actions";
import ButtonSubmit from "@/components/ButtonSubmit";

export const metadata = {
  title: "Profile",
};

export default async function Page() {
  const {
    email,
    username,
    firstName,
    lastName,
    language,
    country,
    city,
    profession,
    website_url,
    linkedIn_url,
    about,
    twitter_url,
    facebook_url,
    instagram_url,
  } = await getCurrentUser();

  return (
    <form action={updateProfile} className="bg-gray-50 p-6 rounded-md">
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
          <Input value={username} type="text" disabled />
          <Input
            defaultValue={username}
            value={username}
            name="username"
            type="text"
            className="hidden"
          />
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
          <Heading type="h4">
            {firstName && firstName.slice(0, 2).toUpperCase()}
          </Heading>
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
          <Input name="firstName" type="text" defaultValue={firstName} />
        </div>

        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input name="lastName" type="text" defaultValue={lastName} />
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <P size="xs" className="mt-0 m-0">
              0 / 80
            </P>
            <Label htmlFor="profession">Your profession</Label>
          </div>

          <Input name="profession" type="text" defaultValue={profession} />
        </div>

        {/* country */}
        <div className="grid md:grid-cols-2 gap-6 ">
          <div>
            <Label htmlFor="country">Country</Label>
            <input name="country" type="text" hidden />
            <CustomSelect options={countryOptions} />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input name="city" type="text" defaultValue={city} />
          </div>
        </div>

        <div>
          <Label htmlFor="city" className="text-sm font-medium mb-1 block">
            Language
          </Label>
          <input name="language" type="text" hidden defaultValue={language} />
          {/* <CustomSelect /> */}
        </div>

        <div>
          <Label htmlFor="city">Website</Label>
          <Input name="website_url" type="text" defaultValue={website_url} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="city">Linkedin</Label>
            <Input
              name="linkedIn_url"
              type="text"
              defaultValue={linkedIn_url}
            />
          </div>
          <div>
            <Label htmlFor="twitter">Twitter</Label>
            <Input name="twitter_url" type="text" defaultValue={twitter_url} />
          </div>
          <div>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              name="facebook_url"
              type="text"
              defaultValue={facebook_url}
            />
          </div>
          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              name="instagram_url"
              type="text"
              defaultValue={instagram_url}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="about">About</Label>
          <Textarea
            name="about"
            rows={6}
            defaultValue={about}
            placeholder="A few words about you and your professional experience?"
          ></Textarea>
        </div>
        <div className="flex justify-end">
          <ButtonSubmit
            text="Save"
            pendingText="Saving"
            toastPendingMessage="Updating your Profile"
            toastSucessMessage="Profile successfully updated!"
          />
        </div>
      </div>
    </form>
  );
}
