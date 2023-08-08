'use client'

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type CheckedPrefCodesContext = number[]

const checkedPrefCodesContext = createContext<CheckedPrefCodesContext>([])
const setCheckedPrefCodesContext = createContext<
  Dispatch<SetStateAction<CheckedPrefCodesContext>>
>(() => undefined)

type Props = PropsWithChildren<{
  defaultChecked?: CheckedPrefCodesContext
}>
function CheckedPrefCodesProvider({ children, defaultChecked = [] }: Props) {
  const [checkedPrefCodes, setCheckedPrefCodes] =
    useState<CheckedPrefCodesContext>(defaultChecked)
  return (
    <checkedPrefCodesContext.Provider value={checkedPrefCodes}>
      <setCheckedPrefCodesContext.Provider value={setCheckedPrefCodes}>
        {children}
      </setCheckedPrefCodesContext.Provider>
    </checkedPrefCodesContext.Provider>
  )
}

const useCheckedPrefCodes = () => useContext(checkedPrefCodesContext)
const useSetCheckedPrefCodes = () => useContext(setCheckedPrefCodesContext)

export { useCheckedPrefCodes, useSetCheckedPrefCodes, CheckedPrefCodesProvider }
