import { SegmentedControl } from './SegmentedControl'
import { SegmentedControlItem } from './SegmentedControlItem'
import { within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl,
}

export const Default: StoryObj<typeof SegmentedControl> = {
  args: {
    children: (
      <>
        <SegmentedControlItem name='test' value='1'>
          One
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='2'>
          Two
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='3'>
          Three
        </SegmentedControlItem>
      </>
    ),
  },
}

export const HasChecked: StoryObj<typeof SegmentedControl> = {
  args: {
    children: (
      <>
        <SegmentedControlItem name='test' value='1' defaultChecked>
          One
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='2'>
          Two
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='3'>
          Three
        </SegmentedControlItem>
      </>
    ),
  },
}

export const HasFocus: StoryObj<typeof SegmentedControl> = {
  args: {
    children: (
      <>
        <SegmentedControlItem name='test' value='1' defaultChecked>
          One
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='2'>
          Two
        </SegmentedControlItem>
        <SegmentedControlItem name='test' value='3'>
          Three
        </SegmentedControlItem>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstItem = canvas.getByRole('radio', { name: 'One' })
    firstItem.focus()
  },
}

export default meta
