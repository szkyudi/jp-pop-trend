import * as stories from './Header.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { Default } = composeStories(stories)

it('表示に変更がないこと', () => {
  const { asFragment } = render(<Default />)

  expect(asFragment()).toMatchSnapshot()
})
