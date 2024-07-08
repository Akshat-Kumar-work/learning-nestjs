import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log('Root module')
  }
}
