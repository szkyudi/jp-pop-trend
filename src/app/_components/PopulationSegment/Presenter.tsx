import { usePopulationSegment } from './usePopulationSegment'
import s from './Presenter.module.scss'
import {
  SegmentedControl,
  SegmentedControlItem,
} from '@/lib/components/SegmentedControl'

type Props = {
  items: ReturnType<typeof usePopulationSegment>['segmentItems']
}
export function Presenter({ items }: Props) {
  return (
    <div className={s.container}>
      <SegmentedControl>
        {items.map(({ populationType, name, value, checked, onChange }) => (
          <SegmentedControlItem
            key={populationType}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
          >
            {populationType}
          </SegmentedControlItem>
        ))}
      </SegmentedControl>
    </div>
  )
}
