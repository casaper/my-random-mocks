import { mockStockMarketSymbols } from './mockStockMarketSymbols';
import { StockMarketSymbolWithPrice } from './types';

export const mockStockMarketSymbolsWithPrice: StockMarketSymbolWithPrice[] =
  Object.entries(mockStockMarketSymbols).map(([symbol, company], index) => ({
    id: (index + 1).toString(),
    symbol,
    ...company,
    price: parseFloat((Math.random() * 100).toFixed(2)),
    updatedAt: new Date(),
  }));
