'use client';
import { useEffect, useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

const ContestHero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="h-20 bg-muted/20 rounded animate-pulse mb-8" />
          <div className="h-32 bg-muted/20 rounded animate-pulse mb-12" />
          <div className="h-16 bg-muted/20 rounded-full animate-pulse mx-auto w-80" />
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden mb-0 pt-[110px] pb-5">
      {/* Background */}
      <div className="absolute inset-0 z-0 mb-[50px]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background mb-[50px] py-0" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Emoji Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel mb-8 animate-fade-in">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Daily Contest
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight leading-tight mb-6 text-foreground animate-fade-in animation-delay-100">
          Free Subscription's
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          We're excited to announce a special Competition for new users of the martin x script
          This Competition is designed to help those who have not yet subscribed to our service by 
          giving them a chance to win a free one day subscription and the opportunity to earn money
        </p>

        {/* CTA Button */}
        <a
          href="https://t.me/martinx_channel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary animate-pulse-glow inline-flex items-center gap-3 text-lg animate-fade-in animation-delay-300"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={20} />
          <span>Join Channel Now</span>
          <Icon name="ArrowRightIcon" size={20} />
        </a>
      </div>
    </section>
  )
}

export default ContestHero