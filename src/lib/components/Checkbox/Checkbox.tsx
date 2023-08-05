import s from './Checkbox.module.scss'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  checked: boolean
  onChange: (checked: boolean) => void
}>
export function Checkbox({ children, checked, onChange }: Props) {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={s.span}>{children}</span>
    </label>
  )
}
