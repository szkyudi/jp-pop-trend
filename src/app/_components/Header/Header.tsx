import s from './Header.module.scss'
import { Container } from '@/lib/components/Contianer'

export function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <h1 className={s.title}>JP-POP-TREND</h1>
        </div>
      </Container>
    </header>
  )
}
