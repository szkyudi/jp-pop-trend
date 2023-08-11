import { PrefecturesContainer } from './Container'
import { components } from '@/lib/api/schema'

type Props = {
  prefectures: components['schemas']['Prefecture'][]
}
export default async function Prefectures({ prefectures }: Props) {
  return <PrefecturesContainer prefectures={prefectures} />
}
