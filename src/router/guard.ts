import type { Router, RouteRecordName } from 'vue-router';
import { useUserStore } from '../stores/useUserStore.ts';


const WHITE_LIST: RouteRecordName[] = ['Login'];

export const createRouteGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    console.log('beforeEach', to, from);
    const userStore = useUserStore();

    if (WHITE_LIST.includes(to.name as RouteRecordName)) {
      next();
      return;
    }

    if (!userStore.user.id) {
      await userStore.getUserInfo();
    }

    next();
  });
  router.afterEach(() => {
    console.log('afterEach');
  });
};
