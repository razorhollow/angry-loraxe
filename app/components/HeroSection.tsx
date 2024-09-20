import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";

import heroImage from "~/assets/hero-image.png";
import logoAssetUrl from "~/assets/logo.png";

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Reviews", href: "#" },
  { name: "Get An Estimate", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isTop ? "bg-transparent py-6" : "bg-primary-500 py-3 shadow-md"
        }`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-6 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center">
            <NavLink to="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Angry Lorax Tree Service</span>
              <img
                alt="Angry Lorax Tree Service Logo"
                src={logoAssetUrl}
                className={`transition-all duration-300 ease-in-out ${
                  isTop ? "h-28 w-auto" : "h-16 w-auto"
                }`}
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${
                isTop ? "text-gray-300" : "text-neutral-900"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
                  isTop ? "text-white hover:text-primary-100" : "text-neutral-900 hover:text-neutral-700"
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="#"
              className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
                isTop ? "text-white hover:text-primary-100" : "text-neutral-900 hover:text-neutral-700"
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6">
            <div className="flex items-center justify-between">
              <NavLink to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Angry Lorax Tree Service</span>
                <img alt="" src={logoAssetUrl} className="h-8 w-auto" />
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <NavLink
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

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
