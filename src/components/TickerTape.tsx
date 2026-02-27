import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TICKERS = [
  { symbol: 'BTC', price: 64230.50, change: 2.4 },
  { symbol: 'ETH', price: 3450.20, change: -1.2 },
  { symbol: 'SOL', price: 145.80, change: 5.6 },
  { symbol: 'LINK', price: 18.20, change: 0.8 },
  { symbol: 'UNI', price: 12.40, change: -3.4 },
  { symbol: 'AVAX', price: 45.90, change: 1.5 },
  { symbol: 'DOT', price: 8.70, change: -0.5 },
  { symbol: 'MATIC', price: 0.95, change: 2.1 },
];

export function TickerTape() {
  return (
    <div className="w-full bg-quant-surface border-b border-quant-border overflow-hidden flex items-center h-12 shadow-quant">
      <div className="flex-shrink-0 bg-quant-accent px-4 py-2 font-mono text-sm font-bold text-quant-bg z-10 flex items-center h-full">
        LIVE MARKETS
      </div>
      <div className="flex-1 overflow-hidden relative h-full">
        <motion.div
          className="flex whitespace-nowrap absolute h-full items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...TICKERS, ...TICKERS, ...TICKERS].map((ticker, i) => {
            const isPositive = ticker.change >= 0;
            return (
              <div key={i} className="flex items-center space-x-2 px-6 border-r border-quant-border/50">
                <span className="font-mono font-semibold text-slate-300">{ticker.symbol}</span>
                <span className="font-mono text-slate-100">${ticker.price.toFixed(2)}</span>
                <span className={`flex items-center text-xs font-mono ${isPositive ? 'text-bullish' : 'text-bearish'}`}>
                  {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {Math.abs(ticker.change)}%
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
