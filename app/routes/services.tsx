'use client'

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, Outlet } from '@remix-run/react'; // Import NavLink from Remix
import { useState } from 'react';

import logoAssetUrl from '~/assets/logo.png';
import Footer from '~/components/Footer';
import { services } from '~/data/services';  // Import services data



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ServicesLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Mobile Sidebar */}
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-neutral-900/80" />
                    <div className="fixed inset-0 flex">
                        <DialogPanel className="relative mr-16 flex w-full max-w-xs transform transition duration-300 ease-in-out">
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-primary-100" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar Content */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-500 px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img src="/logo.svg" alt="Angry Loraxe" className="h-8 w-auto" />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul className="-mx-2 space-y-1">
                                                {services.map((service) => (
                                                    <li key={service.slug}>
                                                        <NavLink
                                                            to={`/services/${service.slug}`}
                                                            className={({ isActive }) =>
                                                                classNames(
                                                                    isActive
                                                                        ? 'bg-primary-700 text-neutral-100'
                                                                        : 'text-neutral-100 hover:bg-primary-700 hover:text-neutral-100',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                                                )
                                                            }
                                                        >
                                                            {service.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static Sidebar for Desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-500 px-6">
                        <NavLink to="/" className="flex h-16 shrink-0 items-center">
                            <img src={logoAssetUrl} alt="Angry Loraxe" className="h-24 w-auto pt-8" />
                        </NavLink>
                        <nav className="flex flex-1 flex-col">
                            <ul className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul className="-mx-2 space-y-1">
                                        {services.map((service) => (
                                            <li key={service.slug}>
                                                <NavLink
                                                    to={`/services/${service.slug}`}
                                                    className={({ isActive }) =>
                                                        classNames(
                                                            isActive
                                                                ? 'bg-primary-700 text-neutral-100'
                                                                : 'text-neutral-100 hover:bg-primary-700 hover:text-neutral-100',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                                        )
                                                    }
                                                >
                                                    {service.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* This is where child routes (like index and individual services) will render */}
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
