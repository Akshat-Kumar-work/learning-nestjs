import { Module } from '@nestjs/common';
import { UserModule } from './users.module';
import { OrderModule } from './orders.module';
import { ChatModule } from './chat.module';


@Module({
  imports: [UserModule, OrderModule , ChatModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('Root module')
  }
}
