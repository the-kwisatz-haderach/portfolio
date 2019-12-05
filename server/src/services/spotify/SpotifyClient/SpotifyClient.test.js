import qs from 'querystring'
import MockSpotifyClient from './MockSpotifyClient'
import { SpotifyError } from './SpotifyClient'

describe('The SpotifyClient', () => {
  const mockSpotifyClient = new MockSpotifyClient({
    clientId: 'testId',
    clientSecret: 'testSecret',
    redirectUri: 'http://test/callback'
  }, ['some-mock-scope', 'some-other-mock-scope'])

  test('it is an instance of MockSpotifyClient', () => {
    expect(mockSpotifyClient).toBeInstanceOf(MockSpotifyClient)
  })

  test('it has specific properties', () => {
    const properties = Object.getOwnPropertyNames(mockSpotifyClient)
    expect(properties).toEqual(expect.arrayContaining([
      'accessToken',
      'tokenIsValid',
      'grantedScopes',
      'scopes'
    ]))
  })

  describe('the Authorize method', () => {
    test('it should redirect to the Spotify authorize endpoint with a correct url query', () => {
      const mockReq = {}
      const mockRes = { redirect: jest.fn() }

      mockSpotifyClient.authorize(mockReq, mockRes)
      expect(mockRes.redirect.mock.calls.length).toBe(1)

      const [redirectUrl, query] = mockRes.redirect.mock.calls[0][0].split('?')
      const actualQuery = qs.parse(query)

      expect(redirectUrl).toEqual('https://accounts.spotify.com/authorize')
      expect(actualQuery.client_id).toEqual(mockSpotifyClient.clientId)
      expect(actualQuery.redirect_uri).toEqual(mockSpotifyClient.redirectUri)
      expect(actualQuery.response_type).toEqual('code')
      expect(actualQuery.scope).toEqual(mockSpotifyClient.scopes.join('%20'))
      expect(actualQuery.state).toMatch(/(\d|\w)+/)
    })
  })

  describe('the AuthorizeCallback method', () => {
    test('it should run the next callback with an error if query state doesn\'t match client state', () => {
      const mockReq = {
        query: {
          client_id: mockSpotifyClient.clientId,
          response_type: 'code',
          redirect_uri: mockSpotifyClient.redirectUri,
          state: 'bogus-state',
          scope: mockSpotifyClient.scopes.join('%20')
        }
      }
      const mockNext = jest.fn()
      mockSpotifyClient.authorizeCallback(mockReq, null, mockNext)
      expect(mockNext.mock.calls.length).toBe(1)
      expect(mockNext).toHaveBeenCalledWith(new SpotifyError(401, 'Invalid state parameter provided.'))
    })

    test('it should run the next callback with an error if query contains an error property', () => {
      const mockReq = {
        query: {
          client_id: mockSpotifyClient.clientId,
          response_type: 'code',
          redirect_uri: mockSpotifyClient.redirectUri,
          state: mockSpotifyClient.state,
          scope: mockSpotifyClient.scopes.join('%20'),
          error: 'This is an error!'
        }
      }
      const mockNext = jest.fn()
      mockSpotifyClient.authorizeCallback(mockReq, null, mockNext)
      expect(mockNext.mock.calls.length).toBe(1)
      expect(mockNext).toHaveBeenCalledWith(mockReq.query.error)
    })

    test('if no errors occur, it should update key properties of the client before calling next', () => {
      jest.useFakeTimers()
      const mockRes = { redirect: () => false }
      mockSpotifyClient.authorize(null, mockRes)
      const mockReq = {
        query: {
          client_id: mockSpotifyClient.clientId,
          response_type: 'code',
          redirect_uri: mockSpotifyClient.redirectUri,
          state: mockSpotifyClient.state,
          scope: mockSpotifyClient.scopes.join('%20'),
          code: 'some code'
        }
      }
      const mockNext = jest.fn()

      // Check that these properties are indeed undefined prior to method call
      expect(mockSpotifyClient.accessToken).toBeFalsy()
      expect(mockSpotifyClient.refreshToken).toBeFalsy()
      expect(mockSpotifyClient.tokenIsValid).toBeFalsy()
      expect(mockSpotifyClient.grantedScopes).toBeFalsy()

      return mockSpotifyClient.authorizeCallback(mockReq, null, mockNext)
        .then(() => {
          expect(mockNext.mock.calls.length).toBe(1)
          expect(mockSpotifyClient.accessToken).toBeTruthy()
          expect(mockSpotifyClient.refreshToken).toBeTruthy()
          expect(mockSpotifyClient.grantedScopes).toBeTruthy()
          expect(mockSpotifyClient.tokenIsValid).toBeTruthy()
          expect(typeof mockSpotifyClient.accessToken).toEqual('string')
          expect(typeof mockSpotifyClient.refreshToken).toEqual('string')
          expect(typeof mockSpotifyClient.tokenIsValid).toEqual('boolean')
          expect(mockSpotifyClient.grantedScopes instanceof Array).toBe(true)
          expect(typeof mockSpotifyClient.grantedScopes[0]).toBe('string')
          expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
          expect(mockNext).toHaveBeenCalledTimes(1)
        })
    })
  })

  describe('the refreshAccessToken method', () => {
    test('if the current token is invalid, it should return a promise and update the access token and related properties', () => {
      jest.useFakeTimers()
      mockSpotifyClient.tokenIsValid = false
      const mockNext = jest.fn()
      expect(mockSpotifyClient.tokenIsValid).toBe(false)
      return mockSpotifyClient.refreshAccessToken(mockNext)
        .then(() => {
          expect(mockNext.mock.calls.length).toBe(1)
          expect(mockNext.mock.calls[0].length).toBe(0)
          expect(setTimeout).toHaveBeenCalledTimes(1)
          expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
          expect(mockSpotifyClient.accessToken).toEqual('some-new-access-token')
          expect(mockSpotifyClient.tokenIsValid).toBe(true)
          expect(mockSpotifyClient.grantedScopes instanceof Array).toBe(true)
          expect(typeof mockSpotifyClient.grantedScopes[0]).toBe('string')
        })
    })

    test('if the current token is valid, it should call the next function immediately, bypassing the refresh', () => {
      const mockNext = jest.fn()
      mockSpotifyClient.refreshAccessToken(mockNext)
      expect(mockSpotifyClient.accessToken).toEqual(mockSpotifyClient.accessToken)
      expect(mockSpotifyClient.tokenIsValid).toBe(true)
      expect(mockNext).toHaveBeenCalledTimes(1)
      expect(mockNext.mock.calls[0].length).toBe(0)
    })
  })
})
