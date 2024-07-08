import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { UserGuard } from './users.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserGuard]
})
export class UsersModule implements NestModule {
    constructor(){
        console.log('user module')
    }
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UsersMiddleware).forRoutes('users/addUser')
    }
}
