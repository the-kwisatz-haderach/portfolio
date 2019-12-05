import makeSpotifyService from './spotifyService'
import SpotifyClient from './SpotifyClient/SpotifyClient'
import getSpotifyResource from './getSpotifyResource'
import spotifyTokenRefresher from './spotifyTokenRefresher'

const spotifyClient = new SpotifyClient({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
}, [
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-read-recently-played'
])

const spotifyService = makeSpotifyService(
  spotifyClient,
  getSpotifyResource,
  spotifyTokenRefresher(spotifyClient),
  [process.env.SPOTIFY_USER_ID]
)

export default spotifyService
