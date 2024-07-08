import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { MainController } from './app.controller';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule, BookModule, AuthModule],
  controllers: [MainController],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('Root module')
  }
}
