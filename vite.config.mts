import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    base: '/',
    server: {
        port: 3001,
        strictPort: true
    },
    plugins: [
        react(),
        splitVendorChunkPlugin(),
        createHtmlPlugin({
            minify: true,
            entry: '/src/index.tsx',
            template: './src/index.html'
        })
    ],
    build: {
        outDir: 'dist',
        assetsDir: './',
        sourcemap: false,
        rollupOptions: {
            input: '/src/index.tsx',
            output: {
                entryFileNames: 'js/main.[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'css/[name].[hash][extname]'
            }
        }
    }
})
