'use client'

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type CheckedPrefecturesContext = number[]

const checkedPrefecturesContext = createContext<CheckedPrefecturesContext>([])
const setCheckedPrefecturesContext = createContext<
  Dispatch<SetStateAction<CheckedPrefecturesContext>>
>(() => undefined)

type Props = PropsWithChildren<{
  defaultChecked?: CheckedPrefecturesContext
}>
function CheckedPrefecturesProvider({ children, defaultChecked = [] }: Props) {
  const [checkedPrefectures, setCheckedPrefectures] =
    useState<CheckedPrefecturesContext>(defaultChecked)
  return (
    <checkedPrefecturesContext.Provider value={checkedPrefectures}>
      <setCheckedPrefecturesContext.Provider value={setCheckedPrefectures}>
        {children}
      </setCheckedPrefecturesContext.Provider>
    </checkedPrefecturesContext.Provider>
  )
}

const useCheckedPrefectures = () => useContext(checkedPrefecturesContext)
const useSetCheckedPrefectures = () => useContext(setCheckedPrefecturesContext)

export {
  useCheckedPrefectures,
  useSetCheckedPrefectures,
  CheckedPrefecturesProvider,
}
