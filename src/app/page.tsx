import { PopulationChart } from './_components/PopulationChart'
import Prefectures from './_components/Prefectures'
import { CheckedPrefCodesProvider } from './_contexts/checkedPrefCodes'
import { CheckedPopulationLabelProvider } from './_contexts/checkedPopulationLabel'
import { PopulationSegment } from './_components/PopulationSegment'
import { Populations } from '@/lib/types/populations'
import { getPrefectures } from '@/lib/api/getPrefectures'
import { getPopulation } from '@/lib/api/getPopulation'

export const revalidate = 86400 // 24 hours

export default async function Home() {
  const prefectures = await getPrefectures()
  const populationList = await Promise.all(
    prefectures.map((prefecture) => getPopulation(prefecture.prefCode)),
  )

  const populations: Populations = {}
  for (let i = 0; i < populationList.length; i++) {
    populations[prefectures[i].prefCode] = {
      prefecture: prefectures[i],
      populations: populationList[i],
    }
  }

  return (
    // 東京都と大阪府をデフォルトでチェック
    <CheckedPrefCodesProvider defaultChecked={[13, 27]}>
      <CheckedPopulationLabelProvider>
        <main>
          <h1>都道府県別の総人口推移グラフを表示するSPA</h1>
          <Prefectures prefectures={prefectures} />
          <PopulationChart populations={populations} />
          <PopulationSegment />
        </main>
      </CheckedPopulationLabelProvider>
    </CheckedPrefCodesProvider>
  )
}
