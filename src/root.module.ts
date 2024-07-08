import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule, BookModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('Root module')
  }
}
