import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import dashboardImg from "@/public/img1.png";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { P } from "@/components/ui/typography";

export const metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex space-x-3 sm:space-x-6 rounded-md">
        <div className="flex flex-1 flex-col">
          <div className=" bg-gray-50 flex-1 flex-row justify-between p-4 sm:flex">
            <div>
              <Heading>Good afternoon, Taofeek!</Heading>
              <P size="sm">
                Its <strong>Thu May 23, 2024</strong> today.
              </P>
              <div className="max-w-md space-y-1">
                <P size="sm">
                  Do you know there are 3 ways of scheduling meetings in
                  Consultly? Read about them{" "}
                  <a
                    className="underline text-primary font-medium"
                    href="#"
                    target="_blank"
                  >
                    here.
                  </a>
                </P>
              </div>
            </div>
            <div className="-m-4 self-end">
              <Image
                className="-mt-2 h-auto w-[300px] object-contain cursor-pointer"
                src={dashboardImg}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center space-y-0.5 py-1 sm:py-4">
            <div className="flex justify-between rounded-md">
              <button className="m-1 self-center rounded-full p-1 hover:bg-gray-500">
                <FaAngleLeft className="size{40px}" />
              </button>
              <div className="flex flex-1 justify-between">
                <button className="w-20 bg-primary rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Thu</p>
                    <p>23</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Fri</p>
                    <p>24</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Sat</p>
                    <p>25</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Sun</p>
                    <p>26</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Mon</p>
                    <p>27</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-gray-700">
                    <p>May</p>
                    <p>Tue</p>
                    <p>28</p>
                    <p></p>
                  </div>
                </button>
                <button className="w-20 bg-gray-50 rounded-md">
                  <div className="flex flex-col justify-center text-sm gap-2 p-1 text-black">
                    <p>May</p>
                    <p>Wed</p>
                    <p>29</p>
                    <p></p>
                  </div>
                </button>
              </div>
              <button className="m-1 self-center rounded-full  p-1 hover:bg-gray-500">
                <FaAngleRight className="size{40px}" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <Calendar />
        </div>
      </div>
      <div className="bg-gray-50 flex-1 rounded-md min-h[320px]">
        <div className="flex justify-center p-2">
          <div className="my-10 flex flex-1 flex-col align-center justify-center text-center">
            <div className="flex justify-center align-center text-gray-400 mb-2">
              <FaCalendarAlt size={60} />
            </div>
            <Heading>No meetings today</Heading>
            <P>Complete your profile and share the availability calendar or </P>
            <div className="flex justify-center items-center mt-4">
              <Button size="lg">Schedule a meeting</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
