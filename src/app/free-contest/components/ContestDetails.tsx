import Icon from '@/components/ui/AppIcon';

interface DetailSection {
  id: string
  emoji: string
  title: string
  content: string
  points?: string[]
}

const ContestDetails = () => {
  const sections: DetailSection[] = [
    {
      id: 'eligibility',
      emoji: '',
      title: 'Eligibility Criteria',
      content: 'To maintain exclusivity and fairness, participation is limited to:',
      points: [
        'New users only — individuals who have never purchased or activated any subscription before',
        'Active members of our official Telegram channel',
      ],
    },
    {
      id: 'how_to_join',
      emoji: '',
      title: 'How to Join',
      content: 'Entering the contest is incredibly simple:',
      points: [
        'no actions',
        'no submissions',
        'no messages',
        'There is no specific time to release it',
        'Your presence in the channel is your entry',
        'One winner will be chosen randomly from the official channel subscribers',
        'This ensures the reward always goes to someone experiencing martin x for the first time',
      ],
    },
    {
      id: 'prizes',
      emoji: '',
      title: 'Prizes',
      content: 'The lucky winner receives:',
      points: [
        'Free one day Subscription',
        'Full access to the Apple of Fortune results for that 24 hours',
        'The chance to earn with the script while testing its full power',
      ],
    },
    {
      id: 'final_notes',
      emoji: '',
      title: 'Final Notes',
      content: 'Important details to remember:',
      points: [
        'Only one winner is selected daily',
        'There is no need to request to win',
        'Simply be one of the channel subscribers',
        'The prize is sent directly to the winner\'s account',
      ],
    },
  ]

  return (
    <section className="py-28 bg-background reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="card-shadow rounded-2xl p-8 bg-card animate-zoom-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                {section.emoji && <div className="text-4xl">{section.emoji}</div>}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>

              {section.points && (
                <ul className="space-y-3 ml-0">
                  {section.points.map((point, pointIndex) => (
                    <li key={`${section.id}_point_${pointIndex}`} className="flex items-start gap-3 group">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="glass-panel p-10 rounded-2xl">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Enter?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our official Telegram channel now and you're automatically entered into the daily contest
              No forms, no hassle—just be part of our community
            </p>
            <a
              href="https://t.me/martinx_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-pulse-glow inline-flex items-center gap-3 text-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Join Official Channel</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContestDetails