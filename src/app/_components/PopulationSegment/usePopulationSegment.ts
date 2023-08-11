import {
  useCheckedPopulationType,
  useSetCheckedPopulationType,
} from '@/app/_contexts/checkedPopulationType'
import { components } from '@/lib/api/schema'

export function usePopulationSegment() {
  const checkedType = useCheckedPopulationType()
  const setCheckedType = useSetCheckedPopulationType()
  const populationTypes: components['schemas']['PopulationType'][] = [
    '総人口',
    '年少人口',
    '生産年齢人口',
    '老年人口',
  ]

  const segmentItems = populationTypes.map((populationType) => {
    return {
      populationType,
      name: 'populationType',
      value: populationType,
      checked: checkedType === populationType,
      onChange: () => setCheckedType(populationType),
    }
  })

  return {
    segmentItems,
  }
}
