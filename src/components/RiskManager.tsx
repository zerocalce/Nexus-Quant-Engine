import { AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

export function RiskManager() {
  return (
    <div className="bg-quant-surface rounded-xl border border-quant-border p-6 shadow-quant">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-100 font-sans tracking-tight">Risk Management</h2>
        <ShieldCheck className="w-5 h-5 text-bullish" />
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-quant-bg rounded-lg border border-quant-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono text-slate-400">Kelly Fraction</span>
            <span className="text-sm font-mono font-bold text-accent">0.15</span>
          </div>
          <div className="w-full bg-quant-surface rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-quant-bg rounded-lg border border-quant-border flex flex-col">
            <span className="text-xs font-mono text-slate-400 mb-1">Max Drawdown</span>
            <span className="text-lg font-mono font-bold text-bearish">-4.2%</span>
          </div>
          <div className="p-4 bg-quant-bg rounded-lg border border-quant-border flex flex-col">
            <span className="text-xs font-mono text-slate-400 mb-1">Sharpe Ratio</span>
            <span className="text-lg font-mono font-bold text-bullish">2.4</span>
          </div>
        </div>

        <div className="p-4 bg-bearish/10 border border-bearish/20 rounded-lg flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-bearish flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-bearish">Circuit Breaker</h3>
            <p className="text-xs text-slate-400 mt-1">
              Auto-halt triggered if volatility exceeds 15% within a 5-minute window.
            </p>
            <button className="mt-3 px-3 py-1.5 bg-bearish/20 hover:bg-bearish/30 text-bearish text-xs font-mono rounded border border-bearish/30 transition-colors">
              MANUAL OVERRIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
