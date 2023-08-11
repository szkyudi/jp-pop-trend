import { useCheckedPopulationType } from '@/app/_contexts/checkedPopulationType'
import { useCheckedPrefCodes } from '@/app/_contexts/checkedPrefCodes'
import { Populations } from '@/lib/types/populations'

export function usePopulationChart(populations: Populations) {
  const checkedPrefCodes = useCheckedPrefCodes()
  const checkedPopulationType = useCheckedPopulationType()

  function getPopulationData(prefCode: number) {
    return (
      populations[prefCode].populations.data.find(
        (data) => data.label === checkedPopulationType,
      )?.data ?? []
    )
  }

  const dataList = checkedPrefCodes.map((prefCode) => ({
    prefecture: populations[prefCode].prefecture,
    data: getPopulationData(prefCode),
  }))

  return { dataList }
}
