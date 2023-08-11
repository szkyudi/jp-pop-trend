import { Checkbox } from './Checkbox'
import { within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Checkbox',
    checked: true,
  },
}

export const Unchecked: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Checkbox',
    checked: false,
  },
}

export const CheckedFocus: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Checkbox',
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    checkbox.focus()
  },
}

export const UncheckedFocus: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Checkbox',
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    checkbox.focus()
  },
}

export default meta
