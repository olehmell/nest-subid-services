import { createFlatSubsocialApiResolver } from '@subsocial/api'
import { subsocial as connection } from './networks'

const { node, ipfs, offchain } = connection

export const resolveSubsocialApi = createFlatSubsocialApiResolver({
  substrateNodeUrl: node,
  ipfsNodeUrl: ipfs,
  offchainUrl: offchain
})