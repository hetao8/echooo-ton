import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
const isDev = process.env.NODE_ENV === 'dev';
import config from './vs.config.json';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5172,
    strictPort: false,
    host: '0.0.0.0'
  },
  base: isDev ? './' : `${config.aws.HostName}/${config.aws.prefix}/${config.upload.s3Static}`,
})
