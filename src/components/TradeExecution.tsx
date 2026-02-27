import { ArrowRightLeft, Zap } from 'lucide-react';

export function TradeExecution() {
  return (
    <div className="bg-quant-surface rounded-xl border border-quant-border p-6 shadow-quant">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-100 font-sans tracking-tight">Execution Engine</h2>
        <Zap className="w-5 h-5 text-accent" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-quant-bg rounded-lg border border-quant-border">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-slate-400">Current Signal</span>
            <span className="text-lg font-mono font-bold text-bullish">BUY</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-mono text-slate-400">Confidence</span>
            <span className="text-lg font-mono font-bold text-slate-100">87.4%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-quant-bg rounded-lg border border-quant-border flex flex-col">
            <span className="text-xs font-mono text-slate-400 mb-1">Target Asset</span>
            <span className="text-lg font-mono font-bold text-slate-100">WETH</span>
          </div>
          <div className="p-4 bg-quant-bg rounded-lg border border-quant-border flex flex-col">
            <span className="text-xs font-mono text-slate-400 mb-1">Position Size</span>
            <span className="text-lg font-mono font-bold text-slate-100">12.5 ETH</span>
          </div>
        </div>

        <div className="p-4 bg-quant-bg rounded-lg border border-quant-border">
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
            <span>Routing via</span>
            <span>Est. Slippage</span>
          </div>
          <div className="flex justify-between text-sm font-mono text-slate-100">
            <span>Uniswap V3 (0.05%)</span>
            <span className="text-bullish">0.02%</span>
          </div>
        </div>

        <button className="w-full mt-4 py-3 bg-accent hover:bg-accent/90 text-quant-bg font-bold font-mono rounded-lg transition-colors flex items-center justify-center space-x-2">
          <ArrowRightLeft className="w-5 h-5" />
          <span>EXECUTE TRADE</span>
        </button>
      </div>
    </div>
  );
}
