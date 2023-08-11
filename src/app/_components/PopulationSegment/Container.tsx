'use client'

import { Presenter } from './Presenter'
import { usePopulationSegment } from './usePopulationSegment'

export function Container() {
  const { segmentItems } = usePopulationSegment()

  return <Presenter items={segmentItems} />
}
