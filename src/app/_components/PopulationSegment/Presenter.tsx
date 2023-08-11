import { usePopulationSegment } from './usePopulationSegment'

import {
  SegmentedControl,
  SegmentedControlItem,
} from '@/lib/components/SegmentedControl'

type Props = {
  items: ReturnType<typeof usePopulationSegment>['segmentItems']
}
export function PopulationSegmentPresenter({ items }: Props) {
  return (
    <SegmentedControl>
      {items.map(
        ({ label, name, value, defaultChecked, checked, onChange }) => (
          <SegmentedControlItem
            key={label}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
          >
            {label}
          </SegmentedControlItem>
        ),
      )}
    </SegmentedControl>
  )
}
