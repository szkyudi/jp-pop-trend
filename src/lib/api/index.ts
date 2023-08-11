import { paths } from './schema'
import createClient from 'openapi-fetch'

export const api = createClient<paths>({
  baseUrl: 'https://opendata.resas-portal.go.jp/api/v1',
  headers: {
    'X-API-KEY': process.env.RESAS_API_KEY!,
  },
})
