// 本地开发接口（配合 craco.config.js 的 proxy）
const devBaseURL = 'http://localhost:3000'
// 生产环境接口：优先读取 Vercel 注入的环境变量，否则使用默认接口
const proBaseURL = process.env.REACT_APP_API_URL || 'http://23.224.55.27:3000'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 8000
