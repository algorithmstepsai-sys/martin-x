import Link from 'next/link';
 import Icon from'@/components/ui/AppIcon';

const Footer = () => {
  const platformLinks = [
    { id: 'footer_browse', label: 'support', href: 'https://t.me/martin_x_official' },
    { id: 'footer_faqs', label: 'FAQs', href: '/homepage#faqs' },
    { id: 'footer_contest', label: 'Free Contest', href: '/free-contest' },
    { id: 'footer_subscriptions', label: 'Subscriptions', href: '/subscription-plans' },
  ]

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks?.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted-foreground">
            © 2026 martin x. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/martinx_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Telegram"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer