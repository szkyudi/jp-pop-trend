import { useCheckedPrefCodes } from '@/app/_contexts/checkedPrefCodes'
import { components } from '@/lib/api/schema'
import { Populations } from '@/lib/types/populations'

export function usePopulationChart(populations: Populations) {
  const checkedPrefCodes = useCheckedPrefCodes()
  const label: components['schemas']['PopulationLabel'] = '総人口'

  function getPopulationData(prefCode: number) {
    return (
      populations[prefCode].populations.data.find(
        (data) => data.label === label,
      )?.data ?? []
    )
  }

  const dataList = checkedPrefCodes.map((prefCode) => ({
    prefecture: populations[prefCode].prefecture,
    data: getPopulationData(prefCode),
  }))

  return { dataList }
}
