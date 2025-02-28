import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/vendor/wsavc/index.ts'),
            name: 'h264-live-player2',
            // the proper extensions will be added
            fileName: 'h264-live-player2',
        },
    },
    plugins: [react()],
})
