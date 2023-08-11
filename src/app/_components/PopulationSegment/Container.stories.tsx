import { PopulationSegmentContainer } from './Container'
import { CheckedPopulationTypeProvider } from '@/app/_contexts/checkedPopulationType'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof PopulationSegmentContainer> = {
  title: '表示する人口構成の選択',
  component: PopulationSegmentContainer,
}

export const Default: StoryObj<typeof PopulationSegmentContainer> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
}

export const Focus: StoryObj<typeof PopulationSegmentContainer> = {
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
