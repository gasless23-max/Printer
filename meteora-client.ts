// meteora-client.ts

// Client for fetching Meteora DAMM v2 pool data from on-chain

import axios from 'axios';

const API_URL = 'https://api.meteora.damm/v2/pools';

export const fetchMeteoraPools = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching Meteora pool data:', error);
        throw error;
    }
};

// Example usage
// fetchMeteoraPools().then(data => console.log(data));
