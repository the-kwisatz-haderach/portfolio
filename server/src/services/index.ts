import { RequestHandler } from 'express'
import spotifyService from './spotify'

export interface Service {
  path: string;
  handler: RequestHandler;
}

const services: Service[] = [
  {
    path: '/spotify',
    handler: spotifyService
  }
]

export default services
