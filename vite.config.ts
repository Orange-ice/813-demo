import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/ecdigit/api': {
        target: ' http://122.144.182.11:6609',
        changeOrigin: true,
      }
    }
  }
});
