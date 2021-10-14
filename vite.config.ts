require('dotenv').config({ path: path.join(__dirname, '.env') })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'

import path from 'path'

const srcPath = path.resolve(__dirname, 'src', 'styles', 'variables.scss')

export default defineConfig(env => {
  return {
    plugins: [
      vue(),
      vuetify({autoImport: true}), // Enabled by default
    ],
    root: path.join(__dirname, 'src/render'),
    base: './',
    server: {
      port: +process.env.PORT,
    },
    resolve: {
      alias: {
        '@root': __dirname,
        '@': path.join(__dirname, 'src'),
      },
    },
    build: {
      outDir: path.join(__dirname, 'dist/render'),
      emptyOutDir: true,
      minify: false,
      commonjsOptions: {},
      sourcemap: true,
    },
    css: {
        preprocessorOptions: {
            sass: {additionalData: `@import ${srcPath}\n`},
            scss: {additionalData: `@import ${srcPath};\n`},
        },
    },
  }
})
