import * as stories from './Checkbox.stories'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'

const { Checked, Unchecked } = composeStories(stories)

test('チェック時の表示が正しいこと', () => {
  render(<Checked />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeChecked()
})

test('未チェック時の表示が正しいこと', () => {
  render(<Unchecked />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})
