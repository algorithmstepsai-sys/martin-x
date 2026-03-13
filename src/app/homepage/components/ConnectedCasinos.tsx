'use client';
import { useState } from 'react';

interface CasinoCard {
  name: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

const casinos: CasinoCard[] = [
  {
    name: '1xBet',
    primaryButton: {
      text: 'Register on 1xBet',
      url: 'https://refpa14435.com/L?tag=d_3532712m_1573c_&site=3532712&ad=1573'
    },
    secondaryButton: {
      text: 'Download 1xBet App',
      url: 'https://refpa14435.com/L?tag=d_3532712m_4129c_&site=3532712&ad=4129'
    }
  },
  {
    name: 'Linebet',
    primaryButton: {
      text: 'Register on Linebet',
      url: 'https://lb-aff.com/L?tag=d_3527696m_22611c_&site=3527696&ad=22611'
    },
    secondaryButton: {
      text: 'Download Linebet App',
      url: 'https://lb-aff.com/L?tag=d_3527696m_66803c_&site=3527696&ad=66803'
    }
  }
];

const ConnectedCasinos = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPrimary, setHoveredPrimary] = useState<number | null>(null);
  const [hoveredSecondary, setHoveredSecondary] = useState<number | null>(null);

  return (
    <section className="relative w-full py-[8vw] lg:py-[60px] px-6 lg:px-[10%] xl:px-[15%]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="reveal mb-[6vw] lg:mb-[40px] text-center">
          <h2 
            className="font-bold text-white mb-3"
            style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              letterSpacing: '-0.02em',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 2px 15px rgba(0, 0, 0, 0.5)'
            }}
          >
            Connected Casinos
          </h2>
          {/* Gold Accent Line */}
          <div 
            className="h-[2px] w-[80px] mx-auto"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
              boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)'
            }}
          />
        </div>

        {/* Casino Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] lg:gap-[30px]">
          {casinos.map((casino, index) => (
            <div
              key={casino.name}
              className="reveal"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                className="relative p-[6vw] lg:p-[40px] rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.85) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: hoveredCard === index ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
                  boxShadow: hoveredCard === index 
                    ? '0 0 30px rgba(212, 175, 55, 0.4), 0 10px 40px rgba(0, 0, 0, 0.6)'
                    : '0 0 15px rgba(212, 175, 55, 0.2), 0 5px 20px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Casino Name */}
                <h3 
                  className="font-bold text-white mb-[4vw] lg:mb-[25px] text-center"
                  style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    letterSpacing: '-0.01em',
                    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {casino.name}
                </h3>

                {/* Primary Button */}
                <a
                  href={casino.primaryButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-[3vw] lg:mb-[15px]"
                  onMouseEnter={() => setHoveredPrimary(index)}
                  onMouseLeave={() => setHoveredPrimary(null)}
                >
                  <button
                    className="w-full py-[3.5vw] lg:py-[14px] px-6 rounded-lg font-semibold text-black"
                    style={{
                      background: hoveredPrimary === index
                        ? 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)'
                        : 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      boxShadow: hoveredPrimary === index
                        ? '0 0 25px rgba(255, 215, 0, 0.6), 0 5px 20px rgba(212, 175, 55, 0.4)'
                        : '0 0 15px rgba(212, 175, 55, 0.4)',
                      transform: hoveredPrimary === index ? 'scale(1.03)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {casino.primaryButton.text}
                  </button>
                </a>

                {/* Secondary Button */}
                <a
                  href={casino.secondaryButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onMouseEnter={() => setHoveredSecondary(index)}
                  onMouseLeave={() => setHoveredSecondary(null)}
                >
                  <button
                    className="w-full py-[3vw] lg:py-[12px] px-6 rounded-lg font-medium"
                    style={{
                      background: 'transparent',
                      border: '1.5px solid',
                      borderColor: hoveredSecondary === index ? '#FFD700' : '#D4AF37',
                      color: hoveredSecondary === index ? '#FFD700' : '#D4AF37',
                      fontSize: 'clamp(13px, 3vw, 15px)',
                      boxShadow: hoveredSecondary === index
                        ? '0 0 20px rgba(255, 215, 0, 0.3)'
                        : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {casino.secondaryButton.text}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Animation Styles */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ConnectedCasinos;