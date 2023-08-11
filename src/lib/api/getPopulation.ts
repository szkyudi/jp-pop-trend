import { api } from '.'

export async function getPopulation(prefCode: number) {
  const response = await api.GET('/population/composition/perYear', {
    params: {
      query: {
        prefCode,
        cityCode: '-',
      },
    },
  })

  if (response.data === undefined) {
    throw new Error('response.data is undefined')
  }

  return response.data.result
}
