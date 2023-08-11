import { components } from '@/lib/api/schema'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

type Props = {
  dataList: {
    prefecture: components['schemas']['Prefecture']
    data: components['schemas']['Population'][]
  }[]
}
export function PopulationChartPresenter({ dataList }: Props) {
  return (
    <LineChart width={800} height={300}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis
        dataKey='year'
        type='category'
        allowDuplicatedCategory={false}
        unit='年'
      />
      <YAxis dataKey='value' unit='人' />
      <Tooltip />
      <Legend />
      {dataList.map(({ prefecture, data }) => (
        <Line
          key={prefecture.prefCode}
          dataKey='value'
          data={data}
          name={prefecture.prefName}
        />
      ))}
    </LineChart>
  )
}
