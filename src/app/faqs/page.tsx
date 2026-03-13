'use client';
import { useEffect } from 'react';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FAQSection from './components/FAQSection';

export default function FAQsPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals?.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}