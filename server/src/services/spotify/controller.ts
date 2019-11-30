import express from 'express'
import SpotifyClient from './SpotifyClient'
const router = express.Router()

const spotifyClient = new SpotifyClient({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
})

router.get('/auth', spotifyClient.authorize.bind(spotifyClient))
router.get('/auth/callback', spotifyClient.authorizeCallback.bind(spotifyClient))
router.get('/recently', async (_req, res) => {
  const { data } = await spotifyClient.getRecentlyPlayed()
  res.json(data)
})
router.get('/currently', async (_req, res) => {
  const { data } = await spotifyClient.getCurrentlyPlaying()
  res.json(data)
})

export default router
