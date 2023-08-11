import { PopulationChartPresenter } from './Presenter.'
import { usePopulationChart } from './usePopuationChart'
import { Populations } from '@/lib/types/populations'

type Props = {
  populations: Populations
}
export function PopulationChartContainer({ populations }: Props) {
  const { dataList } = usePopulationChart(populations)

  return <PopulationChartPresenter dataList={dataList} />
}
