import path from 'path'
import App from './App'
import router from '../router'
import middlewares, { errorHandler } from '../middleware'

const publicFolder = path.resolve('client', 'build')

router.get('/auth', (_req, res) => {
  res.sendFile(path.resolve('client', 'public', 'auth.html'))
})

router.get('/', (_req, res) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

const app = new App(router, errorHandler, middlewares, publicFolder)

export default app
