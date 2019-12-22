import { Request, Response, NextFunction } from 'express'
import qs from 'querystring'
import axios, { AxiosInstance } from 'axios'
import { HttpException } from '../../../errors'

export class SpotifyError extends HttpException {
  constructor (status: number, message: string) {
    super(status, message)
    this.status = status
    this.message = message
  }
}

export interface ClientCredentials {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

class SpotifyClient {
  protected clientId: string
  protected clientSecret: string
  protected redirectUri: string
  protected encodedCredentials: string
  protected state: string
  protected refreshToken: string
  protected axiosTokenInstance: AxiosInstance
  public scopes: string[]
  public accessToken: string
  public tokenIsValid: boolean
  public grantedScopes: string[]

  constructor (credentials: ClientCredentials, scopes: string[]) {
    this.clientId = credentials.clientId
    this.clientSecret = credentials.clientSecret
    this.redirectUri = credentials.redirectUri
    this.scopes = scopes
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
      scope: this.scopes.join('%20')
    })
    res.redirect('https://accounts.spotify.com/authorize?' + query)
  }

  public authorizeCallback (req: Request, res: Response, next: NextFunction): Promise<void> {
    const { query } = req
    if (query.state !== this.state) {
      next(new SpotifyError(401, 'Invalid state parameter provided.'))
    }
    if (query.error) {
      next(query.error)
    }
    if (query.code) {
      return this.axiosTokenInstance.post('', qs.stringify({
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
          next()
        })
        .catch(response => {
          next(new SpotifyError(response.status, 'Authorization failed.'))
        })
    }
  }

  public refreshAccessToken (next: NextFunction): Promise<void> {
    if (this.tokenIsValid) {
      next()
    }
    if (!this.tokenIsValid) {
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
          next()
        })
        .catch(response => {
          next(new SpotifyError(response.status, 'Refreshing token failed.'))
        })
    }
  }
}

export default SpotifyClient