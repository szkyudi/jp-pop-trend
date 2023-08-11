import { Container } from './Container'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  component: Container,
}

export const Default: StoryObj<typeof Container> = {
  render: () => (
    <Container>
      <div style={{ background: 'blue', height: 200 }}></div>
    </Container>
  ),
}

export default meta
