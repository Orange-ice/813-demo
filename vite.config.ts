import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginForArco } from '@arco-plugins/vite-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: 'css'
    })
  ],
  server: {
    port: 8888,
    proxy: {
      '/ecdigit/api': {
        target: ' http://122.144.182.11:6609',
        changeOrigin: true,
      }
    }
  }
});
