// TypeScript type definitions for Meteora DAMM v2 pools, balances, and market data structures

// Pool Type Definition
export interface Pool {
    id: string;
    name: string;
    assets: Asset[];
    totalSupply: number;
    totalValueLocked: number;
}

// Asset Type Definition
export interface Asset {
    id: string;
    symbol: string;
    balance: number;
}

// Balance Type Definition
export interface Balance {
    userId: string;
    poolId: string;
    assets: { [key: string]: number };
}

// Market Data Type Definition
export interface MarketData {
    poolId: string;
    price: number;
    volume: number;
    liquidity: number;
    timestamp: string;
}