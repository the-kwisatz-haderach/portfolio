import bodyParser from 'body-parser'
import errorHandler from './error-handler'

const middlewares = [
  bodyParser.json()
]

export default middlewares
export { errorHandler }
