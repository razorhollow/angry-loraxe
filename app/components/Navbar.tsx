// app/components/Navbar.tsx
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";

import logoAssetUrl from "~/assets/logo.png";
import { services } from "~/data/services";

import ServicesDropdown from "./ServicesDropdown";

const navigation = [
    { name: "About Us", href: "#" },
    // { name: "Services", href: "#" }, // Replaced by ServicesDropdown
    { name: "Reviews", href: "#" },
    { name: "Contact Us", href: "#" },
];

export default function Navbar() {
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
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isTop ? "bg-transparent py-6" : "bg-primary-500 py-3 shadow-md"
                }`}
        >
            <nav
                aria-label="Global"
                className="flex items-center justify-between px-6 lg:px-8"
            >
                <div className="flex items-center lg:flex-1">
                    <NavLink to="/" className="-m-1.5 flex items-center p-1.5">
                        <span className="sr-only">Angry Lorax Tree Service</span>
                        <img
                            alt="Angry Lorax Tree Service Logo"
                            src={logoAssetUrl}
                            className={`transition-all duration-300 ease-in-out ${isTop ? "h-28 w-auto" : "h-16 w-auto"
                                }`}
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${isTop ? "text-gray-300" : "text-neutral-900"
                            }`}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden items-center lg:flex lg:gap-x-12">
                    <ServicesDropdown isTop={isTop} />
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={`text-sm font-semibold leading-6 transition-colors duration-300 ${isTop
                                    ? "text-white hover:text-primary-100"
                                    : "text-neutral-900 hover:text-neutral-700"
                                }`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink
                        to="/login"
                        className={`text-sm font-semibold leading-6 transition-colors duration-300 ${isTop
                                ? "text-white hover:text-primary-100"
                                : "text-neutral-900 hover:text-neutral-700"
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
                <DialogPanel className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900 px-6 py-6">
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Angry Lorax Tree Service</span>
                            <img alt="Angry Loraxe" src={logoAssetUrl} className="h-24 w-auto" />
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
                                {/* Services Section */}
                                <div className="border-t border-gray-500/25 pt-4">
                                    <p className="px-3 py-2 text-base font-semibold leading-7 text-gray-400">
                                        Services
                                    </p>
                                    {services.map((service) => (
                                        <NavLink
                                            key={service.name}
                                            to={service.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {service.name}
                                        </NavLink>
                                    ))}
                                </div>
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
                </DialogPanel>
            </Dialog>
        </header>
    );
}
