export const config = {
  isDevelopment: import.meta.env.DEV,
  
  // Content API configuration
  contentApi: {
    baseUrl: import.meta.env.VITE_CONTENT_API_URL || 'http://localhost:3001',
    apiKey: import.meta.env.VITE_CONTENT_API_KEY || 'dev-key',
  },
  
  // Local development fallback
  useLocalContent: import.meta.env.VITE_USE_LOCAL_CONTENT === 'true',
}