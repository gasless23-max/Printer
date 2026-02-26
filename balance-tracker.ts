// balance-tracker.ts

// This file contains functions for fetching and tracking balances and price information for portfolio analysis.

import axios from 'axios';

// Function to fetch balance information
export const fetchBalance = async (address: string): Promise<number> => {
    try {
        const response = await axios.get(`https://api.example.com/balance/${address}`);
        return response.data.balance;
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};

// Function to fetch price information
export const fetchPrice = async (token: string): Promise<number> => {
    try {
        const response = await axios.get(`https://api.example.com/price/${token}`);
        return response.data.price;
    } catch (error) {
        console.error('Error fetching price:', error);
        throw error;
    }
};

// Function to track portfolio performance
export const trackPortfolio = async (portfolio: Array<{token: string, amount: number}>): Promise<number> => {
    let totalValue = 0;
    for (const item of portfolio) {
        const price = await fetchPrice(item.token);
        totalValue += price * item.amount;
    }
    return totalValue;
};