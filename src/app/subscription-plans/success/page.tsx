'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
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
      <main className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full animate-fade-in">
          {/* Success Card */}
          <div className="glass-panel p-12 rounded-3xl text-center border-2 border-secondary animate-zoom-in">
            {/* Success Icon */}
            <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Icon name="CheckCircleIcon" size={64} className="text-secondary" />
            </div>

            {/* Success Message */}
            <div className="mx-auto" style={{ maxWidth: '420px' }}>
              <p className="text-xl md:text-2xl leading-relaxed mb-4" style={{ color: '#8B6914', textShadow: '0 0 20px rgba(139, 105, 20, 0.4)' }}>
                Payment request is being processed
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: '#8B6914', textShadow: '0 0 20px rgba(139, 105, 20, 0.4)' }}>
                Your purchase has been successfully created
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => router?.push('/homepage')}
              className="w-full btn-primary py-4 text-lg font-semibold hover:scale-105 mb-4"
            >
              Back to Home
            </button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border animate-fade-in animation-delay-500">
              <p className="text-sm text-muted-foreground">
                Need help? Contact our support team on Telegram for immediate assistance
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Wait for Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Your payment is being verified. This usually takes just a few minutes
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="BellAlertIcon" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Receive Notification</h3>
              <p className="text-sm text-muted-foreground">
                You'll get a message on Telegram with your subscription details
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="RocketLaunchIcon" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Start Earning</h3>
              <p className="text-sm text-muted-foreground">
                Access the martin x Script and begin your betting journey
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}