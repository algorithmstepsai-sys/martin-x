'use client';
import { useEffect, useState } from 'react';

import Header from'@/components/common/Header';
import Footer from'@/components/common/Footer';
import HeroSection from'./components/HeroSection';
import ConnectedCasinos from'./components/ConnectedCasinos';
import ImportantWarning from'./components/ImportantWarning';
import FinalCTA from'./components/FinalCTA';
import FAQSection from'./components/FAQSection';

// Generate floating logo positions
const generateLogoParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `logo-${i}`,
    size: 20 + Math.random() * 30, // 20px to 50px
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 50 + Math.random() * 40,
    delay: Math.random() * -30,
    opacity: 0.04 + Math.random() * 0.06, // very subtle: 0.04 to 0.10
    rotation: Math.random() * 360,
  }));
};

// Generate particle data once to avoid hydration mismatch
const generateParticles = (count: number, layer: string) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${layer}-${i}`,
    width: 2 + Math.random() * 3,
    height: 2 + Math.random() * 3,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 40 + Math.random() * 30,
    delay: Math.random() * -20,
    blur: 0.5
  }));
};

const generateParticlesLayer2 = (count: number, layer: string) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${layer}-${i}`,
    width: 2.5 + Math.random() * 3.5,
    height: 2.5 + Math.random() * 3.5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 50 + Math.random() * 35,
    delay: Math.random() * -25,
    blur: 0.8
  }));
};

const generateParticlesLayer3 = (count: number, layer: string) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${layer}-${i}`,
    width: 3 + Math.random() * 4,
    height: 3 + Math.random() * 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 60 + Math.random() * 40,
    delay: Math.random() * -30,
    blur: 1
  }));
};

export default function Homepage() {
  const [particles, setParticles] = useState<{
    layer1: ReturnType<typeof generateParticles>;
    layer2: ReturnType<typeof generateParticlesLayer2>;
    layer3: ReturnType<typeof generateParticlesLayer3>;
    logos: ReturnType<typeof generateLogoParticles>;
  } | null>(null);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles({
      layer1: generateParticles(25, 'wave1'),
      layer2: generateParticlesLayer2(20, 'wave2'),
      layer3: generateParticlesLayer3(15, 'depth'),
      logos: generateLogoParticles(12)
    });

    const reveals = document.querySelectorAll('.reveal')
    if (!reveals?.length) return

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    )
    reveals?.forEach((el) => observer?.observe(el))

    return () => observer?.disconnect();
  }, [])

  return (
    <>
      <Header />
      {/* Gold Particle Galaxy Background - Applied Across All Sections */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Black Base with Subtle Gradient */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-yellow-800/3" />
        </div>

        {/* Subtle Vignette Effect on Page Edges */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.4) 100%)'
          }}
        />

        {/* Gold Particle Galaxy - Wave Flow Pattern */}
        {particles && (
          <>
            {/* Layer 1: Horizontal Wave Flow */}
            <div className="absolute inset-0" style={{ opacity: 0.12 }}>
              {particles.layer1.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    background: 'radial-gradient(circle, #FFD700 0%, #D4AF37 50%, transparent 100%)',
                    boxShadow: '0 0 8px rgba(255, 215, 0, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)',
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `galaxyWaveHorizontal ${particle.duration}s infinite ease-in-out`,
                    animationDelay: `${particle.delay}s`,
                    filter: `blur(${particle.blur}px)`,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </div>

            {/* Layer 2: Diagonal Wave Flow */}
            <div className="absolute inset-0" style={{ opacity: 0.14 }}>
              {particles.layer2.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    background: 'radial-gradient(circle, #D4AF37 0%, #FFD700 40%, transparent 100%)',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.7), 0 0 15px rgba(255, 215, 0, 0.3)',
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `galaxyWaveDiagonal ${particle.duration}s infinite ease-in-out`,
                    animationDelay: `${particle.delay}s`,
                    filter: `blur(${particle.blur}px)`,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </div>

            {/* Layer 3: Depth Parallax Effect - Slower Particles */}
            <div className="absolute inset-0" style={{ opacity: 0.10 }}>
              {particles.layer3.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    background: 'radial-gradient(circle, #FFD700 0%, #D4AF37 30%, transparent 100%)',
                    boxShadow: '0 0 12px rgba(255, 215, 0, 0.5), 0 0 18px rgba(212, 175, 55, 0.3)',
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `galaxyDepthParallax ${particle.duration}s infinite ease-in-out`,
                    animationDelay: `${particle.delay}s`,
                    filter: `blur(${particle.blur}px)`,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Floating Logo Background Layer */}
        {particles && (
          <div className="absolute inset-0">
            {particles.logos.map((logo) => (
              <img
                key={logo.id}
                src="/assets/images/logo2_17_181150-1771344765358.png"
                alt=""
                aria-hidden="true"
                className="absolute"
                style={{
                  width: `${logo.size}px`,
                  height: `${logo.size}px`,
                  left: `${logo.left}%`,
                  top: `${logo.top}%`,
                  opacity: logo.opacity,
                  animation: `floatingLogo ${logo.duration}s infinite ease-in-out`,
                  animationDelay: `${logo.delay}s`,
                  filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.3))',
                  transform: `rotate(${logo.rotation}deg)`,
                  willChange: 'transform, opacity',
                  objectFit: 'contain',
                }}
              />
            ))}
          </div>
        )}

        {/* Subtle Fade Transitions Between Sections */}
        <div 
          className="absolute left-0 right-0 h-32 pointer-events-none"
          style={{
            top: '100vh',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
          }}
        />
      </div>
      <main className="relative z-10 min-h-screen pt-24">
        <HeroSection />
        <ConnectedCasinos />
        <FinalCTA />
        <ImportantWarning />
        <FAQSection />
        <Footer />
      </main>
      {/* Gold Particle Galaxy Animation Styles */}
      <style jsx global>{`
        /* Horizontal Wave Flow - Very Slow Cinematic Drift */
        @keyframes galaxyWaveHorizontal {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(80px, -15px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(150px, 10px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(220px, -20px) scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: translate(300px, 0) scale(1);
            opacity: 0.3;
          }
        }

        /* Diagonal Wave Flow - Smooth Galaxy Motion */
        @keyframes galaxyWaveDiagonal {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.35;
          }
          20% {
            transform: translate(60px, 40px) rotate(5deg) scale(1.08);
            opacity: 0.55;
          }
          40% {
            transform: translate(120px, 80px) rotate(-3deg) scale(0.95);
            opacity: 0.45;
          }
          60% {
            transform: translate(180px, 120px) rotate(4deg) scale(1.02);
            opacity: 0.5;
          }
          80% {
            transform: translate(240px, 160px) rotate(-2deg) scale(0.98);
            opacity: 0.4;
          }
          100% {
            transform: translate(300px, 200px) rotate(0deg) scale(1);
            opacity: 0.35;
          }
        }

        /* Depth Parallax Effect - Slowest Layer */
        @keyframes galaxyDepthParallax {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          33% {
            transform: translate(50px, -30px) scale(1.15);
            opacity: 0.5;
          }
          66% {
            transform: translate(100px, 20px) scale(0.85);
            opacity: 0.35;
          }
          100% {
            transform: translate(150px, -10px) scale(1);
            opacity: 0.25;
          }
        }

        /* GPU Acceleration for Smooth 60fps */
        @media (prefers-reduced-motion: no-preference) {
          [style*="galaxyWave"],
          [style*="galaxyDepth"],
          [style*="floatingLogo"] {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }

        /* Floating Logo Animation - Gentle Drift & Rotate */
        @keyframes floatingLogo {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.04;
          }
          15% {
            transform: translate(30px, -20px) rotate(15deg) scale(1.05);
            opacity: 0.08;
          }
          30% {
            transform: translate(70px, 10px) rotate(-10deg) scale(0.95);
            opacity: 0.06;
          }
          50% {
            transform: translate(120px, -30px) rotate(20deg) scale(1.08);
            opacity: 0.09;
          }
          70% {
            transform: translate(80px, 20px) rotate(-5deg) scale(0.97);
            opacity: 0.05;
          }
          85% {
            transform: translate(40px, -10px) rotate(10deg) scale(1.03);
            opacity: 0.07;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.04;
          }
        }

        /* Responsive Optimization */
        @media (max-width: 768px) {
          @keyframes galaxyWaveHorizontal {
            0% {
              transform: translate(0, 0) scale(0.8);
              opacity: 0.3;
            }
            50% {
              transform: translate(100px, 5px) scale(0.9);
              opacity: 0.5;
            }
            100% {
              transform: translate(200px, 0) scale(0.8);
              opacity: 0.3;
            }
          }

          @keyframes galaxyWaveDiagonal {
            0% {
              transform: translate(0, 0) scale(0.8);
              opacity: 0.35;
            }
            50% {
              transform: translate(120px, 80px) scale(0.95);
              opacity: 0.5;
            }
            100% {
              transform: translate(200px, 150px) scale(0.8);
              opacity: 0.35;
            }
          }

          @keyframes floatingLogo {
            0% {
              transform: translate(0, 0) rotate(0deg) scale(0.8);
              opacity: 0.03;
            }
            50% {
              transform: translate(60px, -15px) rotate(10deg) scale(0.9);
              opacity: 0.06;
            }
            100% {
              transform: translate(0, 0) rotate(0deg) scale(0.8);
              opacity: 0.03;
            }
          }
        }
      `}</style>
    </>
  );
}