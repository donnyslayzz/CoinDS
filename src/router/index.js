import { createRouter, createWebHashHistory } from 'vue-router'; // ✅ Use hash mode for GitHub Pages
import HomeView from '../views/HomeView.vue';
import TradeView from '../views/TradeView.vue';
import WalletView from '../views/WalletView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/trade', component: TradeView },
  { path: '/wallet', component: WalletView }
];

const router = createRouter({
  history: createWebHashHistory('/CoinDS/'), // ✅ Hardcoded base URL for GitHub Pages
  routes,
});

export default router;
