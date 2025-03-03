<script>
console.log("📄 HomeView.vue loaded!"); // Debugging

export default {
  data() {
    return {
      coins: [],
      errorMessage: '',
    };
  },
  async created() {
    console.log("🔄 created() function is running..."); // ✅ Check if this logs

    try {
      console.log("📡 Fetching coin data from API...");
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Coin data received in Vue:", data);
      this.coins = [...data]; // ✅ Ensure Vue updates reactivity
    } catch (error) {
      console.error("❌ Error fetching coins:", error);
      this.errorMessage = "⚠️ Failed to load coin prices. Please try again later.";
    }
  }
};
</script>
