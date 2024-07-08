import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
    constructor(){
        console.log('user module')
    }
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UsersMiddleware).forRoutes('users/addUser')
    }
}
