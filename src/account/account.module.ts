import { Module } from '@nestjs/common'
import { BalancesModule } from 'src/balances/balances.module.service'
import { AccountController } from './account.controller'

@Module({
  imports: [ BalancesModule ],
  controllers: [ AccountController ]
})
export class AccountModule {}
