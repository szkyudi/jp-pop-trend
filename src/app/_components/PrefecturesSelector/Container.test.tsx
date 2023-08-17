import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { Default, NoCheck, CheckedTokyoAndOsaka, CheckTokyo, UncheckTokyo } =
  composeStories(stories)

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
  const result = render(<CheckTokyo />)
  const tokyoCheckbox = result.getByRole('checkbox', { name: '東京都' })

  await CheckTokyo.play({ canvasElement: result.container })

  expect(tokyoCheckbox).toBeChecked()
})

it('チェックが外れること', async () => {
  const result = render(<UncheckTokyo />)
  const tokyoCheckbox = result.getByRole('checkbox', { name: '東京都' })

  await UncheckTokyo.play({ canvasElement: result.container })

  expect(tokyoCheckbox).not.toBeChecked()
})
