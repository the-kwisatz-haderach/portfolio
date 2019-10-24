import express, { Response } from 'express'
import path from 'path'

const app = express()

app.get('*', (_, res: Response) => res.sendFile(path.resolve('client', 'build', 'index.html')))

export default app
