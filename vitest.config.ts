/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        ...configDefaults.coverage.exclude!,
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
    },
    setupFiles: ['./vitest.setup.ts'],
    alias: {
      '@': '/src',
    },
  },
})
