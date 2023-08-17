import * as stories from './Container.stories'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const {
  Default,
  CheckedYoung,
  ClickYoung,
  MoveDown,
  MoveDownFromLastRadio,
  MoveUp,
  MoveUpFromFirstRadio,
  MoveRight,
  MoveRightFromLastRadio,
  MoveLeft,
  MoveLeftFromFirstRadio,
} = composeStories(stories)

it('デフォルトで「総人口」が選択されていること', () => {
  const { getByRole } = render(<Default />)
  const radio = getByRole('radio', { name: '総人口' })

  expect(radio).toBeChecked()
})

it('デフォルト値を設定すると初期状態で選択されていること', () => {
  const { getByRole } = render(<CheckedYoung />)
  const radio = getByRole('radio', { name: '年少人口' })

  expect(radio).toBeChecked()
})

it('クリックした選択肢が選択されること', async () => {
  const { getByRole, container } = render(<ClickYoung />)
  const radio = getByRole('radio', { name: '年少人口' })

  await ClickYoung.play({ canvasElement: container })

  expect(radio).toBeChecked()
})

it('下矢印キーで次の選択肢を移動できること', async () => {
  const { getAllByRole, container } = render(<MoveDown />)
  const secondRadio = getAllByRole('radio')[1]

  await MoveDown.play({ canvasElement: container })

  expect(secondRadio).toBeChecked()
})

it('上矢印キーで前の選択肢を移動できること', async () => {
  const { getAllByRole, container } = render(<MoveUp />)
  const lastRadio = getAllByRole('radio')[getAllByRole('radio').length - 1]

  await MoveUp.play({ canvasElement: container })

  expect(lastRadio).toBeChecked()
})

it('右矢印キーで次の選択肢を移動できること', async () => {
  const { getAllByRole, container } = render(<MoveRight />)
  const secondRadio = getAllByRole('radio')[1]

  await MoveRight.play({ canvasElement: container })

  expect(secondRadio).toBeChecked()
})

it('左矢印キーで前の選択肢を移動できること', async () => {
  const { getAllByRole, container } = render(<MoveLeft />)
  const lastRadio = getAllByRole('radio')[getAllByRole('radio').length - 1]

  await MoveLeft.play({ canvasElement: container })

  expect(lastRadio).toBeChecked()
})

it('最後の選択肢から右矢印キーで最初の選択肢に移動できること', async () => {
  const { getAllByRole, container } = render(<MoveRightFromLastRadio />)
  const firstRadio = getAllByRole('radio')[0]

  await MoveRightFromLastRadio.play({ canvasElement: container })

  expect(firstRadio).toBeChecked()
})

it('最初の選択肢から左矢印キーで最後の選択肢に移動できること', async () => {
  const { getAllByRole, container } = render(<MoveLeftFromFirstRadio />)
  const lastRadio = getAllByRole('radio')[getAllByRole('radio').length - 1]

  await MoveLeftFromFirstRadio.play({ canvasElement: container })

  expect(lastRadio).toBeChecked()
})

it('最後の選択肢から下矢印キーで最初の選択肢に移動できること', async () => {
  const { getAllByRole, container } = render(<MoveDownFromLastRadio />)
  const firstRadio = getAllByRole('radio')[0]

  await MoveDownFromLastRadio.play({ canvasElement: container })

  expect(firstRadio).toBeChecked()
})

it('最初の選択肢から上矢印キーで最後の選択肢に移動できること', async () => {
  const { getAllByRole, container } = render(<MoveUpFromFirstRadio />)
  const lastRadio = getAllByRole('radio')[getAllByRole('radio').length - 1]

  await MoveUpFromFirstRadio.play({ canvasElement: container })

  expect(lastRadio).toBeChecked()
})
