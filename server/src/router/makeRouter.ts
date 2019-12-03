import { Router } from 'express'
import { Service } from '../services'

export default function makeRouter (routes: Service[]): Router {
  const router = Router()
  routes.forEach(({ path, handler }) => {
    router.use(path, handler)
  })
  return router
}
