import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useWaterRipple } from './useWaterRipple';

const data = [
  { name: 'Community', value: 40, color: '#00E5FF' },
  { name: 'Events',    value: 25, color: '#FF6B8A' },
  { name: 'Treasury',  value: 20, color: '#A855F7' },
  { name: 'Team',      value: 10, color: '#60A5FA' },
  { name: 'Liquidity', value:  5, color: '#34D399' },
];

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
  if (isHovered)     transform = 'scale(1.08) translateY(0px)';
  else if (isAbove)  transform = 'scale(0.96) translateY(-9px)';
  else if (isBelow)  transform = 'scale(0.96) translateY(9px)';

  return (
    <div
      ref={ref}
      onMouseEnter={() => { onMouseEnter(); onHover(index); }}
      onMouseLeave={onLeave}
      className="relative"
      style={{
        transform,
        /* spring easing: わずかにオーバーシュートして水面らしい動きに */
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

export function Tokenomics() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              {/* Chart */}
              <div className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        color: '#111827',
                        fontWeight: 600,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                {data.map((item, index) => (
                  <LegendItem
                    key={index}
                    item={item}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    onHover={setHoveredIndex}
                    onLeave={() => setHoveredIndex(null)}
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
