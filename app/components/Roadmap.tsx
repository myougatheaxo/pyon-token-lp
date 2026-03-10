import { useWaterRipple } from './useWaterRipple';
import { useLanguage, T } from './LanguageContext';

const BASE = '/pyon-token-lp/utility';

const phases: {
  phase: string; title: T; status: string;
  bg: string; bgPos: string; iconPos: string;
  items: T[];
}[] = [
  {
    phase: 'Phase 1',
    title: { en: 'Token Launch', ja: 'トークンローンチ' },
    status: 'active',
    bg: `${BASE}/phase1.png`, bgPos: '50% 15%', iconPos: '50% 10%',
    items: [
      { en: 'Smart contract deployment',  ja: 'スマートコントラクトのデプロイ' },
      { en: 'Initial liquidity provision', ja: '初期流動性の提供' },
      { en: 'Community airdrop',           ja: 'コミュニティへのエアドロップ' },
      { en: 'Exchange listings',           ja: '取引所上場' },
    ],
  },
  {
    phase: 'Phase 2',
    title: { en: 'AI Integration + Goods', ja: 'AI統合 + グッズ' },
    status: 'upcoming',
    bg: `${BASE}/phase2.png`, bgPos: '50% 18%', iconPos: '50% 12%',
    items: [
      { en: 'Enhanced AI interactions', ja: 'AI会話の強化' },
      { en: 'Merchandise store',         ja: 'グッズショップ開設' },
      { en: 'NFT collection',            ja: 'NFTコレクション' },
      { en: 'Staking rewards',           ja: 'ステーキング報酬' },
    ],
  },
  {
    phase: 'Phase 3',
    title: { en: 'Multi-Character Ecosystem', ja: 'マルチキャラクターエコシステム' },
    status: 'future',
    bg: `${BASE}/phase3.png`, bgPos: '50% 15%', iconPos: '50% 10%',
    items: [
      { en: 'New AI characters',      ja: '新AIキャラクター追加' },
      { en: 'Cross-character events', ja: 'キャラクター横断イベント' },
      { en: 'DAO governance',         ja: 'DAOガバナンス' },
      { en: 'Mobile app launch',      ja: 'モバイルアプリリリース' },
    ],
  },
];

function PhaseCard({ phase }: { phase: (typeof phases)[0] }) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      className={`relative group water-float-btn ${phase.status === 'active' ? 'scale-105' : ''}`}
    >
      <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
        phase.status === 'active'
          ? 'border-[#00E5FF]/50 shadow-lg shadow-[#00E5FF]/20'
          : 'border-white/10 hover:border-white/20'
      }`}>
        <div className="absolute inset-0">
          <img src={phase.bg} alt="" className="w-full h-full object-cover" style={{ objectPosition: phase.bgPos }} />
        </div>
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-transparent to-transparent" />
        {phase.status === 'active' && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-[#A855F7]/10 animate-pulse" />
        )}

        <div className="relative p-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className={`font-mono text-sm ${phase.status === 'active' ? 'text-[#00E5FF]' : 'text-[#A0ADB8]'}`}>
              {phase.phase.toUpperCase()}
            </span>
            <div className={`w-20 h-20 rounded-xl overflow-hidden border ${phase.status === 'active' ? 'border-[#00E5FF]/40' : 'border-white/20'}`}>
              <img src={phase.bg} alt="" className="w-full h-full object-cover" style={{ objectPosition: phase.iconPos }} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white">{t(phase.title)}</h3>

          {phase.status === 'active' && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/30">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-medium text-[#00E5FF]">
                {t({ en: 'IN PROGRESS', ja: '進行中' })}
              </span>
            </div>
          )}

          <ul className="space-y-3">
            {phase.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${phase.status === 'active' ? 'bg-[#00E5FF]' : 'bg-[#A0ADB8]'}`} />
                <span className="text-[#A0ADB8]">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {rippleEl}
    </div>
  );
}

export function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="relative py-32 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#FF6B8A] via-[#A855F7] to-[#00E5FF] bg-clip-text text-transparent">
              {t({ en: 'Roadmap', ja: 'ロードマップ' })}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            {t({ en: 'Building the future of AI VTuber engagement', ja: 'AI VTuberエンゲージメントの未来を構築中' })}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <PhaseCard key={index} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
}
