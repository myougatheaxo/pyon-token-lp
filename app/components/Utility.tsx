import { Sparkles, Brain, Fish, Lock } from 'lucide-react';

export function Utility() {
  const utilities = [
    {
      icon: Sparkles,
      amount: '100 PYON',
      title: 'Pyonがあなたを認識',
      description: 'Pyonがあなたの名前を覚え、配信中に呼びかけてくれる',
      color: 'from-[#FF6B8A] to-[#FF6B8A]/50',
      available: true,
    },
    {
      icon: Brain,
      amount: '1,000 PYON',
      title: '記憶がより深まる',
      description: '会話の内容をより長く覚えてくれる。あなたのことをよく知ったPyonと話せる',
      color: 'from-[#00E5FF] to-[#00E5FF]/50',
      available: true,
    },
    {
      icon: Fish,
      amount: '5,000 PYON',
      title: '同じ魚仲間として認識',
      description: 'Pyonがあなたを「同じ魚」として認識。よりフレンドリーで特別な関係に',
      color: 'from-[#A855F7] to-[#A855F7]/50',
      available: true,
    },
    {
      icon: Lock,
      amount: 'Coming Soon',
      title: '今後追加予定',
      description: '収益性に合わせて新しい特典を追加していきます',
      color: 'from-[#A0ADB8] to-[#A0ADB8]/50',
      available: false,
    },
  ];

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
          {/* Card 1: 画像レイヤーデザイン */}
          <div className="group relative p-6 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-105">
            {/* 背景画像（顔中心クロップ） */}
            <div className="absolute inset-0">
              <img
                src="/pyon-token-lp/utility/card1-bg.png"
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: '42% 12%' }}
              />
            </div>
            {/* 黒半透明オーバーレイ */}
            <div className="absolute inset-0 bg-black/80" />
            {/* 下部グラデーション（テキスト可読性） */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-transparent to-transparent" />

            <div className="relative space-y-4">
              {/* アイコン（ピクセルアート） */}
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20">
                <img
                  src="/pyon-token-lp/utility/card1-icon.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '42% 10%' }}
                />
              </div>

              <div className="font-mono text-sm text-[#00E5FF]">100 PYON</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Pyonがあなたを認識</h3>
                <p className="text-sm text-[#A0ADB8] leading-relaxed">Pyonがあなたの名前を覚え、配信中に呼びかけてくれる</p>
              </div>
            </div>
          </div>

          {/* Card 2〜4: 既存デザイン */}
          {utilities.slice(1).map((utility, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-[rgba(26,26,42,0.6)] backdrop-blur-xl border border-white/10 transition-all duration-300 ${utility.available ? 'hover:border-white/20 hover:scale-105' : 'opacity-50'}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${utility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${utility.color} flex items-center justify-center`}>
                  <utility.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`font-mono text-sm ${utility.available ? 'text-[#00E5FF]' : 'text-[#A0ADB8]'}`}>{utility.amount}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{utility.title}</h3>
                  <p className="text-sm text-[#A0ADB8] leading-relaxed">{utility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}