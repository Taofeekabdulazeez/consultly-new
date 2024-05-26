import { Button } from "@/components/ui/button";
import ComboBox from "../../components/ComboBox";
import { BiNotepad } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { TbCreditCard } from "react-icons/tb";
import { FaVideo } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";

export default function Home() {
  return (
    <body>
      <header className="bg-white z-10 fixed top-0 left-0 right-0">
        <div className="header:justify-start header:space-x-10 header:px-16 mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-6 sm:px-6">
          <div className="relative top-[-5px] flex gap-10">
            <div className=" flex flex-col">
              <span className="text-2xl font-extrabold text-purple-800">
                Consultly
              </span>
              <div className="flex ml-4">
                <span className="rounded-full inline-block h-1.5 w-1.5 bg-red-500"></span>
                <span className="rounded-full inline-block  h-1.5 w-1.5 bg-yellow-500"></span>
                <span className="rounded-full inline-block  h-1.5 w-1.5 bg-green-500"></span>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <nav className="flex space-x-8  text-sm">
                <a href="#features">Features</a>
                <a href="#">How It Works</a>
                <a href="#">Contact</a>
              </nav>
            </div>
          </div>
          <div className=" header:ml-12  items-center gap-8 flex ">
            <a href="#" className="px-4 py-3  rounded-full hover:bg-gray-300">
              Log In
            </a>
            <a
              href="#"
              className="rounded-full bg-purple-600 px-4 py-3 text-white hover:bg-purple-800"
            >
              {" "}
              Get Started
            </a>
          </div>
        </div>
      </header>

      <div className="min-h-small-viewport flex flex-col  px-8 pt-32 text-center bg-gray-100">
        <div className=" m-auto">
          <h1 className="text-4xl font-extrabold">
            <span className="relative text-4xl">Revolutionize your</span>
            <span className=" flex flex-col relative text-6xl text-purple-700 mt-3 sm:whitespace-nowrap">
              <span className="relative">DIGITAL CONSULTATION</span>
            </span>
            <span className="text-4xl mt-2">Process.</span>
          </h1>
          <p className="text-balance mx-auto my-6 max-w-2xl text-slate-700 md:text-lg">
            Consultly is an all-in-one online consultations management platform
            which provide you with all necessary tools for{" "}
            <strong>scheduling meetings</strong>,
            <strong>accepting payments</strong> and{" "}
            <strong>video calling</strong> your clients.
          </p>
          <div className="mt-10 flex justify-center gap-x-6 mb-4">
            <a
              className=" relative inline-flex items-center justify-center
               duration-150 ease-in-out border border-primary/70 hover:bg-purple-300
                font-medium text-primary py-2 rounded-full hover:border-gray-300 px-5 md:px-10"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <section className="scroll-mt-24 py-16 bg-white" id="features">
        <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-primary text-base font-medium uppercase tracking-wider">
              Features
            </h2>
            <h3 className="text-balance font-display mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in one place
            </h3>
            <p className="text-balance header:px-16 mx-auto max-w-4xl px-6 text-slate-700 md:text-lg">
              Explore our feature set that helps you manage your online
              consultations workflow.
            </p>
          </div>
          <div>
            <div className="relative mx-auto mt-8 mx-w-6xl rounded-md bg-gray-100 p-1 sm:p-4">
              <img src="./dashboard.jpg" alt="dash" />
            </div>
          </div>
        </div>
      </section>
      <section className="scroll-mt-24 py-16 bg-white">
        <div className="mx-auto max-w-4xl text-center sm:px-6 1g:px-8">
          <div className="grid auto-cols-max auto-rows-fr grid-cols-1 gap-4 px-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-purple-100">
                <BiNotepad className="size-[25px] text-indigo-300" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Scheduling form</h3>
                  <p>
                    Complete the simple form to send your client an invitation
                    by email.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-blue-50">
                <AiOutlineIdcard className="size-[25px] text-blue-300" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Public profile</h3>
                  <p>
                    Create your Consultly profile and share it anywhere on the
                    web.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  See the demo
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-pink-100">
                <FaCalendarAlt className="size-[25px] text-pink-400" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Availability calendar</h3>
                  <p>
                    Share the calendar with available time slots to automate
                    scheduling meetings and accepting payments.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-yellow-50">
                <TbCreditCard className="size-[25px] text-orange-400" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Online payment solution</h3>
                  <p>
                    Accept payments from your clients in easy, fast and secure
                    way.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-indigo-100">
                <FaVideo className="size-[30px] text-purple-300" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Video conferencing platform</h3>
                  <p>
                    Use our browser built-in video solution to connect with
                    clients without the need for external applications.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-indigo-200">
                <BiWorld className="size-[25px] text-blue-400" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Time zone support</h3>
                  <p>Always be on time with our time zone converter.</p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col p-2 sm:flex-row">
              <div className="self-start rounded-lg p-3 bg-pink-50">
                <BiMessageDetail className="size-[25px] text-pink-400" />
              </div>
              <div className="flex flex-col text-left sm:ml-6">
                <div className="mt-4 flex-1 space-y-2 sm:mt-0">
                  <h3 className="font-bold">Meeting requests</h3>
                  <p>
                    No more chaos in your social media inboxes. Receive meeting
                    requests in one place.
                  </p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary mt-2 cursor-pointer underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
