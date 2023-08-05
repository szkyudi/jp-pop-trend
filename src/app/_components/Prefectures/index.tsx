import { PrefecturesContainer } from './Container'
import { api } from '@/lib/api'

export default async function Prefectures() {
  const { data } = await api.GET('/prefectures', {})

  if (!data) {
    return null
  }

  return (
    <PrefecturesContainer
      prefectures={data.result}
      defaultCheckedPrefectures={[13, 27]} // 東京都と大阪府をデフォルトでチェック
    />
  )
}
