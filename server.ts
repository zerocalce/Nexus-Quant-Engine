import express, { Request, Response, NextFunction } from "express";
import { createServer as createViteServer } from "vite";
import Database from 'better-sqlite3';

const db = new Database('nexus_analytics.db');

// Optimization: Use WAL mode for concurrent read/writes during high volatility
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS market_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT NOT NULL,
    price REAL NOT NULL,
    sentiment_score REAL NOT NULL,
    timestamp INTEGER NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_symbol_time 
  ON market_history (symbol, timestamp DESC);
`);

export const saveMarketData = db.prepare(`
  INSERT INTO market_history (symbol, price, sentiment_score, timestamp)
  VALUES (?, ?, ?, ?)
`);

export const getMarketData = db.prepare(`
  SELECT * FROM market_history ORDER BY timestamp DESC LIMIT 100
`);

export const validateSearchRequest = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  const clientSecret = process.env.CLIENT_SEARCH_SECRET || 'dev-secret';

  // 1. Verify internal client secret
  if (apiKey !== clientSecret) {
    res.status(401).json({ error: 'Unauthorized: Invalid Client Secret' });
    return;
  }

  // 2. Rate Limiting (Simple check, consider 'express-rate-limit' package)
  // Ensure we don't exceed Google's free/paid tier limits
  
  next();
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/market-data", (req, res) => {
    try {
      const data = getMarketData.all();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch market data" });
    }
  });

  app.post("/api/market-data", validateSearchRequest, (req, res) => {
    const { symbol, price, sentiment_score } = req.body;
    try {
      saveMarketData.run(symbol, price, sentiment_score, Date.now());
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to save market data" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
