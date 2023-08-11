import {
  CheckedPrefCodesProvider,
  useCheckedPrefCodes,
  useSetCheckedPrefCodes,
} from '.'
import { render, act } from '@testing-library/react'
import React from 'react'

describe('都道府県選択コンテキストのテスト', () => {
  const TestComponent = () => {
    const checkedPrefCodes = useCheckedPrefCodes()
    const setCheckedPrefCodes = useSetCheckedPrefCodes()

    return (
      <div>
        <div data-testid='checked-values'>{checkedPrefCodes.join(',')}</div>
        <button onClick={() => setCheckedPrefCodes([1, 2, 3])}>
          都道府県を設定
        </button>
      </div>
    )
  }

  it('デフォルト値を正しく持っていること', () => {
    const { getByTestId } = render(
      <CheckedPrefCodesProvider defaultChecked={[5, 6, 7]}>
        <TestComponent />
      </CheckedPrefCodesProvider>,
    )

    expect(getByTestId('checked-values').textContent).toBe('5,6,7')
  })

  it('都道府県の値を正しく設定できること', () => {
    const { getByTestId, getByText } = render(
      <CheckedPrefCodesProvider>
        <TestComponent />
      </CheckedPrefCodesProvider>,
    )

    act(() => {
      getByText('都道府県を設定').click()
    })

    expect(getByTestId('checked-values').textContent).toBe('1,2,3')
  })
})
