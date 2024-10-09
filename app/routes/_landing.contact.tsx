import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ActionFunctionArgs, json } from '@remix-run/node'

import { services } from '~/data/services'

import contactHeroImg from '../assets/contact-hero.png'

const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'phone', title: 'Phone' },
    { id: 'text', title: 'Text Message (SMS)' },
]

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    const email = formData.get('email')
    const phoneNumber = formData.get('phone-number')
    const message = formData.get('message')
    const servicesRequested = formData.getAll('services-requested')
    const notificationMethod = formData.get('notification-method')
    console.log({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
        servicesRequested,
        notificationMethod,
    })

    return json({ message: 'Message sent!' })
}




export default function ContactRoute() {
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
                <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        required
                                        id="phone-number"
                                        name="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <fieldset className='mt-2.5'>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Services Requested</legend>
                            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                                {services.map((service) => (
                                    <div key={service.slug} className="relative flex items-start py-4">
                                        <div className="min-w-0 flex-1 text-sm leading-6">
                                            <label htmlFor={`service-${service.slug}`} className="select-none font-medium text-gray-900">
                                                {service.name}
                                            </label>
                                        </div>
                                        <div className="ml-3 flex h-6 items-center">
                                            <input
                                                id={`service-${service.slug}`}
                                                name="services-requested"
                                                value={service.name}
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset className='mt-2.5'>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Notifications</legend>
                            <p className="mt-1 text-sm leading-6 text-gray-600">How do you prefer to be contacted?</p>
                            <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                {notificationMethods.map((notificationMethod) => (
                                    <div key={notificationMethod.id} className="flex items-center">
                                        <input
                                            defaultChecked={notificationMethod.id === 'phone'}
                                            id={notificationMethod.id}
                                            name="notification-method"
                                            value={notificationMethod.id}
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-primary-500 focus:ring-primary-500"
                                        />
                                        <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                            {notificationMethod.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
