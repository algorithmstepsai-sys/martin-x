'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [subscriptionId, setSubscriptionId] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleConfirm = () => {
    if (!subscriptionId.trim()) return
    
    // Disable button and show loading
    setIsLoading(true)
    setError('')
    
    // After 1.5 seconds, show error
    setTimeout(() => {
      setIsLoading(false)
      setError('Invalid Subscription ID. Please try again.')
    }, 1500)
  }

  const handleClose = () => {
    setSubscriptionId('')
    setError('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fadeIn"
        onClick={handleClose}
      />
      
      {/* Modal Container with Scale Animation */}
      <div className="relative w-full max-w-[420px] mx-4 animate-modalScaleIn">
        {/* Gold Particle Galaxy Background Inside Modal */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          {/* Deep Black Base */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/20" />
          </div>

          {/* Subtle Vignette Around Edges */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.6) 100%)'
            }}
          />

          {/* Gold Particle Animation - Very Low Opacity */}
          <div className="absolute inset-0" style={{ opacity: 0.08 }}>
            {[...Array(12)]?.map((_, i) => (
              <div
                key={`modal-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${2 + Math.random() * 2.5}px`,
                  height: `${2 + Math.random() * 2.5}px`,
                  background: 'radial-gradient(circle, #FFD700 0%, #D4AF37 50%, transparent 100%)',
                  boxShadow: '0 0 8px rgba(255, 215, 0, 0.6), 0 0 12px rgba(212, 175, 55, 0.4)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `modalParticleDrift ${40 + Math.random() * 30}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * -20}s`,
                  filter: 'blur(0.5px)',
                  willChange: 'transform, opacity'
                }}
              />
            ))}
          </div>

          {/* Additional Slow Particles */}
          <div className="absolute inset-0" style={{ opacity: 0.10 }}>
            {[...Array(8)]?.map((_, i) => (
              <div
                key={`modal-particle-slow-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${2.5 + Math.random() * 3}px`,
                  height: `${2.5 + Math.random() * 3}px`,
                  background: 'radial-gradient(circle, #D4AF37 0%, #FFD700 40%, transparent 100%)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.7), 0 0 15px rgba(255, 215, 0, 0.3)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `modalParticleFloat ${60 + Math.random() * 40}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * -30}s`,
                  filter: 'blur(0.8px)',
                  willChange: 'transform, opacity'
                }}
              />
            ))}
          </div>
        </div>

        {/* Modal Content with Glass Effect */}
        <div className="relative rounded-2xl p-8 shadow-2xl" style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>

          {/* Title with Gold Glow */}
          <h2 className="text-2xl font-bold text-white mb-8 text-center" style={{
            textShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)',
            letterSpacing: '0.5px'
          }}>
            Login to Your Subscription
          </h2>

          {/* Input Field */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3" style={{
              color: '#D4AF37',
              letterSpacing: '0.3px'
            }}>
              Subscription ID
            </label>
            <input
              type="text"
              value={subscriptionId}
              onChange={(e) => {
                setSubscriptionId(e.target.value)
                setError('')
              }}
              placeholder="Enter your subscription ID"
              className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.01] ${error ? 'animate-shake' : ''}`}
              style={{
                background: 'rgba(20, 20, 20, 0.8)',
                border: error ? '1px solid rgba(239, 68, 68, 0.6)' : '1px solid rgba(100, 100, 100, 0.3)',
                color: '#ffffff',
                outline: 'none',
                boxShadow: error 
                  ? '0 0 0 3px rgba(239, 68, 68, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                  : 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
              onFocus={(e) => {
                if (!error) {
                  e.target.style.border = '1px solid rgba(212, 175, 55, 0.6)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1), inset 0 0 8px rgba(212, 175, 55, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.target.style.border = '1px solid rgba(100, 100, 100, 0.3)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                }
              }}
            />
            {error && (
              <p className="text-sm mt-2 font-semibold animate-errorFadeIn" style={{
                color: 'rgba(239, 68, 68, 0.9)'
              }}>
                {error}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            {/* Confirm Button - Gold Gradient */}
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                color: '#000000',
                boxShadow: isLoading 
                  ? '0 0 30px rgba(212, 175, 55, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4)'
                  : '0 0 20px rgba(212, 175, 55, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                opacity: isLoading ? 0.95 : 1,
                animation: isLoading ? 'pulseGlow 1.5s ease-in-out infinite' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)';
                }
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin" style={{
                    width: '20px',
                    height: '20px',
                    border: '3px solid rgba(0, 0, 0, 0.2)',
                    borderTop: '3px solid #000000',
                    borderRadius: '50%'
                  }} />
                </div>
              ) : (
                'Confirm'
              )}
            </button>

            {/* Close Button - Dark Gray */}
            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'rgba(60, 60, 60, 0.8)',
                color: '#ffffff',
                border: '1px solid rgba(100, 100, 100, 0.3)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(80, 80, 80, 0.9)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(60, 60, 60, 0.8)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Modal Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalScaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes errorFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.8), 0 8px 25px rgba(0, 0, 0, 0.5);
          }
        }

        .animate-errorFadeIn {
          animation: errorFadeIn 0.3s ease-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        /* Slow Cinematic Particle Drift */
        @keyframes modalParticleDrift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(60px, -12px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(120px, 8px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(180px, -15px) scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: translate(240px, 0) scale(1);
            opacity: 0.3;
          }
        }

        /* Elegant Golden Particle Float */
        @keyframes modalParticleFloat {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          33% {
            transform: translate(40px, -20px) scale(1.12);
            opacity: 0.5;
          }
          66% {
            transform: translate(80px, 15px) scale(0.88);
            opacity: 0.35;
          }
          100% {
            transform: translate(120px, -8px) scale(1);
            opacity: 0.25;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-modalScaleIn {
          animation: modalScaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* GPU Acceleration */
        @media (prefers-reduced-motion: no-preference) {
          [style*="modalParticle"] {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }
      `}</style>
    </div>
  )
}

export default LoginModal