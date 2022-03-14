import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import UserView from "@/views/UserView";
import {createRouter, createWebHistory, } from "vue-router";

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
export default router;
