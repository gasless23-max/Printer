// risk-manager.ts

// This module provides risk management functionalities for legitimate trading algorithms.

export class RiskManager {
    private maxRiskPerTrade: number;
    private accountRisk: number;

    constructor(maxRiskPerTrade: number, accountRisk: number) {
        this.maxRiskPerTrade = maxRiskPerTrade;
        this.accountRisk = accountRisk;
    }

    // Method to calculate the risk of a trade
    public calculateTradeRisk(tradeAmount: number, entryPrice: number, stopLossPrice: number): number {
        const riskPerShare = entryPrice - stopLossPrice;
        const totalRisk = riskPerShare * tradeAmount;
        return totalRisk;
    }

    // Method to determine if the trade is acceptable based on risk limits
    public isTradeAcceptable(tradeAmount: number, entryPrice: number, stopLossPrice: number): boolean {
        const tradeRisk = this.calculateTradeRisk(tradeAmount, entryPrice, stopLossPrice);
        return tradeRisk <= this.maxRiskPerTrade && this.accountRisk >= tradeRisk;
    }

    // Method to set maximum risk per trade
    public setMaxRiskPerTrade(maxRisk: number): void {
        this.maxRiskPerTrade = maxRisk;
    }

    // Method to set account risk
    public setAccountRisk(accountRisk: number): void {
        this.accountRisk = accountRisk;
    }
}