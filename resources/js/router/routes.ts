import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/errors/not-found.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/landing-page.vue"),
    },
];

export default routes;
