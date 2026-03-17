'use client';

import { useEffect, useState } from 'react';

const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-accent"
    style={{
      ...style,
      animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 3}s`,
    }}
  />
);

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 89;
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isVisible]);

  const sparklePositions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '8%' },
    { top: '70%', left: '12%' },
    { top: '80%', right: '5%' },
    { top: '15%', left: '40%' },
    { top: '85%', right: '35%' },
    { top: '50%', left: '3%' },
    { top: '45%', right: '3%' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Outer animated gradient border */}
      <div className="relative rounded-2xl p-[2px] animate-border-rotate bg-gradient-to-r from-secondary via-accent to-secondary overflow-hidden">
        {/* Inner container */}
        <div className="relative rounded-2xl bg-black/95 overflow-hidden">
          {/* Shimmer sweep overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-shimmer-sweep" />
          </div>

          {/* Sparkle particles */}
          {sparklePositions.map((pos, i) => (
            <Sparkle key={i} style={pos} />
          ))}

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-6 py-10 md:py-12 text-center">
            {/* Top label */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/40 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80 mb-6">
                Limited Offer
              </span>
            </div>

            {/* Main headline */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground/80 tracking-wide uppercase mb-2">
                First Purchase Discount
              </h2>
            </div>

            {/* Big discount number */}
            <div
              className={`flex items-baseline justify-center gap-1 my-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <span className="text-7xl md:text-8xl font-heading font-black text-gradient-gold leading-none animate-float-drift">
                {count}%
              </span>
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent ml-2">
                OFF
              </span>
            </div>

            {/* Decorative line */}
            <div
              className={`flex items-center justify-center gap-3 my-5 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary" />
            </div>

            {/* Subtitle */}
            <p
              className={`text-sm text-muted-foreground max-w-md mx-auto transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Applied automatically on your first purchase. Standard pricing on renewals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
