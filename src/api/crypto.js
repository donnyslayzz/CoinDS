import axios from 'axios';

console.log("🔥 crypto.js loaded!");  // Debugging

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const CURRENCY = 'usd';

export async function getTop100Coins() {
  try {
    console.log("🔄 Fetching top 100 coins...");  // Debugging
    const response = await axios.get(`${API_URL}?vs_currency=${CURRENCY}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    console.log("✅ Coins received:", response.data);  // Debugging
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching coins:", error);
    return [];
  }
}
