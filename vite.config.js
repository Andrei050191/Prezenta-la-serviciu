import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

export default defineConfig({
  plugins: [react()],
  base: 'Prezenta-la-serviciu', // Pune aici numele proiectului de pe GitHub
})