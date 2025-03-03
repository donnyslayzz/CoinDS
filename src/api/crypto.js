import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const CURRENCY = 'usd';

export async function getTop100Coins() {
  try {
    const response = await axios.get(`${API_URL}?vs_currency=${CURRENCY}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return [];
  }
}
