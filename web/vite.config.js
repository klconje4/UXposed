export default {
  base: '/UXposed/',
  server: {
    proxy: {
      '/api': {
        target: 'https://nyszph4w3m.execute-api.us-west-2.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}