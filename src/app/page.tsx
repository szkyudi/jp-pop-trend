import Prefectures from './_components/Prefectures'
import { CheckedPrefecturesProvider } from './_contexts/checkedPrefectures'

export default function Home() {
  return (
    // 東京都と大阪府をデフォルトでチェック
    <CheckedPrefecturesProvider defaultChecked={[13, 27]}>
      <main>
        <h1>都道府県別の総人口推移グラフを表示するSPA</h1>
        <Prefectures />
      </main>
    </CheckedPrefecturesProvider>
  )
}
