import { Button } from "@/components/ui/button";
import ComboBox from "../../components/ComboBox";

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
                <a href="#">Features</a>
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
                font-medium text-primary px-3 py-2 rounded-full hover:border-gray-300 px-5 md:px-10"
              href="#"
            >Learn more
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
