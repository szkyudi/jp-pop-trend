import { PrefecturesContainer } from './Container'
import { api } from '@/lib/api'

export default async function Prefectures() {
  const { data } = await api.GET('/prefectures', {})

  if (!data) {
    return null
  }

  return <PrefecturesContainer prefectures={data.result} />
}
