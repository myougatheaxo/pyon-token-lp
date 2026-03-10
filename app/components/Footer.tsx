import { Twitter, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] bg-clip-text text-transparent">
                $PYON
              </span>
            </div>
            <p className="text-[#A0ADB8] max-w-md leading-relaxed">
              {t({
                en: 'Supporting the TropicalFishAItuber ecosystem through community-driven token rewards.',
                ja: 'コミュニティ主導のトークン報酬でTropicalFishAItuberエコシステムを支援します。',
              })}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/50 flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-[#A0ADB8] group-hover:text-[#00E5FF] transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#A855F7]/50 flex items-center justify-center transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 text-[#A0ADB8] group-hover:text-[#A855F7] transition-colors" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-white">{t({ en: 'Resources', ja: 'リソース' })}</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">{t({ en: 'Documentation', ja: 'ドキュメント' })}</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">{t({ en: 'Whitepaper', ja: 'ホワイトペーパー' })}</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">{t({ en: 'Brand Kit', ja: 'ブランドキット' })}</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">{t({ en: 'Community', ja: 'コミュニティ' })}</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Twitter/X</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 space-y-4">
          <div className="p-6 rounded-xl bg-[#FF6B8A]/5 border border-[#FF6B8A]/20">
            <p className="text-sm text-[#A0ADB8] leading-relaxed">
              <span className="font-medium text-[#FF6B8A]">{t({ en: 'Risk Disclosure:', ja: 'リスク開示:' })}</span>{' '}
              {t({
                en: 'Cryptocurrency investments carry significant risk. $PYON is a fan engagement token and should not be considered a financial investment. Token value may fluctuate and you may lose your entire investment. This is not financial advice.',
                ja: '暗号資産への投資には重大なリスクが伴います。$PYONはファンエンゲージメントトークンであり、金融投資商品ではありません。トークン価値は変動し、投資額を全額失う可能性があります。これは金融アドバイスではありません。',
              })}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A0ADB8]">
            <p>© 2026 $PYON. All rights reserved.</p>
            <p>{t({ en: 'Not financial advice. Do your own research.', ja: '金融アドバイスではありません。ご自身でご判断ください。' })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
