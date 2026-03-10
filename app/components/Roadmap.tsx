const BASE = '/pyon-token-lp/utility';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Token Launch',
    status: 'active',
    bg: `${BASE}/phase1.png`,
    bgPos: '50% 15%',
    iconPos: '50% 10%',
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
    bg: `${BASE}/phase2.png`,
    bgPos: '50% 18%',
    iconPos: '50% 12%',
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
    bg: `${BASE}/phase3.png`,
    bgPos: '50% 15%',
    iconPos: '50% 10%',
    items: [
      'New AI characters',
      'Cross-character events',
      'DAO governance',
      'Mobile app launch',
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6 scroll-mt-20">
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
              <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                phase.status === 'active'
                  ? 'border-[#00E5FF]/50 shadow-lg shadow-[#00E5FF]/20'
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {/* 背景画像 */}
                <div className="absolute inset-0">
                  <img
                    src={phase.bg}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: phase.bgPos }}
                  />
                </div>
                {/* 黒半透明オーバーレイ */}
                <div className="absolute inset-0 bg-black/90" />
                {/* 下部グラデーション */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-transparent to-transparent" />
                {/* Active glow */}
                {phase.status === 'active' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-[#A855F7]/10 animate-pulse" />
                )}

                <div className="relative p-8 space-y-6">
                  {/* フェーズラベル + 大きめアイコン */}
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-sm ${
                      phase.status === 'active' ? 'text-[#00E5FF]' : 'text-[#A0ADB8]'
                    }`}>
                      {phase.phase.toUpperCase()}
                    </span>
                    {/* アイコン画像（大きめ） */}
                    <div className={`w-20 h-20 rounded-xl overflow-hidden border ${
                      phase.status === 'active' ? 'border-[#00E5FF]/40' : 'border-white/20'
                    }`}>
                      <img
                        src={phase.bg}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ objectPosition: phase.iconPos }}
                      />
                    </div>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>

                  {/* ステータスバッジ */}
                  {phase.status === 'active' && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                      <span className="text-xs font-medium text-[#00E5FF]">IN PROGRESS</span>
                    </div>
                  )}

                  {/* 項目リスト */}
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
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
