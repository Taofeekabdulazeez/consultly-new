import CustomSelect from "@/components/CustomSelect";
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countryOptions } from "@/static_data/data";

export default function Page() {
  return (
    <div className="">
      <div className="bg-white grid gap-6 mb:gap-8 p-6 mb-10">
        <div>
          <h3 className="text-lg text-stone-900 font-medium mb-2">
            Billing information
          </h3>
          <p className="text-sm text-stone-600">
            Billing address, VAT ID, used to generate invoices
          </p>
        </div>
        <div>
          <Label htmlFor="city">Company name</Label>
          <Input type="text" value={`Taofeek Abdulazeez`} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="adressLine1">Address line 1</Label>
            <Input type="text" value={``} placeholder="Address line 1" />
          </div>
          <div>
            <Label htmlFor="adressLine1">Address line 2</Label>
            <Input type="text" value={``} placeholder="Address line 2" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <Label htmlFor="state">State</Label>
            <Input type="text" value={``} placeholder="State" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input type="text" value={``} placeholder="City" />
          </div>
          <div>
            <Label htmlFor="postalCode">Zip/Postal code</Label>
            <Input type="text" value={``} placeholder="Zip/Postal code" />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <CustomSelect options={countryOptions} />
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Update</Button>
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
          <Button variant="outline">Change password</Button>
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
          <Button variant="destructive">Delete account</Button>
        </div>
      </div>
    </div>
  );
}
