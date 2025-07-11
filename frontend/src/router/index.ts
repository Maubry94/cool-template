import { createRouter, createWebHistory } from "vue-router";
import edito, { notFound } from "@/domains/edito/router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("@/layouts/BaseLayout.vue"),
			children: [...edito(), notFound()],
		},
	],
});

export default router;
