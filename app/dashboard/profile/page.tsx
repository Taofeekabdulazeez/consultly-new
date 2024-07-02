import { RiExternalLinkLine } from "react-icons/ri";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/common/CustomSelect";
import { countryOptions } from "@/static_data/data";
import { P } from "@/components/ui/typography";
// import { getCurrentUser, updateProfile } from "@/lib/actions";
import ButtonCopy from "@/components/common/button-copy";
import Link from "next/link";
import ButtonSubmit from "@/components/common/button-submit";
import ProfilePhoto from "@/components/profile/profile-photo";
import { getCurrentUser, updateProfile } from "@/lib/actions";

export const metadata = {
  title: "My Profile",
};

export default async function Page() {
  const user = await getCurrentUser();
  const {
    id,
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
    image_url,
  } = user;

  return (
    <div className="bg-gray-50 p-6 rounded-md">
      <span className="text-lg font-medium text-gray-600 inline-block mb-4">
        Account Details
      </span>

      <h2 className="text-[24px] font-semibold mb-4">Profile</h2>
      <ProfilePhoto image={image_url} />
      <P size="sm" className="mb-10 font-normal">
        Fill in the fields below to share your profile publicly via a link on
        your social media or website. You can preview your profile by clicking
        the {`"View Public Profile" button`}. Remember to click the {`"Save"`}
        button after filling in the fields or changing the data.
      </P>
      <Label htmlFor="username">Username</Label>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] mb-10">
        <div className="grid grid-cols-[auto_1fr] border rounded-md">
          <Input disabled type="text" value={`consultly.com/consult/`} />
          <Input value={id} type="text" disabled />
          <Input
            defaultValue={username}
            name="username"
            type="text"
            className="hidden"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ButtonCopy textToCopy={`localhost:3000/consult/${id}`}>
            Copy Link
          </ButtonCopy>
          <Link
            className="inline-flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-2 rounded py-2 justify-center md:py-0 md:justify-start"
            href={`/consult/${id}`}
            target="_blank"
          >
            <RiExternalLinkLine />
            <P size="sm">View public profile</P>
          </Link>
        </div>
      </div>
      <form action={updateProfile} className="grid gap-6 md:w-[60%]">
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
            <input name="country" type="text" hidden value={country} />
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
          <Input name="language" type="text" defaultValue={language} />
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
            text="Save changes"
            pendingText="Saving"
            toastPendingMessage="Updating your Profile"
            toastSucessMessage="Profile successfully updated!"
          />
        </div>
      </form>
    </div>
  );
}
