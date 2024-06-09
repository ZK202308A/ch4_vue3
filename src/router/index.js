import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../pages/MainPage.vue'
import AboutView from '../pages/AboutPage.vue'
import todoRouter from "./todoRouter.js";
import memberRouter from "./memberRouter.js";


const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    todoRouter,
    memberRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router