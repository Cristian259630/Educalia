import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Signin from "@/views/Signin.vue";
import Registro from "@/views/Registro.vue";
import Profecionales from "./views/Profecionales.vue";
import Profile from "@/views/Profile.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/signin",
            component: Signin
        },
        {
            path: "/registro",
            component: Registro
        },
        {
            path: "/profecionales",
            component: Profecionales
        },
        {
            path: "/profile/:id",
            component: Profile
        }
    ]
});