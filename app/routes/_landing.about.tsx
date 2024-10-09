import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import aboutHeroImg from '../assets/about-header.png';
import joshHeadShotImg from '../assets/josh-headshot.png';
import markHeadshotImg from '../assets/mark-headshot.png';
import treePlantingImg from '../assets/tree-planting.png';


const faqs = [
    {
        question: "How much does it cost to have a tree removed?",
        answer:
            "Each tree is different and prices can vary depending on the size, location, and condition of the tree. That's why we offer free, no-obligation estimates, so contact us today to schedule an appointment.",
    },
    {
        question: "Are you two brothers?",
        answer:
            "Yes! We are family owned and operated, and while not all of our team members are blood relatives, we treat them like they are!",
    },
    {
        question: "Are you actually angry?",
        answer:
            "No, we're not actually angry. In fact, we love what we do! The name comes from our commitment to protecting the environment and our passion for tree care.",
    },
    {
        question: "How can we lower the cost of tree removal?",
        answer:
            "While the removal of a tree can be costly, we work with customers to find solutions that work for them. We are happy to safely get the tree on the ground and let the customer handle the cleanup to save on costs.",
    }
]

const people = [
    {
        name: 'Mark Sempler',
        role: 'Owner / President',
        imageUrl: markHeadshotImg,
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        xUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/mark-sempler-3341b368/',
    },
    {
        name: 'Josh Sempler',
        role: 'Owner / CEO',
        imageUrl: joshHeadShotImg,
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        xUrl: '#',
        linkedinUrl: '#',
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* Header Section */}
            <div className="relative isolate bg-white">
                {/* Full-width header image */}
                <div className="w-full">
                    <img src={aboutHeroImg} alt="About Header" className="w-full object-cover h-96 md:h-[30rem] lg:h-[36rem]" />

                </div>
                {/* Header Content */}
                <div className="absolute inset-0 bg-neutral-900 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white max-w-2xl pt-24">
                        <p className="text-sm md:text-base font-semibold leading-7 text-primary-300">Trusted Expertise, Local Commitment</p>
                        <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-4xl">About Angry Loraxe Tree Service</h2>
                        <p className="mt-6 text-md md:text-lg leading-8 text-white">
                            we believe in the power of personal relationships and professional service. We are a family-owned tree care company with deep roots in our community, providing tailored outdoor solutions that you can trust.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-24 md:py-32 lg:py-40">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our team is made up of skilled professionals who are dedicated to transforming your outdoor spaces. We pride ourselves on our friendly approach, expert knowledge, and dedication to customer satisfaction.
                        </p>
                    </div>
                    <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <img alt="" src={person.imageUrl} className="w-full object-cover rounded-md shadow-md" />
                                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                                <ul className="mt-6 flex gap-x-6">
                                    <li>
                                        <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">X</span>
                                            <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                                                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                                                <path
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* FAQ Section */}
            <div className="bg-neutral-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-white/10">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-white/10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} as="div" className="pt-6">
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                                                <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                                        <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            {/* Initiative Section */}
            <section className="bg-neutral-100 py-12" id='tree-planting'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-accent-300 tracking-wide uppercase">Our Commitment to Nature</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Planting a Tree for Every Tree We Remove
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            For every tree we cut down, we plant a new one through our partnership with the{' '}
                            <a
                                href="https://shop.arborday.org/commemorative-trees-for-others"
                                className="text-accent-300 underline hover:text-green-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Arbor Day Foundation
                            </a>
                            . Together, we&apos;re making a positive impact on our planet. If you would like to join us, please click the link above to donate.
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <img
                            className="rounded-lg shadow-lg"
                            src={treePlantingImg}
                            alt="Tree planting initiative"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
