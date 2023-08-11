import { Container } from './Container'
import { components } from '@/lib/api/schema'

type Props = {
  prefectures: components['schemas']['Prefecture'][]
}
export function PrefecturesSelector({ prefectures }: Props) {
  return <Container prefectures={prefectures} />
}
