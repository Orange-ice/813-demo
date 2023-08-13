import { createFetch } from '@vueuse/core';

const useHttp = createFetch({
  // baseUrl: '/',
  options: {
    async beforeFetch({ options }) {

      // options.headers = {
      //   Authorization: 'token'
      // };
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
