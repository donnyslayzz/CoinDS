<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const coins = ref([]);
const isLoading = ref(false);
const sortKey = ref('market_cap_rank'); // Default sorting by rank
const sortOrder = ref('asc'); // Default ascending order
const searchQuery = ref('');

// ✅ Fetch coin data directly from CoinGecko
const fetchCoinData = async () => {
  try {
    isLoading.value = true;
    console.log("🔄 Fetching coin data...");

    // CoinGecko API request
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100, // Fetch top 100 coins
        page: 1,
        sparkline: false,
        price_change_percentage: '24h'
      }
    });

    coins.value = response.data;
    console.log("✅ Data received:", coins.value);
  } catch (error) {
    console.error("❌ Error fetching coin data:", error);
  } finally {
    isLoading.value = false;
  }
};

// ✅ Sort the table dynamically
const sortedCoins = computed(() => {
  return [...coins.value].sort((a, b) => {
    let modifier = sortOrder.value === 'asc' ? 1 : -1;
    return (a[sortKey.value] - b[sortKey.value]) * modifier;
  });
});

// ✅ Filter coins based on search input
const filteredCoins = computed(() => {
  return sortedCoins.value.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const changeSort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
};

onMounted(fetchCoinData);
</script>

<template>
  <div>
    <h1>🔥 Top 100 Crypto Prices 🔥</h1>

    <!-- 🔍 Search Bar -->
    <input type="text" v-model="searchQuery" placeholder="Search for a coin..." />

    <table>
      <thead>
        <tr>
          <th @click="changeSort('market_cap_rank')">Rank</th>
          <th>Coin</th>
          <th @click="changeSort('current_price')">Price</th>
          <th @click="changeSort('price_change_percentage_24h')">24h Change (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in filteredCoins" :key="coin.id">
          <td>{{ coin.market_cap_rank }}</td>
          <td>
            <img :src="coin.image" :alt="coin.name" width="20" height="20" />
            <strong>{{ coin.name }}</strong> ({{ coin.symbol.toUpperCase() }})
          </td>
          <td>${{ coin.current_price.toLocaleString() }}</td>
          <td :style="{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: green;
  color: white;
  cursor: pointer;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th:hover {
  background-color: darkgreen;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  max-width: 300px;
}
</style>
