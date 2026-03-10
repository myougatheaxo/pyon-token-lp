import { ReactNode } from 'react';
import { useWaterRipple } from './useWaterRipple';

interface WaterRippleProps {
  children: ReactNode;
  className?: string;
}

export function WaterRipple({ children, className = '' }: WaterRippleProps) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();

  return (
    <div ref={ref} className={`relative inline-block water-float-btn ${className}`} onMouseEnter={onMouseEnter}>
      {children}
      {rippleEl}
    </div>
  );
}
