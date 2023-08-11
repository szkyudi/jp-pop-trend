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
        ({
          populationType,
          name,
          value,
          defaultChecked,
          checked,
          onChange,
        }) => (
          <SegmentedControlItem
            key={populationType}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
          >
            {populationType}
          </SegmentedControlItem>
        ),
      )}
    </SegmentedControl>
  )
}
