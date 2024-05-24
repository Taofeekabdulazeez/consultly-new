import Table from "@/components/Table";
import { countryOptions } from "@/static_data/data";

export default function Page() {
  return (
    <div className="">
      <div className="bg-white grid gap-6 p-6 mb-10">
        <div>
          <h3 className="text-lg text-stone-900 font-medium mb-2">
            Billing information
          </h3>
          <p className="text-sm text-stone-600">
            Billing address, VAT ID, used to generate invoices
          </p>
        </div>
        <div>
          <label htmlFor="city" className="text-sm font-medium mb-1 block">
            Company name
          </label>
          <input
            className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
            type="text"
            value={`Taofeek Abdulazeez`}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="adressLine1"
              className="text-sm font-medium mb-1 block"
            >
              Address line 1
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
              placeholder="Address line 1"
            />
          </div>
          <div>
            <label
              htmlFor="adressLine1"
              className="text-sm font-medium mb-1 block"
            >
              Address line 2
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
              placeholder="Address line 2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label htmlFor="state" className="text-sm font-medium mb-1 block">
              State
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
              placeholder="State"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-sm font-medium mb-1 block">
              City
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
              placeholder="City"
            />
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="text-sm font-medium mb-1 block"
            >
              Zip/Postal code
            </label>
            <input
              className="border focus:outline-blue-600 text-sm p-2 rounded-md block w-full bg-white"
              type="text"
              value={``}
              placeholder="Zip/Postal code"
            />
          </div>
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
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-md text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium">
            Update
          </button>
        </div>
      </div>
      <div className="bg-white grid gap-6 p-6 mb-10">
        <h3 className="text-lg text-stone-900 font-medium mb-2">
          Billing history
        </h3>
        <Table />
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-3 md:gap-48 mb-10 bg-white p-6 rounded-md">
        <div>
          <h3 className="text-lg mb-2 font-medium">Change password</h3>
          <p className="text-sm text-slate-600 leading-6">
            {`We'll send you an email with a link to change your password`}
          </p>
        </div>
        <div>
          <button className="text-md text-stone-800 border-2 px-4 py-2 rounded-md font-medium">
            Change password
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-3 md:gap-48 mb-10 bg-white p-6 rounded-md">
        <div>
          <h3 className="text-lg mb-2 font-medium">Delete Account</h3>
          <p className="text-sm text-slate-600 leading-6">
            {`Upon removal, your account becomes unavailable, subscriptions are canceled, and your data is deleted. You can delete your account only when you don't have any scheduled meetings, and your Stripe account balance is zero`}
          </p>
        </div>
        <div>
          <button className="text-md text-red-600 border-2 border-red-600 px-4 py-2 rounded-md font-medium">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
