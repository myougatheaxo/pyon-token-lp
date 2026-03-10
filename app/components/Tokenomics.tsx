import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function Tokenomics() {
  const data = [
    { name: 'Community', value: 40, color: '#00E5FF' },
    { name: 'Events', value: 25, color: '#FF6B8A' },
    { name: 'Treasury', value: 20, color: '#A855F7' },
    { name: 'Team', value: 10, color: '#60A5FA' },
    { name: 'Liquidity', value: 5, color: '#34D399' },
  ];

  return (
    <section className="relative py-32 px-6">
      {/* Background decoration */}
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
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-5" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
                   backgroundSize: '30px 30px'
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
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
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