'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

interface CryptoWallet {
  id: string
  name: string
  blockchain: string
  address: string
  icon: string
}

const SubscriptionProcess = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const wallets: CryptoWallet[] = [
    {
      id: 'wallet_btc',
      name: 'Bitcoin',
      blockchain: 'BTC',
      address: 'bc1qjkp58k9hymmgf0hq6zt5hw8wxpt5fnsqxkq0d0',
      icon: 'CurrencyDollarIcon',
    },
    {
      id: 'wallet_usdt_trc20',
      name: 'USDT (TRC20)',
      blockchain: 'Tron',
      address: 'TYRFHH5PbarqzcmyaG3U5gGSu8GHyAEUWQ',
      icon: 'BanknotesIcon',
    },
    {
      id: 'wallet_usdt_bep20',
      name: 'USDT (BEP20)',
      blockchain: 'BSC',
      address: '0xe3b920df66cecd673cdcfa0e8bdf850f7183f3b4',
      icon: 'BanknotesIcon',
    },
    {
      id: 'wallet_sol',
      name: 'Solana',
      blockchain: 'SOL',
      address: 'DEDcZwpEYyMzBnusjEnk7PRR8ho9My374c5gcvXUv5L2',
      icon: 'public/assets/images/logo2_17_181150-1771344765358.png',
    },
  ]

  const copyToClipboard = (address: string, id: string) => {
    navigator.clipboard.writeText(address)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="py-28 bg-gradient-to-b from-background to-primary/5 reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              Subscription Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight mb-6 text-foreground">
            How to Purchase
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Follow these simple steps to activate your subscription and start earning
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
              <span className="text-xl font-heading font-bold text-secondary group-hover:text-secondary-foreground">
                1
              </span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Select a Plan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose the subscription tier that best fits your needs (One-day, One-week, or One-month)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
              <span className="text-xl font-heading font-bold text-secondary group-hover:text-secondary-foreground">
                2
              </span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Select Cryptocurrency
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Choose your preferred payment method from the options below and copy the wallet address.
              </p>

              {/* Wallet Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wallets.map((wallet) => (
                  <div
                    key={wallet.id}
                    className="glass-panel p-4 rounded-xl hover:border-secondary transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name={wallet.icon as any} size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{wallet.name}</div>
                        <div className="text-xs text-muted-foreground">{wallet.blockchain}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={wallet.address}
                        readOnly
                        className="flex-1 bg-muted/50 text-xs text-muted-foreground px-3 py-2 rounded-lg border border-border focus:outline-none"
                      />
                      <button
                        onClick={() => copyToClipboard(wallet.address, wallet.id)}
                        className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary text-secondary hover:text-secondary-foreground transition-colors duration-300"
                        aria-label="Copy address"
                      >
                        <Icon
                          name={copiedId === wallet.id ? 'CheckIcon' : 'ClipboardDocumentIcon'}
                          size={18}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
              <span className="text-xl font-heading font-bold text-secondary group-hover:text-secondary-foreground">
                3
              </span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Enter Telegram Username
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enter your Telegram username (starting with @) to receive your subscription activation code
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
              <span className="text-xl font-heading font-bold text-secondary group-hover:text-secondary-foreground">
                4
              </span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Confirm Payment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Add a screenshot of the payment process and press "Confirm". Verification takes place within 
                minutes of completing the transaction. The process requires one confirmation from our wallet 
                for automatic verification
              </p>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="glass-panel p-8 rounded-2xl text-center">
          <Icon name="QuestionMarkCircleIcon" size={48} className="text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            Need Help?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            If you encounter any problems during the purchase process, contact the official Telegram account 
            for immediate assistance
          </p>
          <a
            href="https://t.me/martinx_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionProcess