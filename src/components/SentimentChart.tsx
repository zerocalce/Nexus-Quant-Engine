import { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '09:00', price: 64000, sentiment: 0.6 },
  { time: '10:00', price: 64200, sentiment: 0.8 },
  { time: '11:00', price: 63800, sentiment: 0.4 },
  { time: '12:00', price: 64500, sentiment: 0.9 },
  { time: '13:00', price: 64100, sentiment: 0.5 },
  { time: '14:00', price: 64800, sentiment: 0.7 },
  { time: '15:00', price: 65200, sentiment: 0.95 },
];

export function SentimentChart() {
  return (
    <div className="bg-quant-surface rounded-xl border border-quant-border p-6 shadow-quant flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-slate-100 font-sans tracking-tight">BTC/USD Sentiment Overlay</h2>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-quant-bg rounded text-xs font-mono text-slate-400 border border-quant-border">1H</span>
          <span className="px-2 py-1 bg-quant-border rounded text-xs font-mono text-slate-200 border border-quant-border">4H</span>
          <span className="px-2 py-1 bg-quant-bg rounded text-xs font-mono text-slate-400 border border-quant-border">1D</span>
        </div>
      </div>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-quant-border)" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="var(--color-neutral)" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="var(--color-neutral)" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              domain={['dataMin - 500', 'dataMax + 500']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--color-quant-surface)', 
                borderColor: 'var(--color-quant-border)',
                borderRadius: '0.5rem',
                color: 'var(--color-slate-100)'
              }}
              itemStyle={{ color: 'var(--color-slate-100)' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="var(--color-accent)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
