'use client'

import { PopulationSegmentPresenter } from './Presenter'
import { usePopulationSegment } from './usePopulationSegment'

export function PopulationSegmentContainer() {
  const { segmentItems } = usePopulationSegment()

  return <PopulationSegmentPresenter items={segmentItems} />
}
