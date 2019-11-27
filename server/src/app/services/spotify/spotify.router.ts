import * as express from 'express'
import SpotifyClient from './SpotifyClient'
const router = express.Router()

const spotifyClient = new SpotifyClient({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
})

router.get('/auth', spotifyClient.authorize)
router.get('/callback', spotifyClient.authorize)

export default router
