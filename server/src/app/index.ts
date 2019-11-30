import express, { Request, Response, NextFunction, Router } from 'express'
import { HttpException } from '../errors'

type ErrorHandlerMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => void
type Middleware = (req: Request, res: Response, next: NextFunction) => void

export default class App {
  public app: express.Application
  private router?: Router
  private errorHandler?: ErrorHandlerMiddleware
  private middlewares?: Middleware[]
  private publicFolder?: string

  constructor (
    router?: Router,
    errorHandler?: ErrorHandlerMiddleware,
    middlewares?: Middleware[],
    publicFolder?: string) {
    this.app = express()
    this.router = router
    this.errorHandler = errorHandler
    this.middlewares = middlewares
    this.publicFolder = publicFolder
    if (middlewares) this.initializeMiddlewares()
    if (router) this.initializeRouter()
    if (errorHandler) this.initializeErrorHandler()
  }

  public listen (port: string | number): void {
    this.app.listen(port, () => console.log(`Server is listening on port ${port}`))
  }

  private initializeRouter (): void {
    this.app.use(this.router)
  }

  private initializeErrorHandler (): void {
    this.app.use(this.errorHandler)
  }

  private initializeMiddlewares (): void {
    if (this.publicFolder) this.app.use(express.static(this.publicFolder))
    this.middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }
}
