import { Eye, Coins, Gift } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: 'Watch & Superchat',
      description: 'Support Pyon during livestreams with superchats and donations',
      gradient: 'from-[#FF6B8A] to-[#FF6B8A]/50',
    },
    {
      icon: Coins,
      title: 'Earn PYON',
      description: 'Automatically receive PYON tokens proportional to your support',
      gradient: 'from-[#00E5FF] to-[#00E5FF]/50',
    },
    {
      icon: Gift,
      title: 'Use for Perks',
      description: 'Redeem tokens for exclusive content, voting rights, and more',
      gradient: 'from-[#A855F7] to-[#A855F7]/50',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f2e]/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-[#A0ADB8] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            Simple, transparent, and rewarding
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glass card */}
              <div className="relative h-full p-8 rounded-2xl bg-[rgba(26,26,42,0.6)] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative space-y-6">
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-[#00E5FF]">STEP {index + 1}</span>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-[#A0ADB8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}