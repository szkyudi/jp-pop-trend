import { Checkbox } from './Checkbox'
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

export default meta
