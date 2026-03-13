'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface CryptoOption {
  id: string;
  name: string;
  network: string;
  address: string;
  icon: string;
}

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<{telegram?: string;crypto?: string;screenshot?: string;}>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const planName = searchParams.get('plan') || 'One-Day';
  const price = searchParams.get('price') || '27.39';
  const originalPrice = searchParams.get('originalPrice') || '249';

  const cryptoOptions: CryptoOption[] = [
  {
    id: 'btc',
    name: 'BTC',
    network: 'Bitcoin Network',
    address: 'bc1qjkp58k9hymmgf0hq6zt5hw8wxpt5fnsqxkq0d0',
    icon: '/assets/images/btc-1771078013744.png'
  },
  {
    id: 'usdt_trc20',
    name: 'USDT (TRC20)',
    network: 'Tron Network',
    address: 'TYRFHH5PbarqzcmyaG3U5gGSu8GHyAEUWQ',
    icon: '/assets/images/USDT_Logo-1771121257228.png'
  },
  {
    id: 'usdt_bep20',
    name: 'USDT (BEP20)',
    network: 'BSC Network',
    address: '0xe3b920df66cecd673cdcfa0e8bdf850f7183f3b4',
    icon: '/assets/images/USDT_Logo-1771121257228.png'
  },
  {
    id: 'sol',
    name: 'SOL',
    network: 'Solana Network',
    address: 'DEDcZwpEYyMzBnusjEnk7PRR8ho9My374c5gcvXUv5L2',
    icon: '/assets/images/Solana_logo-1771078994142.png'
  },
  {
    id: 'eth',
    name: 'ETH',
    network: 'Ethereum Network',
    address: '0xe3b920df66cecd673cdcfa0e8bdf850f7183f3b4',
    icon: '/assets/images/eth-1771121137629.png'
  }];


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setErrors((prev) => ({ ...prev, screenshot: undefined }));
    }
  };

  const copyToClipboard = (address: string, id: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const validateTelegram = (username: string) => {
    if (!username) return 'Telegram username is required';
    if (!username.startsWith('@')) return 'Telegram username must start with @';
    const validPattern = /^@[a-zA-Z0-9_]+$/;
    if (!validPattern.test(username)) return 'Only letters, numbers, and underscores allowed. No spaces.';
    return null;
  };

  const validateForm = () => {
    const newErrors: {telegram?: string;crypto?: string;screenshot?: string;} = {};

    const telegramError = validateTelegram(telegramUsername);
    if (telegramError) {
      newErrors.telegram = telegramError;
    }

    if (!selectedCrypto) {
      newErrors.crypto = 'Please select a currency/network';
    }

    if (!screenshot) {
      newErrors.screenshot = 'Please upload payment screenshot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowConfirmation(true);
      }, 1500);
    }
  };

  const handleConfirmationOk = () => {
    router.push('/subscription-plans');
  };

  const handleCryptoSelect = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
    setIsDropdownOpen(false);
    setErrors((prev) => ({ ...prev, crypto: undefined }));
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const selectedCryptoData = cryptoOptions.find((c) => c.id === selectedCrypto);

  if (showConfirmation) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-20 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-6 animate-slide-in">
            <div className="glass-panel p-12 rounded-2xl text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="CheckCircleIcon" size={48} className="text-secondary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Payment Submitted Successfully
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">Your payment is under verification and access will be sent to your Telegram within 1–12 hours Make sure your Telegram username is correct Manual verification ensures your payment is safe

              </p>
              <button
                onClick={handleConfirmationOk}
                className="px-12 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg transition-all duration-300 hover:scale-105 glow-gold">

                OK
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>);

  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 animate-slide-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight mb-6 text-foreground">
              Complete Your <span className="text-gradient-gold">Payment</span>
            </h1>
          </div>

          {/* Selected Plan Summary */}
          <div className="glass-panel p-6 rounded-2xl mb-8 border-2 border-secondary">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Selected Plan</div>
                <div className="text-2xl font-heading font-bold text-foreground">{planName}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground line-through mb-1">${originalPrice}</div>
                <div className="text-3xl font-heading font-bold text-gradient-gold">${price}</div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="glass-panel p-8 rounded-2xl space-y-8">
            {/* Cryptocurrency Selection Dropdown */}
            <div className="animate-fade-in">
              <label className="block text-lg font-heading font-semibold text-foreground mb-4">
                Select Currency / Network *
              </label>
              <div className="relative dropdown-container">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                  errors.crypto ?
                  'border-error glow-gold' :
                  selectedCrypto ?
                  'border-secondary bg-secondary/10' : 'border-border hover:border-secondary/50'}`
                  }>

                  <div className="flex items-center gap-3">
                    {selectedCryptoData ?
                    <>
                        <div
                        className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden"
                        style={{ boxShadow: '0 0 8px rgba(139, 105, 20, 0.4)' }}>

                          <Image
                          src={selectedCryptoData.icon}
                          alt={selectedCryptoData.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover rounded-full"
                          priority />

                        </div>
                        <span className="text-foreground font-semibold">{selectedCryptoData.name}</span>
                      </> :

                    <span className="text-muted-foreground">Select Currency</span>
                    }
                  </div>
                  <Icon
                    name="ChevronDownIcon"
                    size={20}
                    className={`text-secondary transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''}`
                    } />

                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen &&
                <div className="absolute z-50 w-full mt-2 bg-background border-2 border-secondary rounded-lg shadow-2xl overflow-hidden animate-fade-in">
                    {cryptoOptions.map((crypto) =>
                  <button
                    key={crypto.id}
                    type="button"
                    onClick={() => handleCryptoSelect(crypto.id)}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-secondary/10 transition-all duration-300 border-b border-border last:border-b-0">

                        <div
                      className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden"
                      style={{ boxShadow: '0 0 8px rgba(139, 105, 20, 0.4)' }}>

                          <Image
                        src={crypto.icon}
                        alt={crypto.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover rounded-full"
                        priority />

                        </div>
                        <div className="text-left">
                          <div className="text-sm font-semibold text-foreground">{crypto.name}</div>
                          <div className="text-xs text-muted-foreground">{crypto.network}</div>
                        </div>
                      </button>
                  )}
                  </div>
                }
              </div>
              {errors.crypto &&
              <p className="text-sm text-error mt-2 animate-fade-in">{errors.crypto}</p>
              }
            </div>

            {/* Wallet Address Display */}
            {selectedCryptoData &&
            <div className="animate-fade-in">
                <label className="block text-lg font-heading font-semibold text-foreground mb-4">
                  Wallet Address
                </label>
                <div className="bg-muted/30 p-4 rounded-xl border border-border">
                  <div className="text-xs text-muted-foreground mb-2">
                    Copy the address and complete the transfer for the exact amount.
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                    type="text"
                    value={selectedCryptoData.address}
                    readOnly
                    className="flex-1 bg-background text-sm text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary" />

                    <button
                    onClick={() => copyToClipboard(selectedCryptoData.address, selectedCryptoData.id)}
                    className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary text-secondary hover:text-secondary-foreground transition-all duration-300 glow-gold"
                    aria-label="Copy address">

                      <Icon
                      name={copiedId === selectedCryptoData.id ? 'CheckIcon' : 'ClipboardDocumentIcon'}
                      size={20} />

                    </button>
                  </div>
                  <div className="bg-error/10 border border-error/30 rounded-lg p-3">
                    <p className="text-xs text-error font-semibold">
                      ⚠️ Make sure to send via the correct network. Wrong network transactions are lost permanently.
                    </p>
                  </div>
                </div>
              </div>
            }

            {/* Telegram Username */}
            <div className="animate-fade-in animation-delay-100">
              <label className="block text-lg font-heading font-semibold text-foreground mb-4">
                Telegram Username *
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => {
                  setTelegramUsername(e.target.value);
                  setErrors((prev) => ({ ...prev, telegram: undefined }));
                }}
                placeholder="@yourusername"
                className={`w-full bg-background text-foreground px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                errors.telegram ?
                'border-error glow-gold' : 'border-border focus:border-secondary'}`
                } />

              {errors.telegram &&
              <p className="text-sm text-error mt-2 animate-fade-in">{errors.telegram}</p>
              }
              <p className="text-xs text-muted-foreground mt-2">
                Must start with @, only letters, numbers, underscores allowed, no spaces.
              </p>
            </div>

            {/* Screenshot Upload */}
            <div className="animate-fade-in animation-delay-200">
              <label className="block text-lg font-heading font-semibold text-foreground mb-4">
                Upload Payment Screenshot *
              </label>
              <div
                className={`border-2 border-dashed rounded-xl p-6 transition-all duration-300 ${
                errors.screenshot ?
                'border-error glow-gold' : 'border-border hover:border-secondary'}`
                }>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="screenshot-upload" />

                <label
                  htmlFor="screenshot-upload"
                  className="flex flex-col items-center justify-center cursor-pointer">

                  {previewUrl ?
                  <div className="w-full">
                      <img
                      src={previewUrl}
                      alt="Payment screenshot preview"
                      className="w-full h-48 object-contain rounded-lg mb-4" />

                      <p className="text-sm text-center text-muted-foreground">
                        Click to change screenshot
                      </p>
                    </div> :

                  <>
                      <Icon name="CloudArrowUpIcon" size={48} className="text-secondary mb-4" />
                      <p className="text-sm text-foreground font-semibold mb-2">
                        Click to upload payment screenshot
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                    </>
                  }
                </label>
              </div>
              {errors.screenshot &&
              <p className="text-sm text-error mt-2 animate-fade-in">{errors.screenshot}</p>
              }
            </div>

            {/* Confirm Payment Button */}
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className="w-full py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg transition-all duration-300 hover:scale-105 glow-gold animate-fade-in animation-delay-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">

              {isLoading ?
              <div className="w-6 h-6 border-3 border-secondary-foreground border-t-transparent rounded-full animate-spin"></div> :

              'Confirm Payment'
              }
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>);

}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <PaymentContent />
    </Suspense>);

}