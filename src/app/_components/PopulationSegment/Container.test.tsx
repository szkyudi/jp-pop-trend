import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import userEvent from '@testing-library/user-event'

const { Default } = composeStories(stories)

it('デフォルトで「総人口」が選択されていること', () => {
  const { getByRole } = render(<Default />)
  const radio = getByRole('radio', { name: '総人口' })

  expect(radio).toBeChecked()
})

it('選択肢が切り替わること', async () => {
  const user = userEvent.setup()

  const { getByRole } = render(<Default />)
  const defaultCheckedRadio = getByRole('radio', { name: '総人口' })
  const targetRadio = getByRole('radio', { name: '年少人口' })

  expect(defaultCheckedRadio).toBeChecked()

  await user.click(targetRadio)

  expect(targetRadio).toBeChecked()
  expect(defaultCheckedRadio).not.toBeChecked()
})
