export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent-900">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div>
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav
                        className="-mx-5 -my-2 flex flex-wrap justify-center"
                        aria-label="Footer"
                    >
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-white hover:text-gray-300"
                            >
                                About Us
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-white hover:text-gray-300"
                            >
                                Services
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-white hover:text-gray-300"
                            >
                                Reviews
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-white hover:text-gray-300"
                            >
                                Get An Estimate
                            </a>
                        </div>
                    </nav>
                    <p className="mt-8 text-base leading-6 text-center text-white">
                        &copy; {currentYear} Angry Lorax Tree Service. All rights reserved.
                    </p>
                </div>    
            </div>
        </footer>
    );
}