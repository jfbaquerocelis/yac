const config = {
  API_URL: (process.env.NODE_ENV === 'production') ? 'https://yac-backend.herokuapp.com' : 'http://localhost:3001',
  SOCKET_URL: (process.env.NODE_ENV === 'production') ? 'https://yac-backend.herokuapp.com' : 'http://localhost:3001'
}

export default config
