import { Request, Response } from 'express'
import qs from 'querystring'

interface ClientCredentials {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

interface SpotifyCallbackQueryParameters {
  state: string;
  code?: string;
  error?: string;
}

class SpotifyClient {
  clientId: string
  clientSecret: string
  redirectUri: string
  state: string
  endpointBase = 'https://accounts.spotify.com/'

  constructor (credentials: ClientCredentials) {
    this.clientId = credentials.clientId
    this.clientSecret = credentials.clientSecret
    this.redirectUri = credentials.redirectUri
  }

  authorize (_req: Request, res: Response): void {
    console.log(this)
    this.state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const query = qs.stringify({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      state: this.state,
      scope: 'playlist-read-collaborative%20user-read-currently-playing%20user-read-recently-played'
    })
    res.redirect(this.endpointBase + 'authorize?' + query)
  }

  authorizeCallback (req: express.Request, res: express.Response): void {
    const query = { req }
    // if (query === this.state) {
    //   console.log('success')
    // }
  }
}

export default SpotifyClient
