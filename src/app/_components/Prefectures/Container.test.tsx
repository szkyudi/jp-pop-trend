import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { Default } = composeStories(stories)

it('表示が変わっていないこと', () => {
  const result = render(<Default />)

  expect(result).toMatchSnapshot()
})

it('デフォルトのチェックが適用されること', () => {
  const result = render(<Default defaultCheckedPrefectures={[1]} />)

  expect(result.getByLabelText('東京都')).not.toBeChecked()
  expect(result.getByLabelText('北海道')).toBeChecked()
})
