<template>
  <div>
    <h1>🔥 Top 100 Crypto Prices 🔥</h1>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="coins.length === 0 && !errorMessage">Loading prices... 🔄</p>

    <table v-if="coins.length > 0">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Coin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td>{{ coin.market_cap_rank }}</td>
          <td>{{ coin.name }} ({{ coin.symbol.toUpperCase() }})</td>
          <td>${{ coin.current_price.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTop100Coins } from '../api/crypto.js';

export default {
  data() {
    return {
      coins: [],
      errorMessage: "",
    };
  },
  async created() {
    console.log("🔄 Fetching coin data...");
    try {
      this.coins = await getTop100Coins();
    } catch (error) {
      console.error("❌ Error fetching coins:", error);
      this.errorMessage = "⚠️ Failed to load crypto prices.";
    }
  }
};
</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #4CAF50;
  color: white;
}
</style>
