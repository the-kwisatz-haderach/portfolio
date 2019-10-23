import http from 'http'
import app from './app'

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
