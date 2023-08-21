import type { Router } from 'vue-router';

export const createRouteGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    console.log('beforeEach', to, from);
    next();
  });
  router.afterEach(() => {
    console.log('afterEach');
  });
};
