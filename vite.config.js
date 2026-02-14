import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

export default defineConfig({
  plugins: [react()],
  base: './', // Această linie repară eroarea 404 din consolă
})