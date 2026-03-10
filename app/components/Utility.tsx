import { useWaterRipple } from './useWaterRipple';
import { useLanguage, T } from './LanguageContext';

const BASE = '/pyon-token-lp/utility';

const cards: {
  bg: string; icon: string; bgPos: string; iconPos: string;
  amount: string; amountColor: string;
  title: T; description: T; available: boolean;
}[] = [
  {
    bg: `${BASE}/card1-bg.png`, icon: `${BASE}/card1-icon.png`,
    bgPos: '42% 12%', iconPos: '42% 10%',
    amount: '100 PYON', amountColor: 'text-[#00E5FF]',
    title:       { en: 'Pyon Recognizes You',       ja: 'Pyonがあなたを認識' },
    description: { en: 'Pyon remembers your name and calls out to you during streams', ja: 'Pyonがあなたの名前を覚え、配信中に呼びかけてくれる' },
    available: true,
  },
  {
    bg: `${BASE}/card2-bg.png`, icon: `${BASE}/card2-icon.png`,
    bgPos: '50% 18%', iconPos: '50% 15%',
    amount: '1,000 PYON', amountColor: 'text-[#00E5FF]',
    title:       { en: 'Deeper Memories',            ja: '記憶がより深まる' },
    description: { en: 'Pyon remembers more of your conversations. Chat with a Pyon who really knows you', ja: '会話の内容をより長く覚えてくれる。あなたのことをよく知ったPyonと話せる' },
    available: true,
  },
  {
    bg: `${BASE}/card3-bg.png`, icon: `${BASE}/card3-icon.png`,
    bgPos: '50% 12%', iconPos: '50% 10%',
    amount: '5,000 PYON', amountColor: 'text-[#00E5FF]',
    title:       { en: 'Recognized as a Fellow Fish', ja: '同じ魚仲間として認識' },
    description: { en: 'Pyon sees you as "the same kind of fish." A friendlier and more special relationship', ja: 'Pyonがあなたを「同じ魚」として認識。よりフレンドリーで特別な関係に' },
    available: true,
  },
  {
    bg: `${BASE}/card4-bg.png`, icon: `${BASE}/card4-icon.png`,
    bgPos: '50% 15%', iconPos: '50% 12%',
    amount: 'Coming Soon', amountColor: 'text-[#A0ADB8]',
    title:       { en: 'More Coming Soon',           ja: '今後追加予定' },
    description: { en: 'New perks will be added in line with revenue growth', ja: '収益性に合わせて新しい特典を追加していきます' },
    available: false,
  },
];

function UtilityCard({ card }: { card: (typeof cards)[0] }) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      onMouseEnter={card.available ? onMouseEnter : undefined}
      className={`group relative rounded-2xl water-float-btn ${card.available ? '' : 'opacity-50'}`}
    >
      <div className={`relative p-6 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ${card.available ? 'hover:border-white/20 hover:scale-105' : ''}`}>
        <div className="absolute inset-0">
          <img src={card.bg} alt="" className="w-full h-full object-cover" style={{ objectPosition: card.bgPos }} />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-transparent to-transparent" />

        <div className="relative space-y-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20">
            <img src={card.icon} alt="" className="w-full h-full object-cover" style={{ objectPosition: card.iconPos }} />
          </div>
          <div className={`font-mono text-sm ${card.amountColor}`}>{card.amount}</div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{t(card.title)}</h3>
            <p className="text-sm text-[#A0ADB8] leading-relaxed">{t(card.description)}</p>
          </div>
        </div>
      </div>
      {rippleEl}
    </div>
  );
}

export function Utility() {
  const { t } = useLanguage();

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
            {t({ en: 'Deepen your bond with Pyon based on how many tokens you hold', ja: '保有量に応じてPyonとの関係が深まる' })}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 px-5 py-4 rounded-xl border border-[#FF6B8A]/30 bg-[#FF6B8A]/5 text-sm text-[#A0ADB8] leading-relaxed">
          <span className="text-[#FF6B8A] font-semibold mr-2">
            {t({ en: 'Launch Stage Notice', ja: 'ローンチ段階のご注意' })}
          </span>
          {t({
            en: 'Since there is no revenue at this stage, perk values are set low. Perks will be updated regularly as revenue grows.',
            ja: '現時点では収益性がないため、特典のバリューは低めに設定されています。今後、収益性に合わせて特典は随時アップデートされていきます。',
          })}
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
