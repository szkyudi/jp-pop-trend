import { api } from '.'

export async function getPrefectures() {
  const response = await api.GET('/prefectures', {})

  if (response.data === undefined) {
    throw new Error('response.data is undefined')
  }

  return response.data.result
}
