import { ShieldCheckIcon, SparklesIcon, UsersIcon, ScissorsIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Expert Removal, Uncompromising Safety',
    description:
      'Our team uses the latest equipment and follows strict safety protocols to ensure that every tree removal is completed without risk to your property.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Spotless, Every Time',
    description:
      'We pride ourselves on leaving no debris behind—your property will be pristine and clean, with no trace of our work other than a safer, transformed landscape.',
    icon: SparklesIcon,
  },
  {
    name: 'Family-Run, Client-Focused',
    description:
      'As a family-owned business, we treat every client like part of the family, ensuring you feel valued and cared for throughout the entire process.',
    icon: UsersIcon,
  },
  {
    name: 'Precision Tree Trimming & Care',
    description:
      'Beyond removal, we offer precise trimming and plant care services to keep your trees healthy and your property looking its best.',
    icon: ScissorsIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent-500">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted Tree Care for a Safer, Cleaner Property
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Angry Loraxe, we go beyond expectations. Whether it&apos;s tree removal, trimming, or general care, our team is committed to providing safety-focused, precise services with immaculate clean-up every time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
