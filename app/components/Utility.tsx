import { useWaterRipple } from './useWaterRipple';

const BASE = '/pyon-token-lp/utility';

const cards = [
  {
    bg: `${BASE}/card1-bg.png`,
    icon: `${BASE}/card1-icon.png`,
    bgPos: '42% 12%',
    iconPos: '42% 10%',
    amount: '100 PYON',
    amountColor: 'text-[#00E5FF]',
    title: 'Pyonがあなたを認識',
    description: 'Pyonがあなたの名前を覚え、配信中に呼びかけてくれる',
    available: true,
  },
  {
    bg: `${BASE}/card2-bg.png`,
    icon: `${BASE}/card2-icon.png`,
    bgPos: '50% 18%',
    iconPos: '50% 15%',
    amount: '1,000 PYON',
    amountColor: 'text-[#00E5FF]',
    title: '記憶がより深まる',
    description: '会話の内容をより長く覚えてくれる。あなたのことをよく知ったPyonと話せる',
    available: true,
  },
  {
    bg: `${BASE}/card3-bg.png`,
    icon: `${BASE}/card3-icon.png`,
    bgPos: '50% 12%',
    iconPos: '50% 10%',
    amount: '5,000 PYON',
    amountColor: 'text-[#00E5FF]',
    title: '同じ魚仲間として認識',
    description: 'Pyonがあなたを「同じ魚」として認識。よりフレンドリーで特別な関係に',
    available: true,
  },
  {
    bg: `${BASE}/card4-bg.png`,
    icon: `${BASE}/card4-icon.png`,
    bgPos: '50% 15%',
    iconPos: '50% 12%',
    amount: 'Coming Soon',
    amountColor: 'text-[#A0ADB8]',
    title: '今後追加予定',
    description: '収益性に合わせて新しい特典を追加していきます',
    available: false,
  },
];

function UtilityCard({ card }: { card: (typeof cards)[0] }) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();

  return (
    <div
      ref={ref}
      onMouseEnter={card.available ? onMouseEnter : undefined}
      className={`group relative rounded-2xl ${card.available ? '' : 'opacity-50'}`}
    >
      <div className={`relative p-6 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ${card.available ? 'hover:border-white/20 hover:scale-105' : ''}`}>
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src={card.bg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: card.bgPos }}
          />
        </div>
        {/* 黒半透明オーバーレイ */}
        <div className="absolute inset-0 bg-black/80" />
        {/* 下部グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-transparent to-transparent" />

        <div className="relative space-y-4">
          {/* ピクセルアートアイコン */}
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20">
            <img
              src={card.icon}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: card.iconPos }}
            />
          </div>

          <div className={`font-mono text-sm ${card.amountColor}`}>{card.amount}</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
            <p className="text-sm text-[#A0ADB8] leading-relaxed">{card.description}</p>
          </div>
        </div>
      </div>

      {/* 波紋エフェクト（overflow-hidden の外） */}
      {rippleEl}
    </div>
  );
}

export function Utility() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#A855F7] bg-clip-text text-transparent">
              Token Utility
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            保有量に応じてPyonとの関係が深まる
          </p>
        </div>

        {/* Launch notice */}
        <div className="max-w-3xl mx-auto mb-12 px-5 py-4 rounded-xl border border-[#FF6B8A]/30 bg-[#FF6B8A]/5 text-sm text-[#A0ADB8] leading-relaxed">
          <span className="text-[#FF6B8A] font-semibold mr-2">ローンチ段階のご注意</span>
          現時点では収益性がないため、特典のバリューは低めに設定されています。
          今後、収益性に合わせて特典は随時アップデートされていきます。
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <UtilityCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
