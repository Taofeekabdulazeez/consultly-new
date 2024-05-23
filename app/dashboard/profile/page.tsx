import { GoCopy } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import { countryOptions } from "@/static_data/data";

export default function Page() {
  return (
    <div className="bg-white p-2">
      <h4 className="text-lg text-stone-900 mb-2 font-semibold">Profile</h4>
      <p className="text-slate-600 text-sm mb-10">
        Fill in the fields below to share your profile publicly via a link on
        your social media or website. You can preview your profile by clicking
        the {`"View Public Profile" button`}. Remember to click the {`"Save"`}
        button after filling in the fields or changing the data.
      </p>
      <label htmlFor="username" className="text-sm font-semibold mb-2 block">
        Username
      </label>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] mb-10">
        <div className="grid grid-cols-[auto_1fr] border rounded-md">
          <div className="p-3 border-r flex items-center">
            <span className="text-slate-400 text-sm">consultly.com/s/</span>
          </div>
          <input
            className="text-slate-600 text-sm p-3 block w-full bg-white"
            disabled
            type="text"
            value={`taofeek-abdulazeez`}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center rounded-md gap-2 py-3 md:px-6 border">
            <GoCopy />
            <span className="font-medium text-slate-900 text-sm">
              Copy link
            </span>
          </button>
          <button className="flex items-center justify-center rounded-md gap-2 py-3 md:px-6 border">
            <RiExternalLinkLine />
            <span className="font-medium text-slate-900 text-sm">
              View profile
            </span>
          </button>
        </div>
      </div>

      <label htmlFor="avatar" className="text-sm font-semibold mb-2 block">
        Avatar
      </label>

      <div className="flex items-center gap-3 mb-10">
        <div className="h-16 w-16 rounded-full border flex items-center justify-center">
          <span className="text-xl text-stone-900 font-semibold">{`TA`}</span>
        </div>
        <label className="focus:ring-primary relative inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <span className="">Change avatar</span>
          <input
            className="hidden"
            accept="image/png, image/jpeg"
            type="file"
          />
        </label>
      </div>

      <div className="grid gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="text-sm font-medium mb-1 block text-slate-500"
          >
            First name
          </label>
          <input
            className="text-slate-500 border text-sm p-2 rounded-md block w-full bg-white"
            disabled
            type="text"
            value={`Taofeek`}
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="text-sm font-medium mb-1 block text-slate-500"
          >
            Last name
          </label>
          <input
            className="text-slate-500 border text-sm p-2 rounded-md block w-full bg-white"
            disabled
            type="text"
            value={`Abdulazeez`}
          />
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="profession" className="text-sm font-medium ">
              Your profession
            </label>
            <span className="text-xs text-stone-500">0 / 80</span>
          </div>
          <input
            className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
            type="text"
            value={``}
          />
        </div>

        {/* country */}
        <div className="grid md:grid-cols-2 gap-6 ">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              className="focus:border-blue-600 focus:ring-blue-600 mt-1 block w-full rounded-md border  border-gray-300 bg-white px-3 py-2 focus:outline-none sm:text-sm"
            >
              {countryOptions.map((countryOpt) => (
                <option key={countryOpt.value} value={countryOpt.value}>
                  {countryOpt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city" className="text-sm font-medium mb-1 block">
              City
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
