// meteora-trending-pools.ts

import axios from 'axios';

// Fetch top trending Meteora DAMM v2 liquidity pools
async function fetchTrendingPools() {
    try {
        const response = await axios.get('https://api.meteora.com/damm/v2/pools/trending');
        const trendingPools = response.data;

        console.log('Top Trending Meteora DAMM v2 Liquidity Pools:', trendingPools);
    } catch (error) {
        console.error('Error fetching trending pools:', error);
    }
}

fetchTrendingPools();
