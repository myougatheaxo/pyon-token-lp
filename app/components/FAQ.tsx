import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useLanguage, T } from './LanguageContext';

const faqs: { question: T; answer: T }[] = [
  {
    question: { en: 'What is $PYON?', ja: '$PYONとは何ですか？' },
    answer: {
      en: '$PYON is a fan support token for Pyon, an AI VTuber from the TropicalFishAItuber series. When you support Pyon through superchats and donations, you automatically receive PYON tokens that can be used for exclusive perks and experiences.',
      ja: '$PYONはTropicalFishAItuberシリーズのAI VTuber「Pyon」のファンサポートトークンです。スパチャや投げ銭でPyonを応援すると、限定特典と交換できるPYONトークンを自動的に受け取れます。',
    },
  },
  {
    question: { en: 'How do I earn PYON tokens?', ja: 'PYONトークンはどうやって獲得しますか？' },
    answer: {
      en: 'You earn PYON tokens by supporting Pyon during livestreams through superchats, donations, and participating in special events. The amount of tokens you receive is proportional to your support.',
      ja: 'ライブ配信中にスパチャ・投げ銭・特別イベントへの参加を通じてPyonを応援することで獲得できます。獲得量はサポート金額に比例します。',
    },
  },
  {
    question: { en: 'What can I do with PYON tokens?', ja: 'PYONトークンで何ができますか？' },
    answer: {
      en: 'PYON tokens can be redeemed for various perks including exclusive wallpapers, Discord VIP roles, voting rights on stream topics, private chat sessions with Pyon, and more. Check the Utility section for details.',
      ja: 'PYONトークンは限定壁紙・Discord VIPロール・配信テーマへの投票権・Pyonとのプライベートチャットなど様々な特典と交換できます。Token Utilityセクションをご確認ください。',
    },
  },
  {
    question: { en: 'Is $PYON a good investment?', ja: '$PYONは投資商品ですか？' },
    answer: {
      en: '$PYON is designed as a fan engagement token, not an investment vehicle. Its primary purpose is to reward and connect the community. Please do not purchase expecting financial returns.',
      ja: '$PYONはファンエンゲージメントトークンであり、投資商品ではありません。金銭的リターンを期待しての購入はご遠慮ください。',
    },
  },
  {
    question: { en: 'How do I get started?', ja: '始め方を教えてください' },
    answer: {
      en: "Connect your Web3 wallet using the \"Connect Wallet\" button, then watch Pyon's streams and support with superchats. Your tokens will be automatically distributed to your wallet.",
      ja: '「ウォレット接続」ボタンからWeb3ウォレットを接続し、Pyonの配信を視聴してスパチャで応援しましょう。トークンは自動的にウォレットへ配布されます。',
    },
  },
  {
    question: { en: 'Where can I trade $PYON?', ja: '$PYONはどこで取引できますか？' },
    answer: {
      en: 'After the token launch (Phase 1), $PYON will be available on select decentralized exchanges. Check our official social channels for the latest exchange listings.',
      ja: 'トークンローンチ（Phase 1）後、$PYONは一部の分散型取引所で取引可能になる予定です。最新情報は公式SNSをご確認ください。',
    },
  },
];

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="relative py-32 px-6 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f2e]/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-[#A0ADB8] bg-clip-text text-transparent">
              {t({ en: 'FAQ', ja: 'よくある質問' })}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8]">
            {t({ en: 'Everything you need to know', ja: 'ご不明な点はこちらへ' })}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-[rgba(26,26,42,0.6)] backdrop-blur-xl border border-white/10 px-6 hover:border-white/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-white hover:no-underline py-6">
                {t(faq.question)}
              </AccordionTrigger>
              <AccordionContent className="text-[#A0ADB8] leading-relaxed pb-6">
                {t(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
