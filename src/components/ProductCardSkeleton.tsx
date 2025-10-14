export function ProductCardSkeleton() {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
      {/* Top gradient border placeholder */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>

      {/* Image skeleton */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title skeleton */}
        <div className="mb-3">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Description skeleton */}
        <div className="mb-5 flex-grow">
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Footer skeleton */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          {/* Price skeleton */}
          <div className="flex flex-col gap-2">
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>

          {/* Button skeleton */}
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
