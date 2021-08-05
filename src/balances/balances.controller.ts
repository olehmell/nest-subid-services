import { Controller, Get, Param } from '@nestjs/common'
import { BalancesService } from './balances.service'

@Controller('balances')
export class BalancesController {
  constructor (private readonly balancesService: BalancesService) {}

  @Get()
  getAll (@Param('account') account: string) {
    return this.balancesService.getBalancesByAccount(account)
  }

  @Get(':network')
  getOne (@Param('account') account: string, @Param('network') network: string) {
    return this.balancesService.getBalanceByAccount(network, account)
  }
}
