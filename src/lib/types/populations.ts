import { components } from '../api/schema'

export type Populations = {
  [key: number]: {
    prefecture: components['schemas']['Prefecture']
    populations: components['responses']['GetPopulationResponse']['content']['application/json']['result']
  }
}
