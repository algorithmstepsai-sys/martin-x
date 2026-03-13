'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SubscriptionLoginProps {
  className?: string;
}

const SubscriptionLogin = ({ className = '' }: SubscriptionLoginProps) => {
  const [subscriptionId, setSubscriptionId] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!subscriptionId.trim()) {
      setError('Please enter your subscription ID');
      return;
    }

    setIsLoading(true);
    
    // Validate subscription ID format and show error for any ID
    setTimeout(() => {
      // Always show "wrong ID" error for any entered ID
      setError('wrong ID');
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSubscriptionId('');
    setUserName('');
    setError('');
  };

  return (
    <section className={`relative py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-md mx-auto">
          {/* Card Container */}
          <div className="glass-panel rounded-2xl p-8 border-2 border-primary/30">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                <Icon name="KeyIcon" size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                Subscription Login
              </h2>
              <p className="text-muted-foreground mb-2">
                Enter your subscription ID to access to control the subscription
              </p>
              <p className="text-sm text-muted-foreground/80">
                The identifier should be in this format <span className="font-mono text-secondary">SUB-Z0N3-4OXK-BL1M</span>
              </p>
            </div>

            {!isAuthenticated ? (
              // Login Form
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label 
                    htmlFor="subscriptionId" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subscription ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subscriptionId"
                      value={subscriptionId}
                      onChange={(e) => setSubscriptionId(e.target.value)}
                      placeholder="Enter your subscription ID"
                      className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all ${
                        error ? 'border-primary' : 'border-muted/30'
                      }`}
                      disabled={isLoading}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Icon name="IdentificationIcon" size={20} className="text-muted-foreground" />
                    </div>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-primary flex items-center gap-2">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-background font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,105,20,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="ArrowRightOnRectangleIcon" size={20} />
                      <span>Login</span>
                    </>
                  )}
                </button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have a subscription?{' '}
                  <a 
                    href="/subscription-plans" 
                    className="text-secondary hover:underline font-medium"
                  >
                    Get Started
                  </a>
                </div>
              </form>
            ) : (
              // Authenticated State
              <div className="space-y-6">
                <div className="bg-success/10 border-2 border-success/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                    <span className="text-success font-semibold">Authentication Successful</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-foreground font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">User:</span>
                      <span className="text-foreground font-medium">{userName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subscription ID:</span>
                      <span className="text-foreground font-mono text-xs">{subscriptionId}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="/subscription-plans"
                    className="flex items-center justify-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Icon name="CreditCardIcon" size={18} />
                    <span>My Plan</span>
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Icon name="ArrowLeftOnRectangleIcon" size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <Icon name="LockClosedIcon" size={14} className="inline mr-1" />
            Your subscription ID is encrypted and secure
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionLogin;