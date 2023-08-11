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

type CheckedPopulationLabelContext = components['schemas']['PopulationLabel']

const checkedPopulationLabelContext =
  createContext<CheckedPopulationLabelContext>('総人口')
const setCheckedPopulationLabelContext = createContext<
  Dispatch<SetStateAction<CheckedPopulationLabelContext>>
>(() => undefined)

type Props = PropsWithChildren<{
  defaultChecked?: CheckedPopulationLabelContext
}>
function CheckedPopulationLabelProvider({
  children,
  defaultChecked = '総人口',
}: Props) {
  const [checkedPopulationLabel, setCheckedPopulationLabel] =
    useState<CheckedPopulationLabelContext>(defaultChecked)
  return (
    <checkedPopulationLabelContext.Provider value={checkedPopulationLabel}>
      <setCheckedPopulationLabelContext.Provider
        value={setCheckedPopulationLabel}
      >
        {children}
      </setCheckedPopulationLabelContext.Provider>
    </checkedPopulationLabelContext.Provider>
  )
}

const useCheckedPopulationLabel = () =>
  useContext(checkedPopulationLabelContext)
const useSetCheckedPopulationLabel = () =>
  useContext(setCheckedPopulationLabelContext)

export {
  useCheckedPopulationLabel,
  useSetCheckedPopulationLabel,
  CheckedPopulationLabelProvider,
}
