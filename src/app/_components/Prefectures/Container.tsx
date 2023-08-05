'use client'

import { PrefecturesPresenter } from './Presenter'
import { components } from '@/lib/api/schema'
import { createContext, useState } from 'react'

export const CheckedPrefecturesContext = createContext<number[]>([])

type Props = {
  prefectures: components['schemas']['Prefecture'][]
  defaultCheckedPrefectures?: number[]
}
export function PrefecturesContainer({
  prefectures,
  defaultCheckedPrefectures = [],
}: Props) {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>(
    defaultCheckedPrefectures,
  )

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
    <CheckedPrefecturesContext.Provider value={checkedPrefectures}>
      <PrefecturesPresenter
        prefectures={prefectures}
        onChange={handleChange}
        checkedPrefectures={checkedPrefectures}
      />
    </CheckedPrefecturesContext.Provider>
  )
}
