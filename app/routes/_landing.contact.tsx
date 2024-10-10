import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { LinksFunction } from '@remix-run/node'
import { useEffect } from 'react'

import contactHeroImg from '../assets/contact-hero.png'


export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css",
            media: "screen",
        },
    ];
};


export default function ContactRoute() {
    useEffect(() => {
        // Check if the script is already present
        const existingScript = document.getElementById('work-request-embed-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'work-request-embed-script'; // Assign an ID for easy reference
            script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
            script.async = true;
            script.setAttribute('clienthub_id', '90afd8bb-3397-40f2-97d2-5513373037f7');
            script.setAttribute(
                'form_url',
                'https://clienthub.getjobber.com/client_hubs/90afd8bb-3397-40f2-97d2-5513373037f7/public/work_request/embedded_work_request_form'
            );
            document.body.appendChild(script);
        }

        // Optional Cleanup: Only remove if you are certain the script shouldn't persist
        // In most cases, you might want to keep the script for the lifetime of the app
        /*
        return () => {
            const script = document.getElementById('work-request-embed-script');
            if (script) {
                document.body.removeChild(script);
            }
        };
        */
    }, [])

    return (
        <div className="relative isolate bg-white">
            <div className='w-full'>
                <img src={contactHeroImg} alt="" className='w-full h-100 object-cover h-75' />
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Angry Lorax Tree Service, we&apos;re here to provide exceptional care for your outdoor space. Whether you have questions, need advice, or want to book a service, our dedicated team is ready to assist you. Reach out today and experience our commitment to customer satisfaction firsthand.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    501 Highland Ave
                                    <br />
                                    Horseheads, NY 14845
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+1 (607) 742-5792" className="hover:text-gray-900">
                                        +1 (607) 742-5792
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:angryloraxe@gmail.com" className="hover:text-gray-900">
                                        angryloraxe@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
                    <div id="90afd8bb-3397-40f2-97d2-5513373037f7"></div>

                </div>
            </div>
        </div>
    )
}

export const meta = () => {
    return [
        { title: 'Angry Loraxe - Contact Us' },
        { name: 'description', content: 'Get in touch with Angry Loraxe Tree Service today. Whether you have questions, need advice, or want to book a service, our dedicated team is ready to assist you.' }
    ]
}
