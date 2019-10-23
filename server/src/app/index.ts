import path from 'path'
import express from 'express'

const app = express()

app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')))

export default app
