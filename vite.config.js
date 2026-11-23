import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O proxy encaminha qualquer chamada que comece com /api para o Flask (porta 5000),
// removendo o prefixo /api. Assim, /api/livros vira http://127.0.0.1:5000/livros
// e o navegador não bloqueia por CORS.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
