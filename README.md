# JP-POP-TREND
## 環境構築
パッケージのインストール
```
pnpm install
```

APIスキーマから型を自動生成
```
pnpm openapi
```

.env.localの設定
```
RESAS_API_KEY=取得したAPIキー
```

# 開発
Next.jsのdevサーバーの立ち上げ
```
pnpm dev
```

Storybookの立ち上げ
```
pnpm dev
```

happy-css-modulesによるCSS Modulesからの型生成
```
pnpm hcm
```

## テスト
通常実行
```
pnpm test
```
watchモード
```
pmpm test:watch
```

UIモード
```
pnpm test:ui
```

Coverage
```
pnpm coverage
```
