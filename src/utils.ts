import { Apis } from './connections/networks/types'
import { ApiPromise } from '@polkadot/api'
import { FlatSubsocialApi } from '@subsocial/api/flat-subsocial'

type ApiFn<T> = (api: ApiPromise, network: string) => Promise<T>

type Properties<T = any> = {
  cache: Record<string, T>,
  needUpdate?: () => boolean
}

export const getFromAllNetworks = async <T = any>(apis: Apis, getData: ApiFn<T>, props?: Properties<T>) => {
  if (!props) {
    props = {
      cache: {}
    }
  }

  const { cache, needUpdate } = props

  const forceUpdate = (needUpdate && needUpdate())

  const promises = Object.entries(apis).map(async ([ network, api ]) => {
    const cacheData = cache[network]
    if (!cacheData || forceUpdate) {
      cache[network] = await getData(api, network)
    }
  })

  await Promise.all(promises)

  return cache
}

export const fieldsToString = (fields?: Record<string, any>, getter?: (value?: any) => any): Record<string, any> | undefined => {
  if (!fields) return undefined

  for (const key in fields) {
    const item = getter ? getter(fields[key]) : fields[key]
    fields[key] = item?.toString()
  }

  return fields
}

export const asyncErrorHandler = fn => 
  (...args) => {
    const fnReturn = fn(...args)
    const next = args[args.length-1]
    return Promise.resolve(fnReturn).catch(next)
  }

export const apiIsConnected = (api?: ApiPromise) => api && api.isConnected

export async function runQueryOrUndefined<T extends ApiPromise | FlatSubsocialApi> (
  api: T,
  query: (api: T) => Promise<any>
) {

  if (api instanceof ApiPromise) {
    if (!apiIsConnected(api)) return undefined
  } else {
    if (!api) return undefined
  }

  return query(api)
}