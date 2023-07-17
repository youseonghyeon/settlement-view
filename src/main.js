import './assets/main.css'

import {createApp} from 'vue';
import App from './App.vue';

import VueCookies from "vue-cookies"
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {path: '/login', component: () => import('./components/Login.vue')},
        {path: '/', redirect: '/home'},
        {path: '/home', component: () => import('./components/Home.vue')},
        {path: '/batch', component: () => import('./components/Batch.vue')},
        {path: '/about', component: () => import('./components/About.vue')},
        {path: '/logging', component: () => import('./components/Logging.vue')},
    ]
})

const wasUrl = 'http://localhost:8001';

createApp(App)
    .use(VueCookies, {
        expireTimes: "30d",
        secure: true,
        withCredentials: true,
    })
    .use(router)
    .mount('#app');
