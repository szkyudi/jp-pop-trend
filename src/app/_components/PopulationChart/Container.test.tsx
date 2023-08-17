import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const { Default } = composeStories(stories)

it('表示が変わっていないこと', () => {
  const { container } = render(<Default />)

  expect(container).toMatchSnapshot()
})
