import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const isHMRHostDefined = process.env.HMR_HOST;

const hmrHost = isHMRHostDefined ? process.env.HMR_HOST.substring("https://".length) : "localhost";
const hmrClientPort = isHMRHostDefined ? 443 : 3000;

export default defineConfig({
  plugins: [svelte()],

  server: {
    port: 3000,
    hmr: {
      clientPort: hmrClientPort,
      host: hmrHost
    }
  }
});
