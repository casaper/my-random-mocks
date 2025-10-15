import { mockStockMarketSymbolsWithPrice } from './mockStockMarketSymbolsWithPrice';
import { StockPortfolioPosition } from './types';

const randomStockSymbolsWithPrice = [...mockStockMarketSymbolsWithPrice]
  .sort(() => 0.5 - Math.random())
  .slice(0, 20);

export const mockStockPortfolioPositions: StockPortfolioPosition[] =
  randomStockSymbolsWithPrice.map(({ price, ...company }) => {
    const quantity = parseFloat((Math.random() * 100).toFixed(0));
    return {
      ...company,
      price,
      quantity, // Random quantity between 0 and 100
      value: quantity * price, // Random value between 0 and 10,000
      performance: parseFloat((Math.random() * 20 - 10).toFixed(2)), // Random performance between -10% and +10%
    };
  });
