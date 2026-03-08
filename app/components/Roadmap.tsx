import { Rocket, Sparkles, Network } from 'lucide-react';

export function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Token Launch',
      status: 'active',
      icon: Rocket,
      items: [
        'Smart contract deployment',
        'Initial liquidity provision',
        'Community airdrop',
        'Exchange listings',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'AI Integration + Goods',
      status: 'upcoming',
      icon: Sparkles,
      items: [
        'Enhanced AI interactions',
        'Merchandise store',
        'NFT collection',
        'Staking rewards',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Multi-Character Ecosystem',
      status: 'future',
      icon: Network,
      items: [
        'New AI characters',
        'Cross-character events',
        'DAO governance',
        'Mobile app launch',
      ],
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#FF6B8A] via-[#A855F7] to-[#00E5FF] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            Building the future of AI VTuber engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative group ${phase.status === 'active' ? 'scale-105' : ''}`}
            >
              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                phase.status === 'active' 
                  ? 'bg-[rgba(26,26,42,0.8)] border-[#00E5FF]/50 shadow-lg shadow-[#00E5FF]/20' 
                  : 'bg-[rgba(26,26,42,0.6)] border-white/10 hover:border-white/20'
              }`}>
                {/* Active glow */}
                {phase.status === 'active' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#A855F7]/20 blur-xl animate-pulse" />
                )}
                
                <div className="relative space-y-6">
                  {/* Icon and phase */}
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-sm ${
                      phase.status === 'active' ? 'text-[#00E5FF]' : 'text-[#A0ADB8]'
                    }`}>
                      {phase.phase.toUpperCase()}
                    </span>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      phase.status === 'active' 
                        ? 'bg-gradient-to-br from-[#00E5FF] to-[#A855F7]' 
                        : 'bg-white/10'
                    }`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  
                  {/* Status badge */}
                  {phase.status === 'active' && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                      <span className="text-xs font-medium text-[#00E5FF]">IN PROGRESS</span>
                    </div>
                  )}
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                          phase.status === 'active' ? 'bg-[#00E5FF]' : 'bg-[#A0ADB8]'
                        }`} />
                        <span className="text-[#A0ADB8]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}