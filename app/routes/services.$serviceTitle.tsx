import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { services } from "~/data/services";

// Loader function to fetch the correct service based on the slug
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const serviceSlug = params.serviceTitle;
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(service);
};


export default function ServicePage() {
  const service = useLoaderData <typeof loader>();

  return (
    <div className="relative bg-neutral-100">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Hero Image Section */}
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              src={service.image} // Load image dynamically based on slug
              alt={service.name}
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-primary-500">{service.name} Services</p>
            <h1 className="mt-2 text-4xl font-serif font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Premium {service.name} Tailored for Your Needs
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-700 font-sans">
              {service.description}
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-neutral-700 lg:max-w-none font-sans">
              <p>{service.details}</p>

              {/* Benefits Section */}
              <ul className="mt-8 space-y-8 text-neutral-600">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-neutral-900">{benefit.title}</strong> {benefit.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                Our experienced team is ready to provide top-notch {service.name} services to ensure your property remains safe and beautiful. 
              </p>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition duration-200">
                  {service.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
