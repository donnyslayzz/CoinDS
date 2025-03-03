<template>
  <div>
    <h1>🔥 Top 100 Crypto Prices 🔥</h1>
    <table>
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
import { getTop100Coins } from '../api/crypto';

export default {
  data() {
    return {
      coins: []
    };
  },
  async created() {
    this.coins = await getTop100Coins();
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background: #333;
  color: white;
}
</style>
