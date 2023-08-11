import { useCheckedPopulationLabel } from '@/app/_contexts/checkedPopulationLabel'
import { useCheckedPrefCodes } from '@/app/_contexts/checkedPrefCodes'
import { Populations } from '@/lib/types/populations'

export function usePopulationChart(populations: Populations) {
  const checkedPrefCodes = useCheckedPrefCodes()
  const checkedPopulationLabel = useCheckedPopulationLabel()

  function getPopulationData(prefCode: number) {
    return (
      populations[prefCode].populations.data.find(
        (data) => data.label === checkedPopulationLabel,
      )?.data ?? []
    )
  }

  const dataList = checkedPrefCodes.map((prefCode) => ({
    prefecture: populations[prefCode].prefecture,
    data: getPopulationData(prefCode),
  }))

  return { dataList }
}
