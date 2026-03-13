'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: string;
  icon: string;
  title: string;
  content: string;
  tips?: string[];
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq_legality',
      icon: 'ShieldCheckIcon',
      title: 'Legality',
      content:
        'The martin x Script itself is not illegal as betting strategies are not prohibited by law. However, its use may contravene the terms of service of certain betting platforms, which often disallow automated or scripted betting methods. While employing the script is not a legal violation, it could result in account restrictions or bans if detected. We strongly recommend reviewing the rules of your chosen betting platform and using the script cautiously and responsibly to avoid complications',
    },
    {
      id: 'faq_usage',
      icon: 'CogIcon',
      title: 'Correct Usage',
      content:
        'To maximize the effectiveness of the martin x Script and minimize the risk of account bans, adopting the correct strategy is essential. The key is to emulate natural betting behavior by incorporating both wins and losses into your activity. This balanced approach helps avoid triggering suspicion from betting platforms. Here are some tips:',
      tips: [
        'Avoid consistent large wins or predictable betting patterns',
        'Monitor the frequency and size of your bets to maintain a low profile',
        'Use the script discreetly to ensure long-term usability',
        'Responsible usage is critical to safeguarding your betting account while leveraging the script\'s capabilities',
      ],
    },
    {
      id: 'faq_profit',
      icon: 'CurrencyDollarIcon',
      title: 'Profit Potential',
      content:
        'The martin x Script does not guarantee a minimum or maximum profit—your earnings depend on your betting strategy. We advise setting personal profit goals and withdrawing funds once you\'ve accumulated a satisfactory amount. After withdrawing, continue playing to maintain account activity and reduce scrutiny. Key points to consider:',
      tips: [
        'There\'s no fixed profit ceiling or floor—results vary by user',
        'Withdraw strategically to secure gains without raising red flags',
        'Approach profit expectations realistically and avoid over-dependence on the script',
      ],
    },
    {
      id: 'faq_credibility',
      icon: 'StarIcon',
      title: 'Credibility',
      content:
        'Evaluate the script\'s performance based on your own experience and research. While the evidence is promising, individual outcomes may differ, so stay informed and cautious',
    },
    {
      id: 'faq_important',
      icon: 'ExclamationTriangleIcon',
      title: 'Important',
      content:
        'Always use the martin x Script responsibly and in accordance with applicable laws and platform policies. We are not responsible for any consequences arising from misuse or violation of terms of service. Your account security and responsible betting practices are your responsibility',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-background to-primary/5 reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight mb-6 text-foreground">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive answers to your questions about legality, usage, profits, and credibility
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="card-shadow rounded-2xl overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="accordion-header w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Icon name={faq.icon as any} size={24} className="text-secondary" />
                  </div>
                  <span className="text-xl font-heading font-semibold">{faq.title}</span>
                </div>
                <Icon
                  name={openIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={24}
                  className="transition-transform duration-300"
                />
              </button>

              {openIndex === index && (
                <div className="accordion-content animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed mb-4">{faq.content}</p>
                  {faq.tips && (
                    <ul className="space-y-3">
                      {faq.tips.map((tip, tipIndex) => (
                        <li key={`${faq.id}_tip_${tipIndex}`} className="flex items-start gap-3 group">
                          <Icon
                            name="CheckCircleIcon"
                            size={20}
                            className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;