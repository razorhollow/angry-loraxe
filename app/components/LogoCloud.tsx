import streeterAssetUrl from '~/assets/logos/streeter.png';
import fiveStarAssetUrl from '~/assets/logos/five-star.png';
import michelAssetUrl from '~/assets/logos/michel.png';
import scpLogoAssetUrl from '~/assets/logos/scp.png';

export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by local businesses and organizations around the Sourthern Tier.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the growing list of companies that trust us with their tree care needs.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a href="/reviews" className="text-sm font-semibold text-gray-900">
                  See More Customer Reviews<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                alt="Tuple"
                src={streeterAssetUrl}
                width={105}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
              <img
                alt="Reform"
                src={fiveStarAssetUrl}
                width={104}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
              <img
                alt="SavvyCal"
                src={michelAssetUrl}
                width={140}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
              <img
                alt="Laravel"
                src={scpLogoAssetUrl}
                width={136}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
              <img
                alt="Transistor"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
              <img
                alt="Statamic"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                width={147}
                height={48}
                className="max-h-12 w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  