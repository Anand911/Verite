import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import Games from "./components/Games/Content.vue";
import Test from "./components/Test.vue";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVa3kY-11_jpsT_Fw6wBXPq4BBm7M_0g",
  authDomain: "verite-45774.firebaseapp.com",
  projectId: "verite-45774",
  storageBucket: "verite-45774.appspot.com",
  messagingSenderId: "340822673051",
  appId: "1:340822673051:web:254f4d49dca48aef7ce83e",
  measurementId: "G-K8G599E418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
    },
    {
        path:'/test',
        name:'Test',
        component:Test
    }
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
createApp(App).use(router).mount('#app')
