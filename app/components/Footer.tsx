// import { FacebookIcon, InstagramIcon, XIcon, GitHubIcon, YouTubeIcon } from '@heroicons/react/20/solid'; // Replace with actual icon imports
import { PhoneArrowUpRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import logoAssetUrl from '~/assets/logo.png';
import { services } from '~/data/services';

const socialLinks = [
    {
        name: 'Facebook', href: 'https://www.facebook.com/p/Angry-Loraxe-Tree-Service-100047496102714/', icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        )
    },
    {
        name: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-sempler-3341b368/', icon: () => (
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>


        )
    },
    { name: 'Email', href: 'mailto:angryloraxe@gmail.com', icon: EnvelopeIcon },
    { name: 'Call', href: 'tel:607-742-5792', icon: PhoneArrowUpRightIcon },
    // { name: 'YouTube', href: '#', icon: YouTubeIcon },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer aria-labelledby="footer-heading" className="bg-accent-900">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        {/* Company Branding */}
                        <img
                            alt="Angry Lorax Tree Service"
                            src={logoAssetUrl}
                            className="h-32 w-auto"
                        />
                        <p className="text-sm leading-6 text-gray-300">
                            Dedicated to providing top-notch tree services with a focus on safety, reliability, and customer satisfaction.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Navigation */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                                <ul className="mt-6 space-y-4">
                                    {services.map((service) => (
                                        <li key={service.slug}>
                                            <a href={`/services/${service.slug}`} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {service.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="/about-us" className="text-sm leading-6 text-gray-300 hover:text-white">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</a>
                                    </li>
                                    <li>
                                        <a href="/reviews" className="text-sm leading-6 text-gray-300 hover:text-white">Customer Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">&copy; {currentYear} Angry Lorax Tree Service. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
