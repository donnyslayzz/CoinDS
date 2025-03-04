import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/CoinDS/', component: HomeView }, // ✅ Adjusted for GitHub Pages
  { path: '/CoinDS/about', component: AboutView }, // ✅ Ensure correct path for GitHub Pages
];

const router = createRouter({
  history: createWebHistory("/CoinDS/"), // ✅ Correct GitHub Pages path handling
  routes
});

export default router;
