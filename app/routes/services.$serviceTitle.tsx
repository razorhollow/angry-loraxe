import { ArrowTrendingUpIcon, AcademicCapIcon, GlobeAmericasIcon, BuildingStorefrontIcon, CheckBadgeIcon, ArrowPathIcon, KeyIcon, TruckIcon, TrashIcon, PhoneArrowUpRightIcon, RocketLaunchIcon, WrenchScrewdriverIcon, PhotoIcon, HomeIcon, PaintBrushIcon, ScissorsIcon, StarIcon, CursorArrowRippleIcon, BoltIcon, IdentificationIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, SparklesIcon, ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

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

// Icon mapping
const iconMap = {
  CloudArrowUpIcon: CloudArrowUpIcon,
  LockClosedIcon: LockClosedIcon,
  ServerIcon: ServerIcon,
  SparklesIcon: SparklesIcon,
  ShieldCheckIcon: ShieldCheckIcon,
  CheckCircleIcon: CheckCircleIcon,
  IdentificationIcon: IdentificationIcon,
  BoltIcon: BoltIcon,
  CursorArrowRippleIcon: CursorArrowRippleIcon,
  StarIcon: StarIcon,
  ScissorsIcon: ScissorsIcon,
  PaintBrushIcon: PaintBrushIcon,
  HomeIcon: HomeIcon,
  PhotoIcon: PhotoIcon,
  WrenchScrewdriverIcon: WrenchScrewdriverIcon,
  RocketLaunchIcon: RocketLaunchIcon,
  PhoneArrowUpRightIcon: PhoneArrowUpRightIcon,
  TrashIcon: TrashIcon,
  TruckIcon: TruckIcon,
  ArrowPathIcon: ArrowPathIcon,
  KeyIcon: KeyIcon,
  CheckBadgeIcon: CheckBadgeIcon,
  BuildingStorefrontIcon: BuildingStorefrontIcon,
  GlobeAmericasIcon: GlobeAmericasIcon,
  AcademicCapIcon: AcademicCapIcon,
  ArrowTrendingUpIcon: ArrowTrendingUpIcon,
};

// This component renders the passed icon component dynamically
interface IconComponentProps {
  iconName: keyof typeof iconMap;
}

function IconComponent({ iconName }: IconComponentProps) {
  const Icon = iconMap[iconName]; // Find the correct icon component by name
  return Icon ? <Icon className="h-5 w-5 mt-1 flex-none text-primary-500" aria-hidden="true" /> : null;
}


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
              {service.heading}
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
                    <IconComponent iconName={benefit.icon as keyof typeof iconMap} />
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
                {service.name === "Emergency Tree Removal" ? (
                <NavLink to='tel:607-742-5792' className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition duration-200">
                  {service.cta}
                </NavLink>
                ) : (
                <NavLink to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition duration-200">
                  {service.cta}
                </NavLink>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

