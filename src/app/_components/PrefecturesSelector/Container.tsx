'use client'

import { Presenter } from './Presenter'
import {
  useCheckedPrefCodes,
  useSetCheckedPrefCodes,
} from '@/app/_contexts/checkedPrefCodes'

import { components } from '@/lib/api/schema'

type Props = {
  prefectures: components['schemas']['Prefecture'][]
}
export function Container({ prefectures }: Props) {
  const checkedPrefectures = useCheckedPrefCodes()
  const setCheckedPrefCodes = useSetCheckedPrefCodes()

  const handleChange = (prefCode: number) => (checked: boolean) => {
    if (checked) {
      setCheckedPrefCodes([...checkedPrefectures, prefCode])
    } else {
      setCheckedPrefCodes(
        checkedPrefectures.filter((code) => code !== prefCode),
      )
    }
  }

  return (
    <Presenter
      prefectures={prefectures}
      onChange={handleChange}
      checkedPrefectures={checkedPrefectures}
    />
  )
}
