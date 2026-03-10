import { useState, useCallback, useRef } from 'react';
import { useWaterRipple } from './useWaterRipple';

const data = [
  { name: 'Community', value: 40, color: '#00E5FF' },
  { name: 'Events',    value: 25, color: '#FF6B8A' },
  { name: 'Treasury',  value: 20, color: '#A855F7' },
  { name: 'Team',      value: 10, color: '#60A5FA' },
  { name: 'Liquidity', value:  5, color: '#34D399' },
];

// ── Donut chart geometry ───────────────────────────────────────────────────────
const RAD = Math.PI / 180;
const CX = 160, CY = 160, IR = 60, OR = 100;
const total = data.reduce((s, d) => s + d.value, 0);

const segments = (() => {
  let a = -90; // 12 o'clock
  return data.map((d) => {
    const sweep = (d.value / total) * 360;
    const start = a;
    const end   = a + sweep - 2; // 2° gap
    const mid   = start + (end - start) / 2;
    a += sweep;
    return { ...d, startAngle: start, endAngle: end, midAngle: mid };
  });
})();

function arcPath(sa: number, ea: number): string {
  const pt = (a: number, r: number) =>
    [CX + r * Math.cos(a * RAD), CY + r * Math.sin(a * RAD)] as [number, number];
  const [x1, y1] = pt(sa, OR), [x2, y2] = pt(ea, OR);
  const [x3, y3] = pt(ea, IR), [x4, y4] = pt(sa, IR);
  const lg = ea - sa > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${OR} ${OR} 0 ${lg} 1 ${x2} ${y2} L ${x3} ${y3} A ${IR} ${IR} 0 ${lg} 0 ${x4} ${y4} Z`;
}

// ── Legend item ───────────────────────────────────────────────────────────────
interface LegendItemProps {
  item: (typeof data)[0];
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
}

function LegendItem({ item, index, hoveredIndex, onHover, onLeave }: LegendItemProps) {
  const { ref, onMouseEnter, rippleEl } = useWaterRipple();

  const isHovered = hoveredIndex === index;
  const isAbove   = hoveredIndex !== null && index < hoveredIndex;
  const isBelow   = hoveredIndex !== null && index > hoveredIndex;

  let transform = 'scale(1) translateY(0px)';
  if (isHovered)    transform = 'scale(1.08) translateY(0px)';
  else if (isAbove) transform = 'scale(0.96) translateY(-9px)';
  else if (isBelow) transform = 'scale(0.96) translateY(9px)';

  return (
    <div
      ref={ref}
      onMouseEnter={() => { onMouseEnter(); onHover(index); }}
      onMouseLeave={onLeave}
      className="relative"
      style={{
        transform,
        transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: isHovered ? 10 : 1,
      }}
    >
      <div className={`flex items-center justify-between p-4 rounded-xl transition-colors duration-300 ${
        isHovered ? 'bg-white/15' : 'bg-white/5'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
          <span className="text-white font-medium">{item.name}</span>
        </div>
        <span className="text-xl sm:text-2xl font-bold" style={{ color: item.color }}>
          {item.value}%
        </span>
      </div>
      {rippleEl}
    </div>
  );
}

// ── Chart ripple type ─────────────────────────────────────────────────────────
interface ChartRipple { id: number; xPct: number; yPct: number; color: string; }
let rippleId = 0;

// ── Main component ────────────────────────────────────────────────────────────
export function Tokenomics() {
  const [activePie, setActivePie]       = useState<number | null>(null);
  const [hoveredLegend, setHoveredLegend] = useState<number | null>(null);
  const [chartRipples, setChartRipples] = useState<ChartRipple[]>([]);
  const [tooltip, setTooltip]           = useState<{ name: string; value: number; color: string } | null>(null);

  const handleSegmentEnter = useCallback((i: number) => {
    setActivePie(i);
    setTooltip({ name: data[i].name, value: data[i].value, color: data[i].color });

    // Ripple at segment midpoint (SVG 320×320 → %)
    const seg = segments[i];
    const mr  = (IR + OR) / 2;
    const xPct = ((CX + mr * Math.cos(seg.midAngle * RAD)) / 320) * 100;
    const yPct = ((CY + mr * Math.sin(seg.midAngle * RAD)) / 320) * 100;

    const id = rippleId++;
    setChartRipples(prev => [...prev, { id, xPct, yPct, color: data[i].color }]);
    setTimeout(() => setChartRipples(prev => prev.filter(r => r.id !== id)), 1600);
  }, []);

  const handleSegmentLeave = useCallback(() => {
    setActivePie(null);
    setTooltip(null);
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-[#A0ADB8] bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A0ADB8] max-w-2xl mx-auto">
            Fair distribution focused on community
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-12 rounded-3xl bg-[rgba(26,26,42,0.6)] backdrop-blur-xl border border-white/10 relative overflow-hidden">
            {/* DEMOウォーターマーク */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <span
                className="text-white/10 font-black select-none"
                style={{ fontSize: '10rem', transform: 'rotate(-30deg)', letterSpacing: '0.1em' }}
              >
                DEMO
              </span>
            </div>
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* ── Donut chart ── */}
              <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full max-w-[360px]">
                  {segments.map((seg, i) => {
                    const isActive = i === activePie;
                    const hasActive = activePie !== null;
                    const dx = isActive ? Math.cos(seg.midAngle * RAD) * 14 : 0;
                    const dy = isActive ? Math.sin(seg.midAngle * RAD) * 14 : 0;

                    return (
                      <g
                        key={i}
                        style={{
                          transform: `translate(${dx}px, ${dy}px)`,
                          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease, opacity 0.3s ease',
                          filter: isActive ? `drop-shadow(0 0 14px ${seg.color}aa)` : 'none',
                          opacity: hasActive && !isActive ? 0.5 : 1,
                          cursor: 'pointer',
                        }}
                        onMouseEnter={() => handleSegmentEnter(i)}
                        onMouseLeave={handleSegmentLeave}
                      >
                        <path d={arcPath(seg.startAngle, seg.endAngle)} fill={seg.color} />
                      </g>
                    );
                  })}
                </svg>

                {/* Tooltip */}
                {tooltip && (
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white text-gray-900 text-sm font-semibold pointer-events-none shadow"
                    style={{ border: `1.5px solid ${tooltip.color}` }}
                  >
                    {tooltip.name}: {tooltip.value}%
                  </div>
                )}

                {/* Ripple overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
                  {chartRipples.map(r => (
                    <span
                      key={r.id}
                      className="absolute rounded-full animate-water-ripple"
                      style={{
                        left: `${r.xPct}%`,
                        top:  `${r.yPct}%`,
                        width: '60px',
                        height: '60px',
                        border: `1.5px solid ${r.color}99`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* ── Legend ── */}
              <div className="space-y-4">
                {data.map((item, index) => (
                  <LegendItem
                    key={index}
                    item={item}
                    index={index}
                    hoveredIndex={hoveredLegend}
                    onHover={setHoveredLegend}
                    onLeave={() => setHoveredLegend(null)}
                  />
                ))}

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-[#A0ADB8]">Total Supply</span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono">10,000,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
