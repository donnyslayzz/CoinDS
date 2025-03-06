import axios from 'axios';

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const CURRENCY = "usd";
const PARAMS = `?vs_currency=${CURRENCY}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export async function getTop100Coins() {
  try {
    console.log("📡 Fetching real-time crypto prices...");
    const response = await axios.get(API_URL + PARAMS);
    console.log("✅ Data received:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching crypto data:", error);
    return [];
  }
}
