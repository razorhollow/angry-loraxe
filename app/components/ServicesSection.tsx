import brushHogAssetUrl from '~/assets/servicesGraphics/brush-hogging.webp'
import stormCleanupAssetUrl from '~/assets/servicesGraphics/storm-cleanup.webp'
import stumpGrindingAssetUrl from '~/assets/servicesGraphics/stump-grinding.webp'
import treePruningAssetUrl from '~/assets/servicesGraphics/tree-pruning.webp'
import treeRemovalAssetUrl from '~/assets/servicesGraphics/tree-removal.webp'

export default function ServicesSection() {
    return (
        <div className="bg-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary-500">Our Services</h2>
        <p className="text-3xl font-bold tracking-tight text-gray-900 w-[50%]">
          Comprehensive tree care and land solutions tailored to keep your property safe, beautfiul, and thriving year-round.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src={treeRemovalAssetUrl}
                className="h-80 object-scale-down"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-500">Tree Removal</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Fast, Efficient, Safe</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Safe and efficient tree removal to protect your property and landscape.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src={stumpGrindingAssetUrl}
                className="h-80 object-scale-down"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-500">Stump Grinding</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Like it was never there</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Seamless stump grinding for a clean, hazard-free yard.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src={stormCleanupAssetUrl}
                className="h-80 object-scale-down"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-500">Storm Cleanup</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Fast Storm Recovery</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Quick and thorough storm debris cleanup to restore your property.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img
                alt=""
                src={treePruningAssetUrl}
                className="h-80 object-scale-down"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-500">Tree Pruning</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Healthier, Stronger Trees</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Expert pruning to enhance the health and beauty of your trees.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src={brushHogAssetUrl}
                className="h-80 object-scale-down"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-500">Brush-Hogging</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">Clear Overgrowth Fast</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Efficient brush-hogging to clear overgrown land and maintain open spaces.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
    );
}