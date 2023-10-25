import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import Games from "./components/Games/Content.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/games',
        name: 'Games',
        component: Games
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
