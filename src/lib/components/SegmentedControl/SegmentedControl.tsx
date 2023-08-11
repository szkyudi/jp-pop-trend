import s from './SegmentedControl.module.scss'
import { PropsWithChildren } from 'react'

export function SegmentedControl({ children }: PropsWithChildren) {
  return <ul className={s.list}>{children}</ul>
}
