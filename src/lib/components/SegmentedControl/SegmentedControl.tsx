import s from './SegmentedControl.module.scss'
import { PropsWithChildren } from 'react'

export function SegmentedControl({ children }: PropsWithChildren) {
  return (
    <fieldset role='radiogroup'>
      <ul className={s.list}>{children}</ul>
    </fieldset>
  )
}
