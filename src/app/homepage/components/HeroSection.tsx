'use client';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative w-full bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[10%] xl:px-[15%]">
          <div className="flex flex-col items-center text-center pt-[15vh] pb-[15vh] lg:pt-[80px] lg:pb-[80px]">
            <div className="w-full max-w-4xl">
              <div className="h-20 bg-gray-800/20 rounded animate-pulse mb-6" />
              <div className="h-16 bg-gray-800/20 rounded animate-pulse mb-8" />
              <div className="h-14 bg-gray-800/20 rounded-full animate-pulse mx-auto w-64" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      {/* Enhanced Particle Density Behind Hero Headline */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Increased Particle Density for Hero Section */}
        <div className="absolute inset-0" style={{ opacity: 0.16 }}>
          {[...Array(35)]?.map((_, i) => (
            <div
              key={`hero-particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: 'radial-gradient(circle, #FFD700 0%, #D4AF37 50%, transparent 100%)',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.7), 0 0 15px rgba(212, 175, 55, 0.5)',
                left: `${Math.random() * 100}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `heroParticleFlow ${35 + Math.random() * 25}s infinite ease-in-out`,
                animationDelay: `${Math.random() * -15}s`,
                filter: 'blur(0.6px)',
                willChange: 'transform, opacity'
              }}
            />
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[10%] xl:px-[15%]">
        <div className="flex flex-col items-center text-center lg:pt-[80px] lg:pb-[80px] pt-[70px] pb-[35px]">
          <div className="w-full">
            {/* Headline with Enhanced Glow Behind for Contrast */}
            <h1 
              className="font-bold leading-tight mb-4 lg:mb-6 text-white"
              style={{
                fontSize: 'clamp(32px, 6vw, 36px)',
                letterSpacing: '-0.02em',
                textShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 0 60px rgba(255, 215, 0, 0.3), 0 4px 25px rgba(0, 0, 0, 0.6)',
                position: 'relative'
              }}
            >
              <span style={{
                position: 'relative',
                display: 'inline-block'
              }}>
                {/* Subtle Glow Behind Headline */}
                <span 
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                />
                Maximize Your Profits with Martin X
              </span>
            </h1>

            {/* Subheading with Fade-in Animation */}
            <p 
              className="text-gray-300 leading-relaxed mb-[4vw] lg:mb-[25px] max-w-2xl mx-auto animate-fadeIn"
              style={{
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                animationDuration: '1.5s'
              }}
            >
              Choose a plan, pay securely, and start earning instantly
            </p>

            {/* Call-to-Action Buttons - Stacked Vertically */}
            <div className="flex flex-col items-center gap-3 lg:gap-5">
              {/* Primary CTA: View Plans (Gold Button) */}
              <a
                href="/subscription-plans"
                className="w-full lg:w-auto inline-flex items-center justify-center px-8 lg:px-12 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 ease-in-out animate-floatPulse"
                style={{
                  boxShadow: isHoveredPrimary ? '0 0 25px rgba(212, 175, 55, 0.6)' : '0 0 0 rgba(212, 175, 55, 0)',
                  transform: isHoveredPrimary ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsHoveredPrimary(true)}
                onMouseLeave={() => setIsHoveredPrimary(false)}
              >
                View Plans
              </a>
              
              {/* Secondary CTA: Enter Free Contest (Outlined/Transparent Gold) */}
              <a
                href="/free-contest"
                className="w-full lg:w-auto inline-flex items-center justify-center px-8 lg:px-12 py-4 bg-transparent border-2 border-yellow-600 hover:border-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out"
                style={{
                  marginTop: 'clamp(12px, 3vw, 20px)',
                  boxShadow: isHoveredSecondary ? '0 0 20px rgba(212, 175, 55, 0.4)' : '0 0 0 rgba(212, 175, 55, 0)',
                  transform: isHoveredSecondary ? 'scale(1.03)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsHoveredSecondary(true)}
                onMouseLeave={() => setIsHoveredSecondary(false)}
              >
                Enter Free Contest
              </a>
            </div>

            {/* 3 Minimal Feature Highlights - Compact without Frames */}
            <div className="mt-8 lg:mt-10 flex flex-row items-center justify-center gap-3 lg:gap-4">
              {/* Item 1: Subscription Management */}
              <div 
                className="group flex flex-col items-center gap-1.5 px-3 py-3 transition-all duration-300"
                style={{
                  width: '120px',
                  height: '80px'
                }}
              >
                <svg 
                  className="transition-all duration-300 group-hover:brightness-125" 
                  width="24" 
                  height="24" 
                  fill="#D4AF37" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.6))'
                  }}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <span 
                  className="font-medium transition-all duration-300 group-hover:brightness-125 text-center leading-tight"
                  style={{
                    color: '#D4AF37',
                    textShadow: '0 0 6px rgba(212, 175, 55, 0.5)',
                    fontSize: '11px'
                  }}
                >
                  Subscription Management
                </span>
              </div>

              {/* Item 2: +4,000 Active Users */}
              <div 
                className="group flex flex-col items-center gap-1.5 px-3 py-3 transition-all duration-300"
                style={{
                  width: '120px',
                  height: '80px'
                }}
              >
                <svg 
                  className="transition-all duration-300 group-hover:brightness-125" 
                  width="24" 
                  height="24" 
                  fill="#D4AF37" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.6))'
                  }}
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <span 
                  className="font-medium transition-all duration-300 group-hover:brightness-125 text-center leading-tight"
                  style={{
                    color: '#D4AF37',
                    textShadow: '0 0 6px rgba(212, 175, 55, 0.5)',
                    fontSize: '11px'
                  }}
                >
                  +4,000 Active Users
                </span>
              </div>

              {/* Item 3: Secure Payment */}
              <div 
                className="group flex flex-col items-center gap-1.5 px-3 py-3 transition-all duration-300"
                style={{
                  width: '120px',
                  height: '80px'
                }}
              >
                <svg 
                  className="transition-all duration-300 group-hover:brightness-125" 
                  width="24" 
                  height="24" 
                  fill="#D4AF37" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.6))'
                  }}
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <span 
                  className="font-medium transition-all duration-300 group-hover:brightness-125 text-center leading-tight"
                  style={{
                    color: '#D4AF37',
                    textShadow: '0 0 6px rgba(212, 175, 55, 0.5)',
                    fontSize: '11px'
                  }}
                >
                  Secure Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatPulse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Hero-Specific Particle Flow */
        @keyframes heroParticleFlow {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(70px, -20px) scale(1.12);
            opacity: 0.7;
          }
          50% {
            transform: translate(140px, 15px) scale(0.88);
            opacity: 0.5;
          }
          75% {
            transform: translate(210px, -25px) scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: translate(280px, 0) scale(1);
            opacity: 0.4;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }

        .animate-floatPulse {
          animation: floatPulse 3s ease-in-out infinite;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;