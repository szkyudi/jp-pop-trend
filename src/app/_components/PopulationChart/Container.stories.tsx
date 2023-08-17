import { Container } from './Container'
import { CheckedPrefCodesProvider } from '@/app/_contexts/checkedPrefCodes'
import { CheckedPopulationTypeProvider } from '@/app/_contexts/checkedPopulationType'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  component: Container,
  decorators: [
    (Story) => (
      <CheckedPrefCodesProvider defaultChecked={[13]}>
        <CheckedPopulationTypeProvider defaultChecked='総人口'>
          <Story />
        </CheckedPopulationTypeProvider>
      </CheckedPrefCodesProvider>
    ),
  ],
  args: {
    populations: {
      [13]: {
        prefecture: {
          prefCode: 13,
          prefName: '東京',
        },
        populations: {
          boundaryYear: 2021,
          data: [
            {
              label: '総人口',
              data: [
                { year: 2020, value: 100 },
                { year: 2021, value: 150 },
                { year: 2022, value: 300 },
                { year: 2023, value: 500 },
              ],
            },
            {
              label: '年少人口',
              data: [
                { year: 2020, value: 20 },
                { year: 2021, value: 30 },
                { year: 2022, value: 60 },
                { year: 2023, value: 100 },
              ],
            },
            {
              label: '生産年齢人口',
              data: [
                { year: 2020, value: 50 },
                { year: 2021, value: 75 },
                { year: 2022, value: 150 },
                { year: 2023, value: 250 },
              ],
            },
            {
              label: '老年人口',
              data: [
                { year: 2020, value: 30 },
                { year: 2021, value: 45 },
                { year: 2022, value: 90 },
                { year: 2023, value: 150 },
              ],
            },
          ],
        },
      },
    },
  },
}

export const Default: StoryObj<typeof Container> = {}

export default meta
