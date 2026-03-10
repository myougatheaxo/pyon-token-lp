import { useMemo } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

// マウント時に1回だけ生成（再レンダリング不要）
function generateBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 7 + 3,
    duration: Math.random() * 18 + 12,
    delay: Math.random() * 14,
  }));
}

const BUBBLES = generateBubbles(32);

const CAUSTICS = [
  { x: 15, y: 20, size: 500, duration: 22, delay: 0,  anim: 'caustic-1', color: '#00E5FF' },
  { x: 70, y: 55, size: 380, duration: 28, delay: 5,  anim: 'caustic-2', color: '#A855F7' },
  { x: 45, y: 75, size: 460, duration: 34, delay: 10, anim: 'caustic-3', color: '#00E5FF' },
  { x: 85, y: 15, size: 300, duration: 19, delay: 3,  anim: 'caustic-1', color: '#FF6B8A' },
];

export function UnderwaterBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* コースティック光（ゆっくり流れる光の斑） */}
      {CAUSTICS.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${c.color}08 0%, transparent 70%)`,
            animation: `${c.anim} ${c.duration}s ease-in-out ${c.delay}s infinite`,
          }}
        />
      ))}

      {/* 全画面バブル */}
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border border-[#00E5FF]/15 bg-[#00E5FF]/5 animate-bubble-drift"
          style={{
            left: `${b.x}%`,
            bottom: '-5%',
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* 上部から差し込む光（水面からの光源） */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full"
        style={{
          height: '60vh',
          background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)',
          animation: 'caustic-2 25s ease-in-out infinite',
        }}
      />
    </div>
  );
}
