const LoadingSkeleton = () => (
  <div className="flex w-full max-w-xl animate-pulse flex-col items-center gap-6 sm:gap-10">
    {/* Profile Header Skeleton */}
    <div className="space-y-4 text-center sm:space-y-6">
      <div className="mx-auto h-28 w-28 rounded-full bg-white/10 sm:h-36 sm:w-36"></div>
      <div className="space-y-2">
        <div className="mx-auto h-3 w-20 rounded bg-white/10 sm:h-4"></div>
        <div className="mx-auto h-8 w-48 rounded bg-white/10 sm:h-10 sm:w-64"></div>
        <div className="mx-auto h-4 w-32 rounded bg-white/10 sm:h-5"></div>
      </div>
    </div>

    {/* Contact List Skeleton */}
    <div className="w-full space-y-2">
      <div className="h-3 w-16 rounded bg-white/10 sm:h-4"></div>
      <div className="divide-y divide-white/5 rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex-1 space-y-2">
              <div className="h-3 w-16 rounded bg-white/10 sm:h-4"></div>
              <div className="h-4 w-32 rounded bg-white/10 sm:h-5"></div>
            </div>
            <div className="h-4 w-4 rounded bg-white/10"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Skills Skeleton */}
    <div className="w-full space-y-2">
      <div className="h-3 w-16 rounded bg-white/10 sm:h-4"></div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-7 w-20 rounded-full bg-white/10 sm:h-8 sm:w-24"></div>
        ))}
      </div>
    </div>
  </div>
)

export default LoadingSkeleton

