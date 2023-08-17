import { Presenter } from './Presenter.'
import { usePopulationChart } from './usePopuationChart'
import { Populations } from '@/lib/types/populations'

type Props = {
  populations: Populations
}
export function Container({ populations }: Props) {
  const { dataList } = usePopulationChart(populations)

  return <Presenter dataList={dataList} />
}
