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

  function getPrefecture(prefCode: number) {
    return populations[prefCode].prefecture
  }

  function tickFormatter(value: number) {
    return `${value / 1000}`
  }

  const dataList = checkedPrefCodes.map((prefCode) => {
    try {
      return {
        prefecture: getPrefecture(prefCode),
        data: getPopulationData(prefCode),
      }
    } catch {
      throw new Error(`都道府県コード${prefCode}は存在しません`)
    }
  })

  return { dataList, tickFormatter }
}
