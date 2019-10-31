import express, { Response } from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(express.static(path.resolve('client', 'build')))
app.use(bodyParser.json())

app.get('/', (_, res: Response) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'))
})

export default app
