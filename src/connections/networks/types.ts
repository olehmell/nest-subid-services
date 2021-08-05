import { ApiPromise } from '@polkadot/api'

export type Network = {
  node: string
  types?: any,
  icon: string,
  [key: string]: any
}

export type SupportedNetworks =
  | 'subsocial'
  | 'kusama'
  | 'polkadot'

export type Networks = Record<string, Network>
export type Apis = Record<SupportedNetworks, ApiPromise>
export * from '@polkadot/api'