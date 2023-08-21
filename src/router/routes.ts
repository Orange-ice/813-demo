import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/menu-layout.vue'),
    redirect: '/main/cdata',
    children: [
      {
        path: 'cdata',
        name: 'CarbonData',
        component: () => import('../pages/carbon-data.vue'),
      }
    ]
  }
];
