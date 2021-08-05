export * from './subsocial'
import networks from './networks'
import { Apis } from './networks/types'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { newLogger } from '@subsocial/utils'
import rpc from '@polkadot/types/interfaces/jsonrpc'
import { typesBundle, typesChain } from './types'

const log = newLogger('Connections')

export const createConnections = async () => {
  const connectios: Apis = {} as Apis

  const promises = Object.entries(networks).map(async ([ network, { node, types } ]) => {
    try {
      const provider = new WsProvider(node)

      log.info(`Connecting to ${network} node at ${node}...`)
      const api = new ApiPromise({ provider, types, typesBundle, typesChain, rpc })

      api.on('ready', () => { connectios[network] = api })
      api.on('error', () => api.disconnect())

    } catch (err) {
      log.error('Unexpected error:', err)
    }
  })

  await Promise.all(promises)

  return connectios
}