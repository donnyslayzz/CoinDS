import "@/assets/global.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');
