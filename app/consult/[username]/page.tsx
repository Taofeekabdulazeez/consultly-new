import Logo from "@/components/Logo";
import AppointmentDatePicker from "@/components/ui/appointment-picker";
import { FiCalendar } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { getCurrentDateTime } from "@/lib/utils";
import StepIndicator from "@/components/ui/stepindicator";

export const metadata = {
  title: "Consult",
};

type Props = {
  params: {
    username: string;
  };
};

export default function Page({ params }: Props) {
  const { username } = params;
  const steps = [
    "Service",
    "Availability",
    "Details",
    "Payment",
    "Confirmation",
  ];
  const currentStep = 0;
  return (
    <div className="flex min-h-screen w-full flex-col overflow-auto">
      <header className="z-10 bg-white shadow-md">
        <div className="py-6 ">
          <Logo />
        </div>
      </header>
      <main className="flex-1 bg-gray-100 min-h: min-content">
        {/* Services Page */}
        <section className="mx-auto max-w-4xl sm:px-6 sm:py-6  lg:px-8">
          <div className=" flex flex-row p-5 sm:p-8 bg-white shadow sm:rounded-2xl">
            {/* website version of Profile */}
            <div className="mr-8 hidden md:block">
              <span className="relative inline-block h-24 sm:h-28 sm:w-28">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-gray-200 text-2xl font-medium text-black">
                  AI
                </div>
                {/* <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1/3 translate-x-1/3 transform items-center justify-center rounded-full  text-green-400">
                  <RiVerifiedBadgeFill className="text-xl" />
                </span> */}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex flex-row justify-between">
                <div>
                  <section className="flex flex-row items-center justify-between space-x-5 md:space-x-0">
                    {/* mobile version of the profile block */}
                    <span className="relative inline-block h-24 w-24 sm:h-28 sm:w-28 md:hidden">
                      <div className="flex h-full w-full items-center justify-center rounded-md border border-gray-200 text-2xl font-medium text-black">
                        AI
                      </div>
                      {/* <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1/3 translate-x-1/3 transform items-center justify-center rounded-full bg-white text-green-400">
                        <RiVerifiedBadgeFill className="text-xl" />
                      </span> */}
                      <div className="absolute bottom-0 left-0 right-0"></div>
                    </span>
                    <div className="flex-1 space-y-2">
                      <h1 className="text-xl font-bold  tracking-tight sm:text-2xl">
                        Asmaa Ishowo
                      </h1>
                    </div>
                  </section>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-5">
                      <FiCalendar className="text-blue-400" />
                      <p className="text-sm">{getCurrentDateTime()}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                      <IoLocationSharp className="text-blue-400" />
                      <p className="text-sm">United States</p>
                    </div>
                  </div>
                </div>
                {/* Website plan */}
                <div className="hidden md:block">
                  <p className="text-sm">Starting at</p>
                  <div className="mt-2 flex flex-row items-center justify-center space-x-1.5">
                    <h4 className="text-3xl font-bold ">PLN&nbsp;0.00</h4>
                    <p className="whitespace-nowrap text-sm ">/ 30m</p>
                  </div>
                </div>
              </div>
              {/* Mobile plan */}
              <div className="flex flex-row sm:items-center justify-between w-full border-b border-t py-4 md:hidden">
                <p className="text-base">Starting at</p>
                <div className="flex items-center">
                  <h4 className="text-2xl font-bold">PLN&nbsp;0.00</h4>
                  <span className="text-sm">/ 30m</span>
                </div>
              </div>
              <div className="border-t pb-4"></div>
              <div className="mt-5">
                <h1 className="text-center text-xl text-primary">
                  Book Appointment
                </h1>
                <div className="w-full overflow-hidden p-4">
                  <StepIndicator currentStep={currentStep} steps={steps} />
                </div>
                <h3 className="mt-5 text-md">Select your service</h3>
                <select
                  name="services"
                  id="services"
                  className="focus:border-primary focus:ring-primary block rounded-md border-gray-300 px-5 w-full bg-gray-100 text-md focus:outline-none md:py-1"
                >
                  <option value="">Consultancy</option>
                  <option value="">Training</option>
                  <option value="">Follow -Up</option>
                  <option value="">Consultancy</option>
                </select>
              </div>
              <div className="flex  justify-between align-center mt-10">
                <button
                  type="submit"
                  className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-gray-200 focus:outline-none  font-medium text-black px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-gray-500"
                >
                  <span className="inline-flex items-center">Cancel</span>
                </button>
                <button
                  type="submit"
                  className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-blue-500"
                >
                  <span className="inline-flex items-center">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* availabilty section */}
        <section>
          <div className="mx-auto max-w-4xl sm:px-6 sm:py-6 sm:px-12 lg:px-8">
            <div className=" flex flex-row p-5 sm:p-8 bg-white shadow sm:rounded-2xl">
              <div className="flex-1">
                <div className="mt-5 w-full item-center">
                  <h1 className="text-center text-xl text-primary">
                    Select Availabilty
                  </h1>
                  <div className="w-full overflow-hidden p-4">
                    <StepIndicator currentStep={currentStep} steps={steps} />
                  </div>
                </div>
                <div>
                  <AppointmentDatePicker />
                </div>
                <div className="flex  justify-between align-center mt-10">
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-gray-200 focus:outline-none  font-medium text-black px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-gray-500"
                  >
                    <span className="inline-flex items-center">Back</span>
                  </button>
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-blue-500"
                  >
                    <span className="inline-flex items-center">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* details section */}
        <section>
          <div className="mx-auto max-w-4xl sm:px-6 sm:py-6 sm:px-12 lg:px-8">
            <div className=" flex flex-row p-5 sm:p-8 bg-white shadow sm:rounded-2xl">
              <div className="flex-1">
                <div className="mt-5 w-full item-center">
                  <h1 className="text-center text-xl text-primary">
                    Enter Your Details
                  </h1>
                  <div className="w-full overflow-hidden p-4">
                    <StepIndicator currentStep={currentStep} steps={steps} />
                  </div>
                </div>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter Your Full-Name"
                      className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <div className="flex">
                        <select
                          className="block w-30 bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded-l focus:outline-none focus:shadow-outline"
                          defaultValue="+62"
                        >
                          <option>+62</option>
                          <option>+1</option>
                          <option>+44</option>
                          <option>+91</option>
                        </select>
                        <input
                          id="phone"
                          type="text"
                          placeholder="Phone number"
                          className="shadow  border rounded-l w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="notes"
                    >
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      placeholder="Say something..."
                      className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      rows={5}
                    />
                  </div>
                </form>

                <div className="flex  justify-between align-center mt-10">
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-gray-200 focus:outline-none  font-medium text-black px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-gray-500"
                  >
                    <span className="inline-flex items-center">Back</span>
                  </button>
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-blue-500"
                  >
                    <span className="inline-flex items-center">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* payment section */}
        <section>
          <div className="mx-auto max-w-4xl sm:px-6 sm:py-6 sm:px-12 lg:px-8">
            <div className=" flex flex-row p-5 sm:p-8 bg-white shadow sm:rounded-2xl">
              <div className="flex-1">
                <div className="mt-5 w-full item-center">
                  <h1 className="text-center text-xl text-primary">
                    Make Payment
                  </h1>
                  <div className="w-full overflow-hidden p-4">
                    <StepIndicator currentStep={currentStep} steps={steps} />
                  </div>
                </div>
                <div className="flex  justify-between align-center mt-10">
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-gray-200 focus:outline-none  font-medium text-black px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-gray-500"
                  >
                    <span className="inline-flex items-center">Back</span>
                  </button>
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-blue-500"
                  >
                    <span className="inline-flex items-center">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Confirmation section */}
        <section>
          <div className="mx-auto max-w-4xl sm:px-6 sm:py-6 sm:px-12 lg:px-8">
            <div className=" flex flex-row p-5 sm:p-8 bg-white shadow sm:rounded-2xl">
              <div className="flex-1">
                <div className="mt-5 w-full item-center">
                  <h1 className="text-center text-xl text-primary">
                    Booking Confirmation
                  </h1>
                  <div className="w-full overflow-hidden p-4">
                    <StepIndicator currentStep={currentStep} steps={steps} />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mb-4  mt-5 grid grid-cols-2  gap-4">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Service"
                      >
                        Guest
                      </label>
                      <input
                        id="Guest"
                        type="text"
                        placeholder="Mr Taofeeq"
                        className="shadow  border rounded-l w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Service"
                      >
                        Service
                      </label>
                      <input
                        id="service"
                        type="text"
                        placeholder="Consultation"
                        className="shadow  border rounded-l w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                      >
                        Date
                      </label>
                      <input
                        id="date"
                        type="text"
                        placeholder="04/07/2024"
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Time"
                      >
                        Time
                      </label>
                      <input
                        id="time"
                        type="text"
                        placeholder="10:30AM"
                        className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  justify-between align-center mt-10">
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-gray-200 focus:outline-none  font-medium text-black px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-gray-500"
                  >
                    <span className="inline-flex items-center ">Back</span>
                  </button>
                  <button
                    type="submit"
                    className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full sm:w-auto md:px-12 cursor-pointer hover:bg-blue-500"
                  >
                    <span className="inline-flex items-center">Confirm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 text-xs text-gray-500">
        <div className="mx-auto max-w-7xl px-4 py-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="flex flex-shrink-0 flex-row items-center justify-center space-x-4 md:order-2">
            <a className="text-primary whitespace-nowrap underline" href="#">
              Terms and Conditions
            </a>
            <a className="text-primary whitespace-nowrap underline" href="#">
              Privacy Policy
            </a>
            <select
              id="language"
              name="language"
              className="focus:border-primary focus:ring-primary block rounded-md border-gray-300 py-0.5 text-sm focus:outline-none md:py-1"
            >
              <option value="en">English</option>
              <option value="pl">French</option>
            </select>
          </div>
          <div className="mt-8 text-center md:order-1 md:mt-0 md:text-left">
            <p className="text-gray-500">
              © 2024 Consultify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
