"use client";

import { Button } from "@/components/ui/button";
import ComboBox from "../../components/ComboBox";
import { BiNotepad } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { TbCreditCard } from "react-icons/tb";
import { FaVideo } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { MdLanguage, MdKeyboardArrowUp } from "react-icons/md";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="">
      <header className="bg-white z-10 fixed top-0 left-0 right-0">
        <div className="header:justify-start header:space-x-10 header:px-16 mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-6 sm:px-6">
          <div className="relative top-[-5px] flex gap-10 items-center">
            <Logo />
          </div>
          <nav className="hidden sm:flex space-x-8 text-sm">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="hidden sm:flex sm:gap-8 items-center">
            <Link
              href="/login"
              className="px-4 py-3 rounded-full hover:bg-gray-300"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-primary px-4 py-3 text-white hover:bg-purple-800"
            >
              Get Started
            </Link>
          </div>
          <button
            className="block sm:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <a
              href="#features"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Features
            </a>
            <a
              href="how-it-works"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </a>
            <Link
              href="/login"
              className=" px-4 py-3 text-center rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={() => setShowMenu(false)}
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className=" px-4 py-3 text-center rounded-full bg-primary text-white hover:bg-purple-800"
              onClick={() => setShowMenu(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      <div className="min-h-small-viewport flex flex-col  px-8 pt-32 text-center bg-gray-100">
        <div className=" m-auto">
          <h1 className=" font-display text-balance text-4xl font-extrabold mx-auto mx-w-2xl tracking-tight sm:text-6xl md:text-7xl">
            <span className="relative">Revolutionize your</span>
            <br />
            <span className=" relative  text-primary  sm:whitespace-nowrap">
              <span className="relative">DIGITAL CONSULTATION</span>
            </span>
            <br />
            Process.
          </h1>
          <p
            className=" mx-auto mt
          -8 max-w-2xl text-slate-700 md:text-lg"
          >
            Consultly is an integrated platform for managing online
            consultations comprehensively, offering all the essential tools for{" "}
            <strong>scheduling meetings</strong>
            and <strong>video calling</strong> your clients.
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
              <img src="./dashboard.png" alt="dashboard" />
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

      <section className="scroll-mt-24 py-16 bg-gray-100"
        id="how-it-works"
      ></section>

      <section className="scroll-mt-24 py-16 bg-gray-100" id="contact">
        <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-primary text-base font-medium uppercase tracking-wider">
              Contact us
            </h2>
            <h3 className="text-balance font-display mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get In Touch
            </h3>
            <p className="text-balance header:px-16 mx-auto max-w-4xl px-6 text-slate-700 md:text-lg">
              Still have questions? Send us a message.
            </p>
          </div>
          <div className="w-full">
            <div className="mx-auto mt-12 max-w-xl">
              <form className="grid grid-cols-1 gap-y-6 text-left sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className=" block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:outline-primary"
                      value=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className=" block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:outline-primary"
                      value=""
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm focus:outline-primary"
                      value=""
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      className=" block w-full  rounded-md  border-3 border-gray-300 px-4 py-3 shadow-sm focus:outline-primary"
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center sm:col-span-2">
                  <a href="#">
                    {" "}
                    <button
                      type="submit"
                      className="transition-color relative inline-flex items-center justify-center duration-150 ease-in-out border border-transparent shadow-sm bg-primary focus:outline-none  font-medium text-white px-3 py-2 rounded-full px-5 sm:w-auto md:px-12 cursor-pointer hover:bg-purple-700"
                    >
                      <span className="inline-flex items-center">
                        Let&apos;s talk
                      </span>
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-black relative">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <p className="text-center mb-4">Stay connected with us:</p>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-primary hover:text-gray-400">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-primary hover:text-gray-400">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-primary hover:text-gray-400">
              <FaInstagram size={28} />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 ">
            <div>
              <h3 className="text-lg font-bold mb-2">Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Support</h3>
              <ul>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <ul>
                <li>
                  <a href="#">Terms ond Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
           
            <div className="">
              <h3 className="text-lg font-bold mb-2">Languages</h3>
              <select className="text-black border text-md  rounded-lg px-5 py-3">
                <option value="en">English</option>
                <option value="en">French</option>
              </select>
            </div>
          </div>
          <button
            className="text-gray-300 hover:text-gray-400 px-3 py-2 border-0 bg-primary absolute right-4 bottom-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <MdKeyboardArrowUp size={34} />
          </button>
        </div>
        <p className="text-sm text-center ">
          &copy; {new Date().getFullYear()} Consultly. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
