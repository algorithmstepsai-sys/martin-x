'use client';


const OfferBanner = () => {
  return (
    <div className="inline-flex flex-col items-center gap-3 px-8 py-4 rounded-full bg-secondary text-secondary-foreground shadow-lg animate-pulse-glow">
      <div className="flex items-center gap-3">
        <span className="text-sm md:text-base font-bold uppercase tracking-wider">
          FIRST PURCHASE DISCOUNT 89% OFF
        </span>
      </div>
      <span className="text-xs font-medium">
        Applied automatically to first purchase only Standard pricing applies to renewals
      </span>
    </div>
  )
}

export default OfferBanner