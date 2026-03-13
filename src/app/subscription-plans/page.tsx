'use client';
import { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import OfferBanner from './components/OfferBanner';
import PricingCards from './components/PricingCards';

export default function SubscriptionPlans() {
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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-[120px] pb-5">
          <div className="absolute inset-0 z-0 pt-0 mb-[60px]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background mb-[60px] pb-0" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-px">
            <OfferBanner />
          </div>
        </section>

        <PricingCards />
      </main>
      <Footer />
    </>
  )
}