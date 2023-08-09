'use client'

import { useCheckedPrefCodes } from '@/app/_contexts/checkedPrefCodes'
import { components } from '@/lib/api/schema'
import { Populations } from '@/lib/types/populations'
import { useState, useEffect } from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

type Props = {
  populations: Populations
}
export function PopulationChart({ populations }: Props) {
  const checkedPrefCodes = useCheckedPrefCodes()
  const label: components['schemas']['PopulationLabel'] = '総人口'

  function getPopulationData(prefCode: number) {
    return (
      populations[prefCode].populations.data.find(
        (data) => data.label === label,
      )?.data ?? []
    )
  }

  // Hydrationの不一致を防ぐために、クライアント側でのみレンダリングする
  // https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <LineChart width={800} height={300}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='year' type='category' allowDuplicatedCategory={false} />
      <YAxis dataKey='value' />
      <Tooltip />
      <Legend />
      {checkedPrefCodes.map((prefCode) => (
        <Line
          key={prefCode}
          dataKey='value'
          data={getPopulationData(prefCode)}
          name={populations[prefCode].prefecture.prefName}
        />
      ))}
    </LineChart>
  )
}
