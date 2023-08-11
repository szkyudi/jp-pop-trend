import s from './SegmentedControlItem.module.scss'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type Props = ComponentPropsWithoutRef<'input'> &
  PropsWithChildren<{
    name: string
    value: string
  }>
export function SegmentedControlItem({
  children,
  name,
  value,
  ...props
}: Props) {
  return (
    <li>
      <label>
        <input className={s.input} type='radio' {...props} />
        <span className={s.text}>{children}</span>
      </label>
    </li>
  )
}
