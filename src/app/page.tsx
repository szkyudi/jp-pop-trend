import Prefectures from './_components/Prefectures'
import { CheckedPrefCodesProvider } from './_contexts/checkedPrefCodes'

export default function Home() {
  return (
    // 東京都と大阪府をデフォルトでチェック
    <CheckedPrefCodesProvider defaultChecked={[13, 27]}>
      <main>
        <h1>都道府県別の総人口推移グラフを表示するSPA</h1>
        <Prefectures />
      </main>
    </CheckedPrefCodesProvider>
  )
}
