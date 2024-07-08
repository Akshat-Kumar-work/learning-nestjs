import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './localStrategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports:[PassportModule,UsersModule],
  controllers: [],
  providers: [LocalStrategy,UsersService]
})
export class AuthModule {}
