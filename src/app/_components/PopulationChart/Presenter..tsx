import s from './Presenter.module.scss'
import { components } from '@/lib/api/schema'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts'

type Props = {
  dataList: {
    prefecture: components['schemas']['Prefecture']
    data: components['schemas']['Population'][]
  }[]
}
export function PopulationChartPresenter({ dataList }: Props) {
  return (
    <div className={s.container}>
      <ResponsiveContainer minWidth={720} width='100%' height={480}>
        <LineChart margin={{ top: 24, right: 24 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            type='category'
            allowDuplicatedCategory={false}
            label={{
              value: '年',
              offset: -24,
              position: 'insideTopRight',
            }}
          />
          <YAxis
            dataKey='value'
            label={{
              value: '千人',
              offset: -20,
              position: 'insideTopRight',
            }}
            tickFormatter={(value) => (value / 1000).toString()}
          />
          <Tooltip />
          <Legend />
          {dataList.map(({ prefecture, data }, index) => (
            <Line
              key={prefecture.prefCode}
              dataKey='value'
              data={data}
              name={prefecture.prefName}
              stroke={`hsl(${(360 / dataList.length) * index}, 30%, 50%)`}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
