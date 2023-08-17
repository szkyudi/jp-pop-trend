import { useCheckedPopulationType } from '@/app/_contexts/checkedPopulationType'
import { useCheckedPrefCodes } from '@/app/_contexts/checkedPrefCodes'
import { Populations } from '@/lib/types/populations'

export function usePopulationChart(populations: Populations) {
  const checkedPrefCodes = useCheckedPrefCodes()
  const checkedPopulationType = useCheckedPopulationType()

  function getPopulationData(prefCode: number) {
    try {
      return (
        populations[prefCode].populations.data.find(
          (data) => data.label === checkedPopulationType,
        )?.data ?? []
      )
    } catch (error) {
      throw new Error(`都道府県コード${prefCode}は存在しません`)
    }
  }

  function getPrefecture(prefCode: number) {
    try {
      return populations[prefCode].prefecture
    } catch (error) {
      throw new Error(`都道府県コード${prefCode}は存在しません`)
    }
  }

  const dataList = checkedPrefCodes.map((prefCode) => ({
    prefecture: getPrefecture(prefCode),
    data: getPopulationData(prefCode),
  }))

  return { dataList }
}
