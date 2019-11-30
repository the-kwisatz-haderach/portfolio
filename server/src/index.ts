import path from 'path'
import { Response } from 'express'
import App from './app'
import makeRouter from './routers'
import middlewares, { errorHandler } from './middleware'
import services from './services'

const router = makeRouter(services)
const publicFolder = path.resolve('client', 'build')

router.get('/auth', (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'auth.html'))
})

router.get('/', (_, res: Response) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

const app = new App(router, errorHandler, middlewares, publicFolder)

app.listen(process.env.PORT || 8000)
