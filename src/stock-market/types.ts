export type StockMarketSymbol = {
  name: string;
  sector: string;
};
export type StockMarketSymbols = {
  [sym in string]: StockMarketSymbol;
};

export type StockMarketSymbolWithPrice = StockMarketSymbol & {
  id: string;
  symbol: string;
  price: number;
  priceChange?: number;
  updatedAt: Date;
};

export type StockPortfolioPosition = StockMarketSymbolWithPrice & {
  quantity: number;
  value: number;
  performance: number;
};
