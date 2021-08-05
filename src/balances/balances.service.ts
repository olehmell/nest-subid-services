import { Injectable, Inject } from '@nestjs/common'
import { APIS_TOKEN } from 'src/constants'
import { ApiPromise, Apis } from '../connections/networks/types'
import { getFromAllNetworks, fieldsToString } from '../utils'

export const fetchBalanceByAccount = async (api: ApiPromise, account: string) => {
  const { accountId, additional, lockedBreakdown, isVesting, ...balances } = await api.derive.balances.all(account)

  return {
    accountId,
    additional,
    lockedBreakdown,
    isVesting,
    ...fieldsToString(balances)
  }
}

@Injectable()
export class BalancesService {
  @Inject(APIS_TOKEN) private apis: Apis

  async getBalanceByAccount (network: string, account: string) {
    fetchBalanceByAccount(this.apis[network], account)
  }

  async getBalancesByAccount (account: string) {
    getFromAllNetworks(this.apis, async api => fetchBalanceByAccount(api, account))
  }
}
