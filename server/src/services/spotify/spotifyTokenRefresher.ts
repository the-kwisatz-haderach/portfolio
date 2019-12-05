import { Request, Response, NextFunction } from 'express'
import { HttpException } from '../../errors'
import SpotifyClient from './SpotifyClient/SpotifyClient'

const spotifyTokenRefresher = (spotifyClient: SpotifyClient) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (!spotifyClient.accessToken) {
    return next(new HttpException(401, 'Access token missing.'))
  }
  if (!spotifyClient.tokenIsValid) {
    try {
      await spotifyClient.refreshAccessToken()
      next()
    } catch (err) {
      next(err)
    }
  }
  if (spotifyClient.tokenIsValid) {
    next()
  }
}

export default spotifyTokenRefresher
