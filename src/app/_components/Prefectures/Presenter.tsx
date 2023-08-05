import s from './Presenter.module.scss'
import { components } from '@/lib/api/schema'
import { Checkbox } from '@/lib/components/Checkbox'

type Props = {
  prefectures: components['schemas']['Prefecture'][]
  checkedPrefectures: number[]
  onChange: (prefCode: number) => (checked: boolean) => void
}
export function PrefecturesPresenter({
  prefectures,
  checkedPrefectures,
  onChange,
}: Props) {
  return (
    <ul className={s.list}>
      {prefectures.map(({ prefCode, prefName }) => (
        <li key={prefCode}>
          <Checkbox
            checked={checkedPrefectures.includes(prefCode)}
            onChange={onChange(prefCode)}
          >
            {prefName}
          </Checkbox>
        </li>
      ))}
    </ul>
  )
}
