import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import userEvent from '@testing-library/user-event'

const { Default, NoCheck, CheckedTokyoAndOsaka } = composeStories(stories)

it('デフォルトで何もチェックされていないこと', () => {
  const result = render(<Default />)
  const checkboxes = result.getAllByRole('checkbox')

  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked()
  })
})

it('選択しているときの表示が変わっていないこと', () => {
  const result = render(<CheckedTokyoAndOsaka />)

  expect(result).toMatchSnapshot()
})

it('選択していないときの表示が変わっていないこと', () => {
  const result = render(<NoCheck />)

  expect(result).toMatchSnapshot()
})

it('デフォルトのチェックが適用されること', () => {
  const result = render(<CheckedTokyoAndOsaka />)

  expect(result.getByLabelText('東京都')).toBeChecked()
  expect(result.getByLabelText('大阪府')).toBeChecked()
  expect(result.getByLabelText('北海道')).not.toBeChecked()
})

it('チェックができること', async () => {
  const user = userEvent.setup()
  const result = render(<Default />)
  const checkbox = result.getByRole('checkbox', { name: '東京都' })

  await user.click(checkbox)

  expect(checkbox).toBeChecked()
})

it('チェックが外れること', async () => {
  const user = userEvent.setup()
  const result = render(<CheckedTokyoAndOsaka />)
  const checkbox = result.getByRole('checkbox', { name: '東京都' })

  await user.click(checkbox)

  expect(checkbox).not.toBeChecked()
})
