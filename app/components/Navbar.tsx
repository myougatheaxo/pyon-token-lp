import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Waves } from 'lucide-react';
import { WaterRipple } from './WaterRipple';
import { useLanguage } from './LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D1A]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E5FF]" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] bg-clip-text text-transparent">
            $PYON
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hidden sm:block text-[#A0ADB8] hover:text-white transition-colors"
          >
            {t({ en: 'Docs', ja: 'Docs' })}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hidden sm:block text-[#A0ADB8] hover:text-white transition-colors"
          >
            {t({ en: 'FAQ', ja: 'FAQ' })}
          </button>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-1">
            {(['en', 'ja'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                  lang === l
                    ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30'
                    : 'text-[#A0ADB8] hover:text-white'
                }`}
              >
                {l === 'en' ? 'EN' : 'JP'}
              </button>
            ))}
          </div>

          <WaterRipple>
            <Button className="bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] hover:opacity-90 transition-opacity text-sm sm:text-base px-4 sm:px-6">
              {t({ en: 'Connect Wallet', ja: 'ウォレット接続' })}
            </Button>
          </WaterRipple>
        </div>
      </div>
    </nav>
  );
}
