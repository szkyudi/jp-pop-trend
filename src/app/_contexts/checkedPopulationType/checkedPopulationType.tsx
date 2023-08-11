'use client'

import { components } from '@/lib/api/schema'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type CheckedPopulationTypeContext = components['schemas']['PopulationType']

const checkedPopulationTypeContext =
  createContext<CheckedPopulationTypeContext>('総人口')
const setCheckedPopulationTypeContext = createContext<
  Dispatch<SetStateAction<CheckedPopulationTypeContext>>
>(() => undefined)

type Props = PropsWithChildren<{
  defaultChecked?: CheckedPopulationTypeContext
}>
function CheckedPopulationTypeProvider({
  children,
  defaultChecked = '総人口',
}: Props) {
  const [checkedPopulationType, setCheckedPopulationType] =
    useState<CheckedPopulationTypeContext>(defaultChecked)
  return (
    <checkedPopulationTypeContext.Provider value={checkedPopulationType}>
      <setCheckedPopulationTypeContext.Provider
        value={setCheckedPopulationType}
      >
        {children}
      </setCheckedPopulationTypeContext.Provider>
    </checkedPopulationTypeContext.Provider>
  )
}

const useCheckedPopulationType = () => useContext(checkedPopulationTypeContext)
const useSetCheckedPopulationType = () =>
  useContext(setCheckedPopulationTypeContext)

export {
  useCheckedPopulationType,
  useSetCheckedPopulationType,
  CheckedPopulationTypeProvider,
}
