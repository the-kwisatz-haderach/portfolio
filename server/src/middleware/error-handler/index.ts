import { Request, Response, NextFunction } from 'express'
import { HttpException } from '../../errors'

export default function errorHandler (err: HttpException, req: Request, res: Response, next: NextFunction): void {
  console.error(err)
  res.status(err.status || 500).json(err.message || 'Unknown server issue.')
}
