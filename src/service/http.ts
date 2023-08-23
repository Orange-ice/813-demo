import { createFetch } from '@vueuse/core';
import { getToken } from '../utils/auth.ts';

const useHttp = createFetch({
  baseUrl: '/demo',
  options: {
    async beforeFetch({ options }) {
      const token = getToken();
      if (token) {
        options.headers = {
          Authorization: token,
        };
      }
      return { options };
    },
    async afterFetch({ response }) {
      return { response };
    },
  },
  fetchOptions: {
    mode: 'cors',
  }
});


export default useHttp;
