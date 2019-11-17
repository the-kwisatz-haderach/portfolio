import express, { Response } from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import spotifyRouter from './services/spotify/spotify.router'

const app = express()

app.use(express.static(path.resolve('client', 'build')))
app.use(bodyParser.json())

app.use('/spotify', spotifyRouter)

app.get('/auth', (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'auth.html'))
})

app.get('/', (_, res: Response) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

export default app
