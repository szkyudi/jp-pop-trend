import {
  useCheckedPopulationLabel,
  useSetCheckedPopulationLabel,
} from '@/app/_contexts/checkedPopulationLabel'
import { components } from '@/lib/api/schema'

export function usePopulationSegment() {
  const checkedLabel = useCheckedPopulationLabel()
  const setCheckedLabel = useSetCheckedPopulationLabel()
  const labels: components['schemas']['PopulationLabel'][] = [
    '総人口',
    '年少人口',
    '生産年齢人口',
    '老年人口',
  ]

  const segmentItems = labels.map((label) => {
    return {
      label,
      name: 'populationLabel',
      value: label,
      defaultChecked: checkedLabel === label,
      checked: checkedLabel === label,
      onChange: () => setCheckedLabel(label),
    }
  })

  return {
    segmentItems,
  }
}
