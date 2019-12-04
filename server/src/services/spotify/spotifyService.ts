import path from 'path'
import { Router } from 'express'
import SpotifyClient from './SpotifyClient'
import { HttpException } from '../../errors'

type spotifyResourceRequester = (endpoint: string, accessToken: string) => Promise<any>

function makeSpotifyService (
  spotifyClient: SpotifyClient,
  spotifyResourceRequester: spotifyResourceRequester,
  allowedUsers?: string[]
): Router {
  const router = Router()

  router.get('/auth', spotifyClient.authorize.bind(spotifyClient))
  router.get('/auth/callback',
    spotifyClient.authorizeCallback.bind(spotifyClient),
    async (_req, res, next) => {
      if (allowedUsers.length) {
        const userData = await spotifyResourceRequester('', spotifyClient.accessToken)
        if (!allowedUsers.includes(userData.id)) {
          return next(new HttpException(401, 'User id blocked.'))
        }
      }
      res.redirect(path.resolve(__dirname, 'auth'))
    })

  router.all('/api/*', async (_req, _res, next) => {
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
  })

  router.get('/api/user', async (_req, res, next) => {
    try {
      const data = await spotifyResourceRequester('', spotifyClient.accessToken)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })
  router.get('/api/recently-played', async (_req, res, next) => {
    try {
      const data = await spotifyResourceRequester('/player/recently-played', spotifyClient.accessToken)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })
  router.get('/api/currently-playing', async (_req, res, next) => {
    try {
      const data = await spotifyResourceRequester('/player/currently-playing', spotifyClient.accessToken)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })
  router.get('/api/playlists', async (_req, res, next) => {
    try {
      const data = await spotifyResourceRequester('/playlists', spotifyClient.accessToken)
      res.json(data)
    } catch (err) {
      next(err)
    }
  })

  return router
}

export default makeSpotifyService
