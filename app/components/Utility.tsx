import { Image, Shield, Vote, MessageCircle } from 'lucide-react';

export function Utility() {
  const utilities = [
    {
      icon: Image,
      amount: '100 PYON',
      title: 'Exclusive Wallpaper',
      description: 'High-quality Pyon artwork for your devices',
      color: 'from-[#FF6B8A] to-[#FF6B8A]/50',
    },
    {
      icon: Shield,
      amount: '300 PYON',
      title: 'Discord VIP Role',
      description: 'Special badge and access to VIP channels',
      color: 'from-[#00E5FF] to-[#00E5FF]/50',
    },
    {
      icon: Vote,
      amount: '1,000 PYON',
      title: 'Vote on Stream Topics',
      description: 'Help decide what Pyon streams next',
      color: 'from-[#A855F7] to-[#A855F7]/50',
    },
    {
      icon: MessageCircle,
      amount: '3,000 PYON',
      title: '1-on-1 Chat with Pyon',
      description: 'Private chat session with your AI VTuber',
      color: 'from-[#FF6B8A] via-[#A855F7] to-[#00E5FF]',
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#A855F7] bg-clip-text text-transparent">
              Token Utility
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            Real perks for true fans
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((utility, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[rgba(26,26,42,0.6)] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${utility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              
              <div className="relative space-y-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${utility.color} flex items-center justify-center`}>
                  <utility.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Amount */}
                <div className="font-mono text-sm text-[#00E5FF]">{utility.amount}</div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{utility.title}</h3>
                  <p className="text-sm text-[#A0ADB8] leading-relaxed">{utility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}