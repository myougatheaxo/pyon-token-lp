import { useWaterRipple } from './useWaterRipple';

const BASE = '/pyon-token-lp/utility';

const steps = [
  {
    step: 'STEP 1',
    title: 'Watch & Superchat',
    description: 'Support Pyon during livestreams with superchats and donations',
    bg: `${BASE}/step1.png`,
    bgPos: '60% 40%',
    iconPos: '60% 35%',
    gradient: 'from-[#FF6B8A] to-[#FF6B8A]/50',
  },
  {
    step: 'STEP 2',
    title: 'Earn PYON',
    description: 'Automatically receive PYON tokens proportional to your support ※技術的模索中',
    bg: `${BASE}/step2.png`,
    bgPos: '50% 35%',
    iconPos: '50% 30%',
    gradient: 'from-[#00E5FF] to-[#00E5FF]/50',
  },
  {
    step: 'STEP 3',
    title: 'Use for Perks',
    description: 'Redeem tokens for exclusive content, voting rights, and more',
    bg: `${BASE}/step3.png`,
    bgPos: '50% 40%',
    iconPos: '50% 35%',
    gradient: 'from-[#A855F7] to-[#A855F7]/50',
  },
];

function StepCard({ step, isLast }: { step: (typeof steps)[0]; isLast: boolean }) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();

  return (
    <div ref={ref} onMouseEnter={onMouseEnter} className="relative group">
      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src={step.bg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: step.bgPos }}
          />
        </div>
        {/* 黒半透明オーバーレイ */}
        <div className="absolute inset-0 bg-black/75" />
        {/* ホバーグロー */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

        <div className="relative p-8 space-y-6">
          {/* ステップ番号 + アイコン */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-[#00E5FF]">{step.step}</span>
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/20">
              <img
                src={step.bg}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: step.iconPos }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            <p className="text-[#A0ADB8] leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>

      {/* 波紋エフェクト（overflow-hidden の外） */}
      {rippleEl}

      {/* コネクター */}
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent z-10" />
      )}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
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
            <StepCard key={index} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
