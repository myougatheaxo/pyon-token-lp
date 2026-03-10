import { Button } from './ui/button';
import { BubbleParticles } from './BubbleParticles';
import { WaterRipple } from './WaterRipple';
import { useLanguage } from './LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-[#1a0f2e] to-[#0D0D1A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B8A]/5 via-transparent to-[#00E5FF]/5 animate-pulse"
             style={{ animationDuration: '8s' }} />
      </div>

      <BubbleParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30">
              <span className="font-mono text-xs sm:text-sm text-[#00E5FF]">TROPICAL FISH AI</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-[#FF6B8A] to-white bg-clip-text text-transparent">
                {t({ en: 'Support Pyon.', ja: 'Pyonを応援しよう。' })}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#A855F7] bg-clip-text text-transparent">
                {t({ en: 'Earn $PYON.', ja: '$PYONを獲得しよう。' })}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-lg">
              {t({
                en: 'Every superchat comes back to you as PYON tokens. Support your favorite AI VTuber and get rewarded.',
                ja: 'スパチャがPYONトークンとしてあなたに還元されます。お気に入りのAI VTuberを応援して報酬をもらおう。',
              })}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <WaterRipple>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8"
              >
                {t({ en: 'Connect Wallet', ja: 'ウォレット接続' })}
              </Button>
            </WaterRipple>
            <WaterRipple>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="border-[#00E5FF]/30 text-white hover:bg-[#00E5FF]/10 text-base sm:text-lg px-6 sm:px-8"
              >
                {t({ en: 'Learn More', ja: 'もっと見る' })}
              </Button>
            </WaterRipple>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B8A]/20 via-[#FFD700]/20 to-[#A855F7]/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
              <img
                src="/pyon-token-lp/pyon.png"
                alt="Pyon"
                className="w-full h-[160%] object-cover object-top"
                style={{ marginTop: '-5%' }}
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-[#FFD700]/30 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
