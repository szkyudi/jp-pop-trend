import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { NoCheck, CheckedTokyoAndOsaka } = composeStories(stories)

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
