import { Container } from './Container'
import { CheckedPopulationTypeProvider } from '@/app/_contexts/checkedPopulationType'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof Container> = {
  title: '表示する人口構成の選択',
  component: Container,
}

export const Default: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
}

export const Focus: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByLabelText('総人口')
    radio.focus()
  },
}

export default meta
