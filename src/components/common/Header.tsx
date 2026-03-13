'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'nav_home', label: 'Home', href: '/homepage' },
    { id: 'nav_contest', label: 'Free Subscription\'s', href: '/free-contest' },
    { id: 'nav_subscriptions', label: 'Plans', href: '/subscription-plans' },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center gap-3 group">
              <div className="relative">
                {/* 3D 4K Quality Logo with Enhanced Effects */}
                <div className="relative w-16 h-16 transition-all duration-300 group-hover:scale-110">
                  {/* Glow effect layers for 3D depth */}
                  <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl animate-pulse-glow"></div>
                  <div className="absolute inset-0 bg-secondary/10 rounded-lg blur-2xl"></div>
                  
                  {/* Logo container without border/frame */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/assets/images/logo2_17_181150-1771344765358.png"
                      alt="martin x Community Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(139, 105, 20, 0.6)) contrast(1.1) brightness(1.05)',
                        imageRendering: 'crisp-edges'
                      }}
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 glass-panel px-2 py-2 rounded-full">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-secondary text-secondary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Login Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold transition-all duration-300 hover:scale-105 glow-gold"
            >
              <span>Login</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="glass-panel border-t border-border">
              <nav className="px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-secondary text-secondary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsLoginModalOpen(true)
                  }}
                  className="block w-full text-center px-4 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold transition-all duration-300 mt-4"
                >
                  Login
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  )
}

export default Header