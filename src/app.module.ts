import { Controller, Module } from '@nestjs/common'
import { AccountModule } from './account/account.module'
import { createConnections, resolveSubsocialApi } from './connections'
import { APIS_TOKEN, SUBSOCIAL_API_TOKEN } from './constants'

@Controller('api/v1')
export class ApiController {}

@Module({
  imports: [
    AccountModule,
  ],
  providers: [
    ApiController,
    {
      provide: APIS_TOKEN,
      useFactory: () => createConnections()
    },
    {
      provide: SUBSOCIAL_API_TOKEN,
      useFactory: () => resolveSubsocialApi()
    }
  ],

  exports: [ APIS_TOKEN, SUBSOCIAL_API_TOKEN ]
})
export class AppModule {}
