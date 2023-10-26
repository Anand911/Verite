import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import Games from "./components/Games/Content.vue";
import Test from "./components/Test.vue";
const routes = [
    {
        path: '/Verite/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Verite/games',
        name: 'Games',
        component: Games
    },
    {
        path:'/Verite/test',
        name:'Test',
        component:Test
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')