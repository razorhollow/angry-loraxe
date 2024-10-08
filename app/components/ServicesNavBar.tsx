import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

import logoAssetUrl from "~/assets/logo.png";
import { services } from "~/data/services";

export default function ServicesNavbar() {
    const [currentIndex, setCurrentIndex] = useState(-1); // Default to "Overview"
    const navigate = useNavigate();

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === -1 ? services.length - 1 : prevIndex - 1;
            navigate(newIndex === -1 ? "/services" : `/services/${services[newIndex].slug}`, { preventScrollReset: true });
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === services.length - 1 ? -1 : prevIndex + 1;
            navigate(newIndex === -1 ? "/services" : `/services/${services[newIndex].slug}`, { preventScrollReset: true });
            return newIndex;
        });
    };

    return (
        <header className="bg-gradient-to-b from-neutral-800 to-neutral-100 py-8">
            <nav
                aria-label="Services Navigation"
                className="flex flex-col items-center justify-between px-6 lg:px-8 text-center"
            >
                <div className="flex items-center lg:flex-1 mb-6">
                    <a href="/" className="-m-1.5 flex items-center p-1.5">
                        <span className="sr-only">Angry Lorax Tree Service</span>
                        <img
                            alt="Angry Lorax Tree Service Logo"
                            src={logoAssetUrl}
                            className="h-20 w-auto"
                        />
                    </a>
                </div>
                <p className="text-lg text-white max-w-2xl mb-8">
                    {currentIndex === -1
                        ? "Explore our 3-step process and discover how simple it is to transform your outdoor space."
                        : "Learn more about our professional tree care services designed to meet all your needs."}
                </p>
                <p className="text-lg text-accent-700 max-w-2xl mb-4">
                    Use the arrows below to browse through our services and learn more about what we offer.
                </p>
                <div className="flex items-center lg:gap-x-4">
                    <button
                        onClick={handlePrev}
                        className="p-2 transition-colors duration-300 text-neutral-600 hover:text-accent-300"
                    >
                        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex items-center justify-center overflow-hidden w-66 gap-x-4">
                        <span className="text-xl font-semibold leading-6 text-neutral-900 transition-colors duration-300 whitespace-nowrap">
                            {currentIndex === -1 ? "Overview" : services[currentIndex].name}
                        </span>
                    </div>
                    <button
                        onClick={handleNext}
                        className="p-2 transition-colors duration-300 text-white hover:text-accent-300"
                    >
                        <ChevronRightIcon className="h-6 w-6 text-neutral-600" aria-hidden="true" />
                    </button>
                </div>
                <div className="absolute top-4 right-6">
                    <a
                        href="/about"
                        className="text-lg font-semibold text-white hover:text-accent-300 transition-colors duration-300 flex items-center gap-1"
                    >
                        Learn More About Us
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                </div>
            </nav>
        </header>
    );
}