import makeSpotifyService from './spotifyService'
import SpotifyClient from './SpotifyClient'
import getSpotifyResource from './getSpotifyResource'

const spotifyClient = new SpotifyClient({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
})

const spotifyService = makeSpotifyService(
  spotifyClient,
  getSpotifyResource,
  [process.env.SPOTIFY_USER_ID]
)

export default spotifyService
