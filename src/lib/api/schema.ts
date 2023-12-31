/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/prefectures': {
    /**
     * Your GET endpoint
     * @description 指定された都道府県に関する都道府県データを返します。
     */
    get: operations['get-prefectures']
  }
  '/population/composition/perYear': {
    /**
     * 人口構成
     * @description 地域単位、年単位の年齢構成のデータを返します。
     */
    get: operations['get-population-composition-perYear']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /**
     * Prefecture
     * @description 都道府県データ
     */
    Prefecture: {
      prefCode: number
      prefName: string
    }
    /**
     * Population
     * @description 年単位の人口構成のデータ
     */
    Population: {
      year: number
      value: number
      /** @description labelが総人口の場合は存在しない */
      rate?: number
    }
    /**
     * PopulationType
     * @description 人口構成のカテゴリーを表すラベル
     * @enum {string}
     */
    PopulationType: '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
  }
  responses: {
    /** @description Example response */
    GetPrefecturesResponse: {
      headers: {}
      content: {
        'application/json': {
          message: string
          result: components['schemas']['Prefecture'][]
        }
      }
    }
    /** @description Example response */
    GetPopulationResponse: {
      content: {
        'application/json': {
          message: string
          result: {
            /** @description 実績値と推計値の区切り年 */
            boundaryYear: number
            data: {
              label: components['schemas']['PopulationType']
              data: components['schemas']['Population'][]
            }[]
          }
        }
      }
    }
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type external = Record<string, never>

export interface operations {
  /**
   * Your GET endpoint
   * @description 指定された都道府県に関する都道府県データを返します。
   */
  'get-prefectures': {
    responses: {
      200: components['responses']['GetPrefecturesResponse']
    }
  }
  /**
   * 人口構成
   * @description 地域単位、年単位の年齢構成のデータを返します。
   */
  'get-population-composition-perYear': {
    parameters: {
      query: {
        /** @description 都道府県コード */
        prefCode: number
        /** @description 市区町村コード */
        cityCode: string
      }
    }
    responses: {
      200: components['responses']['GetPopulationResponse']
    }
  }
}
