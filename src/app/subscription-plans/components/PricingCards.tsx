'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface PricingTier {
  id: string
  name: string
  originalPrice: number
  discountedPrice: number
  description: string
  features: string[]
  recommended?: boolean
}

const PricingCards = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()

  const tiers: PricingTier[] = [
    {
      id: 'tier_one_day',
      name: 'One-Day',
      originalPrice: 249,
      discountedPrice: 27.39,
      description: 'Flexible Daily Access Ideal for short-term users seeking full platform access',
      features: [
        '24-hour access',
        'one device',
        '100% predictions',
        'automatic update',
      ],
    },
    {
      id: 'tier_one_week',
      name: 'One-Week',
      originalPrice: 1499,
      discountedPrice: 164.89,
      description: 'Extended Access Plan Best for users seeking consistent and stable access',
      features: [
        '7-day full access',
        'one device',
        '100% predictions',
        'automatic update',
      ],
      recommended: true,
    },
    {
      id: 'tier_one_month',
      name: 'One-Month',
      originalPrice: 4299,
      discountedPrice: 472.89,
      description: 'Professional Access Plan Designed for serious users maximizing platform usage',
      features: [
        '30-day premium access',
        'one device',
        '100% predictions',
        'automatic update',
      ],
    },
  ]

  const handleSelectPlan = (tier: PricingTier) => {
    const params = new URLSearchParams({
      plan: tier.name,
      price: tier.discountedPrice.toString(),
      originalPrice: tier.originalPrice.toString(),
    })
    router.push(`/subscription-plans/payment?${params.toString()}`)
  }

  return (
    <section className="py-16 reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative card-shadow rounded-2xl p-8 bg-black border-2 border-primary transition-all duration-500 hover:scale-105 hover:border-secondary ${
                tier.recommended ? 'scale-105 border-secondary' : ''
              }`}
              onMouseEnter={() => setHoveredId(tier.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{tier.name}</h3>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-lg text-muted-foreground line-through">${tier.originalPrice}</span>
                  <span className="text-4xl font-heading font-bold text-gradient-gold">
                    ${tier.discountedPrice}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={`${tier.id}_feature_${featureIndex}`} className="flex items-start gap-3 group">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(tier)}
                className="w-full py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 glow-gold bg-secondary text-secondary-foreground"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingCards