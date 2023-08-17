import { usePopulationChart } from './usePopuationChart'
import { CheckedPrefCodesProvider } from '@/app/_contexts/checkedPrefCodes'
import { CheckedPopulationTypeProvider } from '@/app/_contexts/checkedPopulationType'
import { renderHook } from '@testing-library/react'

it('チェックされた県の人口だけが取得できること', () => {
  const { result } = renderHook(
    () =>
      usePopulationChart({
        [1]: {
          prefecture: {
            prefCode: 1,
            prefName: '北海道',
          },
          populations: {
            boundaryYear: 2020,
            data: [
              {
                label: '総人口',
                data: [
                  { year: 2020, value: 50 },
                  { year: 2021, value: 80 },
                  { year: 2022, value: 200 },
                ],
              },
            ],
          },
        },
        [13]: {
          prefecture: {
            prefCode: 13,
            prefName: '東京都',
          },
          populations: {
            boundaryYear: 2020,
            data: [
              {
                label: '総人口',
                data: [
                  { year: 2020, value: 100 },
                  { year: 2021, value: 200 },
                  { year: 2022, value: 300 },
                ],
              },
            ],
          },
        },
      }),
    {
      wrapper: ({ children }) => (
        <CheckedPrefCodesProvider defaultChecked={[13]}>
          <CheckedPopulationTypeProvider defaultChecked='総人口'>
            {children}
          </CheckedPopulationTypeProvider>
        </CheckedPrefCodesProvider>
      ),
    },
  )

  expect(
    result.current.dataList.find((data) => data.prefecture.prefCode === 1),
  ).toBeUndefined()
  expect(
    result.current.dataList.find((data) => data.prefecture.prefCode === 13),
  ).toBeDefined()
})

it('チェックされた人口種別だけが取得できること', () => {
  const { result } = renderHook(
    () =>
      usePopulationChart({
        [13]: {
          prefecture: {
            prefCode: 13,
            prefName: '東京都',
          },
          populations: {
            boundaryYear: 2020,
            data: [
              {
                label: '総人口',
                data: [
                  { year: 2020, value: 100 },
                  { year: 2021, value: 200 },
                  { year: 2022, value: 300 },
                ],
              },
              {
                label: '年少人口',
                data: [],
              },
              {
                label: '生産年齢人口',
                data: [],
              },
              {
                label: '老年人口',
                data: [],
              },
            ],
          },
        },
      }),
    {
      wrapper: ({ children }) => (
        <CheckedPrefCodesProvider defaultChecked={[13]}>
          <CheckedPopulationTypeProvider defaultChecked='総人口'>
            {children}
          </CheckedPopulationTypeProvider>
        </CheckedPrefCodesProvider>
      ),
    },
  )

  const dataList = result.current.dataList.find(
    (data) => data.prefecture.prefCode === 13,
  )

  expect(dataList?.data).toEqual([
    { year: 2020, value: 100 },
    { year: 2021, value: 200 },
    { year: 2022, value: 300 },
  ])
})

it('都道府県データが存在しないときはエラーが発生すること', () => {
  expect(() =>
    renderHook(() => usePopulationChart({}), {
      wrapper: ({ children }) => (
        <CheckedPrefCodesProvider defaultChecked={[13]}>
          <CheckedPopulationTypeProvider defaultChecked='総人口'>
            {children}
          </CheckedPopulationTypeProvider>
        </CheckedPrefCodesProvider>
      ),
    }),
  ).toThrowError()
})

it('存在しない人口種別がチェックされているときは空配列が返されること', () => {
  const { result } = renderHook(
    () =>
      usePopulationChart({
        [13]: {
          prefecture: {
            prefCode: 13,
            prefName: '東京都',
          },
          populations: {
            boundaryYear: 2020,
            data: [
              {
                label: '総人口',
                data: [
                  { year: 2020, value: 100 },
                  { year: 2021, value: 200 },
                  { year: 2022, value: 300 },
                ],
              },
            ],
          },
        },
      }),
    {
      wrapper: ({ children }) => (
        <CheckedPrefCodesProvider defaultChecked={[13]}>
          <CheckedPopulationTypeProvider defaultChecked='年少人口'>
            {children}
          </CheckedPopulationTypeProvider>
        </CheckedPrefCodesProvider>
      ),
    },
  )

  const dataList = result.current.dataList.find(
    (data) => data.prefecture.prefCode === 13,
  )

  expect(dataList?.data).toEqual([])
})
