import { PopulationChart } from './_components/PopulationChart'
import { PrefecturesSelector } from './_components/PrefecturesSelector'
import { CheckedPrefCodesProvider } from './_contexts/checkedPrefCodes'
import { CheckedPopulationTypeProvider } from './_contexts/checkedPopulationType'
import { Header } from './_components/Header/Header'
import s from './page.module.scss'
import { PopulationSegment } from './_components/PopulationSegment'
import { Populations } from '@/lib/types/populations'
import { getPrefectures } from '@/lib/api/getPrefectures'
import { getPopulation } from '@/lib/api/getPopulation'
import { Container } from '@/lib/components/Contianer'

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
    <>
      <Header />
      {/* 東京都と大阪府をデフォルトでチェック */}
      <CheckedPrefCodesProvider defaultChecked={[13, 27]}>
        <CheckedPopulationTypeProvider>
          <Container>
            <main className={s.container}>
              <form className={s.form}>
                <fieldset>
                  <legend className={s.legend}>
                    表示する都道府県を複数選択する
                  </legend>
                  <PrefecturesSelector prefectures={prefectures} />
                </fieldset>
                <fieldset>
                  <legend className={s.legend}>
                    表示する人口種別を選択する
                  </legend>
                  <PopulationSegment />
                </fieldset>
              </form>
              <section>
                <h2 className={s.heading}>選択した都道府県の人口構成</h2>
                <PopulationChart populations={populations} />
              </section>
            </main>
          </Container>
        </CheckedPopulationTypeProvider>
      </CheckedPrefCodesProvider>
    </>
  )
}
