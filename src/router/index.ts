import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import Register from '@/views/Register.vue';
import NotFound from '@/views/404.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },{
            path: '/404',
            name: '404',
            component: NotFound
        }

    ]
})

export default router
