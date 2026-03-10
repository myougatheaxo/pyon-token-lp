import { useRef, useState, useCallback, ReactNode } from 'react';

interface Ripple {
  id: number;
  size: number;
  delay: number;
}

interface WaterRippleProps {
  children: ReactNode;
  className?: string;
}

let counter = 0;

/**
 * ホバー時に水の波紋を広げるラッパー。
 * ボタンサイズに応じて波紋の数・直径を自動調整する。
 */
export function WaterRipple({ children, className = '' }: WaterRippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    const area = width * height;
    const count = area < 4000 ? 2 : area < 12000 ? 3 : 4;
    const size = Math.max(width, height);

    const newRipples: Ripple[] = Array.from({ length: count }, (_, i) => ({
      id: counter++,
      size,
      delay: i * 0.15,
    }));
    setRipples(newRipples);

    // アニメーション終了後にクリア
    const total = (count - 1) * 150 + 750;
    setTimeout(() => setRipples([]), total + 50);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}

      {/* 波紋リング群（ボタン枠外に広がるよう overflow: visible） */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full animate-water-ripple"
            style={{
              left: '50%',
              top: '50%',
              width: r.size,
              height: r.size,
              border: '1.5px solid rgba(0, 229, 255, 0.55)',
              animationDelay: `${r.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
