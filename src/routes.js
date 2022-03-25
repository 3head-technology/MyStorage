import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import UserView from "@/views/UserView";
import { createRouter, createWebHistory, } from "vue-router";
import {isLogged, } from "@/utilities/authenticationUtilities";

const routes = [
    {
        path: "/", name: HomeView.name, component: HomeView,
    },
    {
        path: "/login", name: LoginView.name, component: LoginView,
    },
    {
        path: "/user", name: UserView.name, component: UserView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (!isLogged() && to.name !== LoginView.name && to.name !== HomeView.name) {
        return { name: LoginView.name, };
    }
});

export default router;
