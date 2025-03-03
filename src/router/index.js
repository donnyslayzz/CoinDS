import { createRouter, createWebHashHistory } from 'vue-router';

// Define routes
const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/about', component: () => import('../views/AboutView.vue') }
];

// Create router instance
const router = createRouter({
  history: createWebHashHistory(), // Enables "hash mode" for GitHub Pages
  routes,
});

export default router;
