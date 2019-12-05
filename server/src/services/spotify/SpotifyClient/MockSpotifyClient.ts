import { Request, Response, NextFunction } from 'express'
import qs from 'querystring'
import axios from 'axios'
import SpotifyClient, { SpotifyError, ClientCredentials } from './SpotifyClient'

class MockSpotifyClient extends SpotifyClient {
  constructor (credentials: ClientCredentials, scopes: string[]) {
    super(credentials, scopes)
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

  public authorizeCallback (req: Request, _res: Response, next: NextFunction): Promise<void> {
    const { query } = req
    if (query.state !== this.state) {
      next(new SpotifyError(401, 'Invalid state parameter provided.'))
    }
    if (query.error) {
      next(query.error)
    }
    if (query.code) {
      return Promise.resolve({
        data: {
          access_token: 'some-access-token',
          refresh_token: 'some-refresh-token',
          expires_in: 1,
          scope: this.scopes.join(' ')
        }
      })
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
      return Promise.resolve({
        data: {
          access_token: 'some-new-access-token',
          scope: this.scopes.join(' '),
          expires_in: 1
        }
      })
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

export default MockSpotifyClient
