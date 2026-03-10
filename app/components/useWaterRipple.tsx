import { useRef, useState, useCallback, RefObject, ReactNode } from 'react';

interface Ripple {
  id: number;
  size: number;
  delay: number;
}

interface UseWaterRippleReturn {
  ref: RefObject<HTMLDivElement>;
  onMouseEnter: () => void;
  rippleEl: ReactNode;
}

let counter = 0;

export function useWaterRipple(): UseWaterRippleReturn {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const ref = useRef<HTMLDivElement>(null!);

  const onMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    const area = width * height;
    const count = area < 4000 ? 2 : area < 30000 ? 3 : 4;
    const size = Math.max(width, height);

    setRipples(
      Array.from({ length: count }, (_, i) => ({
        id: counter++,
        size,
        delay: i * 0.18,
      }))
    );

    setTimeout(() => setRipples([]), (count - 1) * 180 + 1550);
  }, []);

  const rippleEl = (
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
            border: '1.5px solid rgba(0, 229, 255, 0.5)',
            animationDelay: `${r.delay}s`,
          }}
        />
      ))}
    </div>
  );

  return { ref, onMouseEnter, rippleEl };
}
