import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Intercept PayU POST Callbacks
        if (req.method === 'POST') {
          if (req.url.includes('/payment/success-callback')) {
            // Redirect to Frontend Success Route
            res.statusCode = 303;
            res.setHeader('Location', '/price-page?status=success');
            res.end();
            return;
          }
          if (req.url.includes('/payment/failure-callback')) {
            // Redirect to Frontend Failure Route
            res.statusCode = 303;
            res.setHeader('Location', '/price-page?status=failure');
            res.end();
            return;
          }
          // Handle PayU test environment default response
          if (req.url.includes('/newResponse')) {
            // Parse the PayU response and redirect with status
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              const params = new URLSearchParams(body);
              const status = params.get('status') || 'failure';
              res.statusCode = 303;
              res.setHeader('Location', `/price-page?status=${status}&${body}`);
              res.end();
            });
            return;
          }
        }
        next();
      });
    }
  }
})
