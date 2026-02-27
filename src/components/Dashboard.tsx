import { TickerTape } from './TickerTape';
import { SentimentChart } from './SentimentChart';
import { RiskManager } from './RiskManager';
import { TradeExecution } from './TradeExecution';
import { Activity, Cpu, Database, Network } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="flex-1 flex flex-col">
      <TickerTape />
      
      <header className="px-8 py-6 border-b border-quant-border bg-quant-surface">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center space-x-3">
            <Activity className="w-6 h-6 text-accent" />
            <span>Quantitative Trading Dashboard</span>
          </h1>
          <p className="text-sm font-mono text-slate-400 mt-1">Diamond Architecture / Sub-ms Execution</p>
        </div>
        
        <div className="flex space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-bullish animate-pulse" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">L2 Ingestor</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-bullish animate-pulse" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">AI Brain</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-bullish animate-pulse" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">On-Chain</span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8 flex flex-col">
          <div className="flex-1 min-h-[400px]">
            <SentimentChart />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-quant-surface border border-quant-border rounded-xl p-4 shadow-quant">
              <div className="flex items-center space-x-2 mb-2">
                <Cpu className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase">Inference Latency</span>
              </div>
              <span className="text-xl font-mono font-bold text-slate-100">1.2ms</span>
            </div>
            <div className="bg-quant-surface border border-quant-border rounded-xl p-4 shadow-quant">
              <div className="flex items-center space-x-2 mb-2">
                <Database className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase">L2 Order Book</span>
              </div>
              <span className="text-xl font-mono font-bold text-slate-100">Syncing</span>
            </div>
            <div className="bg-quant-surface border border-quant-border rounded-xl p-4 shadow-quant">
              <div className="flex items-center space-x-2 mb-2">
                <Network className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase">RPC Latency</span>
              </div>
              <span className="text-xl font-mono font-bold text-bullish">45ms</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <TradeExecution />
          <RiskManager />
        </div>
      </main>
    </div>
  );
}
