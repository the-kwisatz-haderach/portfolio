import { Response, Request } from 'express'
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
  private clientId: string
  private clientSecret: string
  private redirectUri: string
  private state: string
  public endpointBase = 'https://accounts.spotify.com/'

  constructor (credentials: ClientCredentials) {
    this.clientId = credentials.clientId
    this.clientSecret = credentials.clientSecret
    this.redirectUri = credentials.redirectUri
  }

  authorize (_req: Request, res: Response): void {
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

  authorizeCallback (req: Request, res: Response): void {
    const query = { req }
    if (query.state === this.state) {

    }
  }
}

export default SpotifyClient
