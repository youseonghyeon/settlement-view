import './assets/main.css'

import {createApp} from 'vue';
import App from './App.vue';

import VueCookies from "vue-cookies"
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: () => import('./components/Login.vue')},
        {path: '/about', component: () => import('./components/HelloWorld.vue')},
        {path: '/qq', redirect: '/'}
    ]
})


createApp(App)
    .use(VueCookies, {
        expireTimes: "30d",
        secure: true,
        withCredentials: true,
    })
    .use(router)
    .mount('#app');
