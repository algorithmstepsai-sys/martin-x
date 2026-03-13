import Icon from '@/components/ui/AppIcon';

const ImportantWarning = () => {
  return (
    <section className="py-28 bg-background reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="warning-box animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="ExclamationTriangleIcon" size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-[9px] mb-0">Important Notice</h3>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              The only authorized source for official updates
            </h4>

            {/* Original Three Buttons */}
            <div className="flex flex-col items-center gap-4 pt-6 pb-4">
              <a
                href="https://t.me/martin_x_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md px-6 py-4 border-2 border-[#8B6914] text-[#D4AF37] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.03] text-center"
              >
                Official telegram account
              </a>

              <a
                href="https://t.me/martinx_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md px-6 py-4 border-2 border-[#8B6914] text-[#D4AF37] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.03] text-center"
              >
                Official telegram channel
              </a>

              <a
                href="https://youtube.com/@martinx-officiall?si=h4LMCAJzXwouaMGj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md px-6 py-4 border-2 border-[#8B6914] text-[#D4AF37] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.03] text-center"
              >
                Official YouTube channel
              </a>
            </div>

            <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
              Any other channel or application regardless of similarity in name or design is unauthorized and not affiliated with us We assume no responsibility for any financial losses or interactions outside the official account
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImportantWarning