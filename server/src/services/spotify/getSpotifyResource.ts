import axios, { AxiosResponse } from 'axios'
import { HttpException } from '../../errors'

export default function getSpotifyResource (resourceEndpoint: string, accessToken: string): AxiosResponse['data'] {
  const axiosSpotifyInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1/me',
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  return axiosSpotifyInstance.get(resourceEndpoint)
    .then(({ data }) => data)
    .catch(err => {
      throw new HttpException(err.status, err.message)
    })
}
