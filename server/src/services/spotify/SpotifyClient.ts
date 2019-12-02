import { Request, Response, NextFunction } from 'express'
import qs from 'querystring'
import axios, { AxiosInstance } from 'axios'
import { HttpException } from '../../errors'

class SpotifyError extends HttpException {
  constructor (status: number, message: string) {
    super(status, message)
    this.status = status
    this.message = message
  }
}

interface ClientCredentials {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

class SpotifyClient {
  private clientId: string
  private clientSecret: string
  private encodedCredentials: string
  private redirectUri: string
  private state: string
  private refreshToken: string
  private axiosTokenInstance: AxiosInstance
  public accessToken: string
  public tokenIsValid: boolean
  public grantedScopes: string[]

  constructor (credentials: ClientCredentials) {
    this.clientId = credentials.clientId
    this.clientSecret = credentials.clientSecret
    this.redirectUri = credentials.redirectUri
    this.encodedCredentials = Buffer
      .from(this.clientId + ':' + this.clientSecret)
      .toString('base64')
    this.axiosTokenInstance = axios.create({
      baseURL: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${this.encodedCredentials}`
      }
    })
  }

  public authorize (_req: Request, res: Response): void {
    this.state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const query = qs.stringify({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      state: this.state,
      scope: 'playlist-read-collaborative%20user-read-currently-playing%20user-read-recently-played'
    })
    res.redirect('https://accounts.spotify.com/authorize?' + query)
  }

  public authorizeCallback (req: Request, res: Response, next: NextFunction): void {
    const { query } = req
    if (query.state !== this.state) {
      next(new SpotifyError(401, 'Invalid state parameter provided.'))
    }
    if (query.error) {
      next(query.error)
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
          res.redirect('/auth')
        })
        .catch(response => {
          next(new SpotifyError(response.status, 'Authorization failed.'))
        })
    }
  }

  public refreshAccessToken (): Promise<void> {
    console.log('Refreshing!')
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
      .catch(response => {
        throw new SpotifyError(response.status, 'Refreshing token failed.')
      })
  }
}

export default SpotifyClient
