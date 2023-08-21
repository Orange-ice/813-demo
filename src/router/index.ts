import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.ts';
import { createRouteGuard } from './guard.ts';


export const router = createRouter({
  history: createWebHistory(),
  routes,
});
createRouteGuard(router);


