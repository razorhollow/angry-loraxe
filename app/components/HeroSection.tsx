import { NavLink } from "@remix-run/react";

import heroImage from "~/assets/hero-image.png";

export default function HeroSection() {

  return (
    <div className="bg-gray-900">
      {/* Header Moved to seperate component*/}
      

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-[6rem]">
        {/* Hero Image */}
        <img
          alt="Tree service professionals working on a tree"
          src={heroImage}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-neutral-400 hover:ring-gray-900/20">
              For every tree we cut, we plant another.{' '}
              <a href="#" className="font-semibold text-primary-300">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-serif text-4xl text-white drop-shadow-lg sm:text-6xl">
              Professional Tree Services You Can Trust
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Serving our community with expert tree care, removal, and maintenance. Your safety and satisfaction are our top priorities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="#"
                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Get a Free Estimate
              </NavLink>
              <NavLink
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-teal-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
