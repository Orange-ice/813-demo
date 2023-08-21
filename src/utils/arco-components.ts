import { App } from 'vue';
import { Button } from '@arco-design/web-vue';

export default {
  install(Vue: App) {
    Vue.component('AButton', Button);
  }
};
