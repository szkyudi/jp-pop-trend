import s from './Container.module.scss'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>
export function Container({ children }: Props) {
  return <div className={s.container}>{children}</div>
}
