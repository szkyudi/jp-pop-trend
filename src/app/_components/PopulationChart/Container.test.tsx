import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { Default, NoData, NoPopulationType } = composeStories(stories)

it('デフォルトの表示が変わっていないこと', () => {
  const { container } = render(<Default />)

  expect(container).toMatchSnapshot()
})

it('データが存在しないときはエラーが発生すること', () => {
  expect(() => render(<NoData />)).toThrowError()
})

it('存在しない人口種別を指定したときはエラーが発生しないこと', () => {
  expect(() => render(<NoPopulationType />)).not.toThrowError()
})
