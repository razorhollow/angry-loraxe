import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from '@remix-run/react';

import { services } from '~/data/services';

interface ServicesDropdownProps {
    isTop?: boolean;
}

export default function ServicesDropdown({ isTop }: ServicesDropdownProps) {

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex items-center gap-1">
                <NavLink 
                    to="/services"
                    className={`text-sm font-semibold leading-6 transition-colors duration-300 ${isTop ? "text-white hover:text-primary-100" : "text-neutral-900 hover:text-neutral-700"}`}
                >
                    Services
                </NavLink>
                <MenuButton className="transition-colors duration-300">
                    <ChevronDownIcon className={`h-4 w-4 ${isTop ? "text-neutral-300 hover:text-primary-100" : "text-neutral-800 hover:text-neutral-700"}`} />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {services.map((service) => (
                        <MenuItem key={service.name}>
                            {({ active }) => (
                                <Link
                                    to={`/services/${service.slug}`}
                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                >
                                    {service.name}
                                </Link>
                            )}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
}
