import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'What is $PYON?',
      answer: '$PYON is a fan support token for Pyon, an AI VTuber from the TropicalFishAItuber series. When you support Pyon through superchats and donations, you automatically receive PYON tokens that can be used for exclusive perks and experiences.',
    },
    {
      question: 'How do I earn PYON tokens?',
      answer: 'You earn PYON tokens by supporting Pyon during livestreams through superchats, donations, and participating in special events. The amount of tokens you receive is proportional to your support.',
    },
    {
      question: 'What can I do with PYON tokens?',
      answer: 'PYON tokens can be redeemed for various perks including exclusive wallpapers, Discord VIP roles, voting rights on stream topics, private chat sessions with Pyon, and more. Check the Utility section for details.',
    },
    {
      question: 'Is $PYON a good investment?',
      answer: '$PYON is designed as a fan engagement token, not an investment vehicle. Its primary purpose is to reward and connect the community. Please do not purchase expecting financial returns. See our disclaimer for more information.',
    },
    {
      question: 'How do I get started?',
      answer: 'Connect your Web3 wallet using the "Connect Wallet" button, then watch Pyon\'s streams and support with superchats. Your tokens will be automatically distributed to your wallet.',
    },
    {
      question: 'Where can I trade $PYON?',
      answer: 'After the token launch (Phase 1), $PYON will be available on select decentralized exchanges. Check our official social channels for the latest exchange listings and liquidity pairs.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 px-6 scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f2e]/20 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-[#A0ADB8] bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8]">
            Everything you need to know
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
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A0ADB8] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}