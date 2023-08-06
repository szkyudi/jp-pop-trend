'use client'

import { PrefecturesPresenter } from './Presenter'
import {
  useCheckedPrefectures,
  useSetCheckedPrefectures,
} from '@/app/_contexts/checkedPrefectures'

import { components } from '@/lib/api/schema'

type Props = {
  prefectures: components['schemas']['Prefecture'][]
}
export function PrefecturesContainer({ prefectures }: Props) {
  const checkedPrefectures = useCheckedPrefectures()
  const setCheckedPrefectures = useSetCheckedPrefectures()

  const handleChange = (prefCode: number) => (checked: boolean) => {
    if (checked) {
      setCheckedPrefectures([...checkedPrefectures, prefCode])
    } else {
      setCheckedPrefectures(
        checkedPrefectures.filter((code) => code !== prefCode),
      )
    }
  }

  return (
    <PrefecturesPresenter
      prefectures={prefectures}
      onChange={handleChange}
      checkedPrefectures={checkedPrefectures}
    />
  )
}
