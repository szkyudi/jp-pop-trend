'use client'

import { Container } from './Container'
import { Populations } from '@/lib/types/populations'
import { useState, useEffect } from 'react'

type Props = {
  populations: Populations
}
export function PopulationChart({ populations }: Props) {
  // Hydrationの不一致を防ぐために、クライアント側でのみレンダリングする
  // https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return <Container populations={populations} />
}
