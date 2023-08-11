import {
  CheckedPopulationTypeProvider,
  useCheckedPopulationType,
  useSetCheckedPopulationType,
} from '.'
import { render, act } from '@testing-library/react'
import React from 'react'

describe('人口構成ラベル選択コンテキストのテスト', () => {
  const TestComponent = () => {
    const checkedPopulationType = useCheckedPopulationType()
    const setCheckedPopulationType = useSetCheckedPopulationType()

    return (
      <div>
        <div data-testid='checked-values'>{checkedPopulationType}</div>
        <button onClick={() => setCheckedPopulationType('年少人口')}>
          年少人口に設定する
        </button>
      </div>
    )
  }

  it('デフォルト値をが「総人口」であること', () => {
    const { getByTestId } = render(
      <CheckedPopulationTypeProvider>
        <TestComponent />
      </CheckedPopulationTypeProvider>,
    )

    expect(getByTestId('checked-values').textContent).toBe('総人口')
  })

  it('デフォルト値が正しく設定されること', () => {
    const { getByTestId } = render(
      <CheckedPopulationTypeProvider defaultChecked={'生産年齢人口'}>
        <TestComponent />
      </CheckedPopulationTypeProvider>,
    )

    expect(getByTestId('checked-values').textContent).toBe('生産年齢人口')
  })

  it('ラベルの値を正しく設定できること', () => {
    const { getByTestId, getByText } = render(
      <CheckedPopulationTypeProvider>
        <TestComponent />
      </CheckedPopulationTypeProvider>,
    )

    act(() => {
      getByText('年少人口に設定する').click()
    })

    expect(getByTestId('checked-values').textContent).toBe('年少人口')
  })
})
