import { Container } from './Container'
import { CheckedPopulationTypeProvider } from '@/app/_contexts/checkedPopulationType'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

const meta: Meta<typeof Container> = {
  title: '表示する人口構成の選択',
  component: Container,
}

/**
 * @see https://github.com/testing-library/user-event/pull/1138
 * testing-library/user-eventには、radioボタンでの左右キーボード入力時の挙動が逆になっているバグがあるため、
 * 一時的に左右キーの入力を入れ替えている。
 */
const ArrowRightKey = '{ArrowLeft}'
const ArrowLeftKey = '{ArrowRight}'

export const Default: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
}

export const CheckedYoung: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='年少人口'>
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
    const radio = canvas.getByRole('radio', { name: '総人口' })

    radio.focus()
  },
}

export const ClickYoung: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: '年少人口' })

    await userEvent.click(radio)
  },
}

export const MoveDown: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    firstRadio.focus()
    await userEvent.keyboard('{ArrowDown}')
  },
}

export const MoveDownFromLastRadio: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole('radio')
    const lastRadio = canvas.getAllByRole('radio')[radios.length - 1]

    await userEvent.click(lastRadio)

    await userEvent.keyboard('{ArrowDown}')
  },
}

export const MoveUp: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    firstRadio.focus()
    await userEvent.keyboard('{ArrowUp}')
  },
}

export const MoveUpFromFirstRadio: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    await userEvent.click(firstRadio)
    firstRadio.focus()
    await userEvent.keyboard('{ArrowUp}')
  },
}

export const MoveRight: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    firstRadio.focus()

    await userEvent.keyboard(ArrowRightKey)
  },
}

export const MoveRightFromLastRadio: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole('radio')
    const lastRadio = radios[radios.length - 1]

    await userEvent.click(lastRadio)
    lastRadio.focus()

    await userEvent.keyboard(ArrowRightKey)
  },
}

export const MoveLeft: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    firstRadio.focus()

    await userEvent.keyboard(ArrowLeftKey)
  },
}

export const MoveLeftFromFirstRadio: StoryObj<typeof Container> = {
  decorators: [
    (Story) => (
      <CheckedPopulationTypeProvider defaultChecked='総人口'>
        <Story />
      </CheckedPopulationTypeProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const firstRadio = canvas.getAllByRole('radio')[0]

    await userEvent.click(firstRadio)
    firstRadio.focus()

    await userEvent.keyboard(ArrowLeftKey)
  },
}

export default meta
