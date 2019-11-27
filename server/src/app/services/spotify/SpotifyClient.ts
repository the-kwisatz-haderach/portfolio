import { Request, Response } from 'express'
import qs from 'querystring'
import axios, { AxiosInstance } from 'axios'

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
  private encodedCredentials: string
  private redirectUri: string
  private state: string
  private refreshToken: string
  private accessToken: string
  public tokenIsValid: boolean
  public axiosTokenInstance: AxiosInstance
  public grantedScopes: string[]
  public endpointBase = 'https://accounts.spotify.com/'

  constructor (credentials: ClientCredentials) {
    this.clientId = credentials.clientId
    this.clientSecret = credentials.clientSecret
    this.redirectUri = credentials.redirectUri
    this.encodedCredentials = Buffer
      .from(this.clientId + ':' + this.clientSecret)
      .toString('base64')
    this.axiosTokenInstance = axios.create({
      baseURL: this.endpointBase + 'api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${this.encodedCredentials}`
      }
    })
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

  public authorizeCallback (req: Request, res: Response): void {
    const { query } = req
    if (query.state !== this.state) {
      res.status(401).end()
    }
    if (query.error) {
      res.json({ error: query.error })
    }
    if (query.code) {
      this.axiosTokenInstance.post('', qs.stringify({
        grant_type: 'authorization_code',
        code: query.code,
        redirect_uri: this.redirectUri
      }))
        .then(({ data }) => {
          setTimeout(() => {
            this.tokenIsValid = false
          }, 1000 * data.expires_in)
          this.tokenIsValid = true
          this.accessToken = data.access_token
          this.refreshToken = data.refresh_token
          this.grantedScopes = data.scope.split(' ')
          res.end()
        })
        .catch((response) => {
          console.error(response)
          res.end()
        })
    }
  }

  private refreshAccessToken (): Promise<void> {
    return this.axiosTokenInstance.post('', qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken
    }))
      .then(({ data }) => {
        setTimeout(() => {
          this.tokenIsValid = false
        }, 1000 * data.expires_in)
        this.tokenIsValid = true
        this.accessToken = data.access_token
        this.grantedScopes = data.scope.split(' ')
      })
      .catch((res) => {
        console.error(res)
        res.end()
      })
  }

  public getRecentlyPlayedTrack (): void {
    axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
      .then(({ data }) => console.log(data))
      .catch((res) => {
        console.error(res)
      })
  }
}

export default SpotifyClient
