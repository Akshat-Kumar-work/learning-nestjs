import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './localStrategy';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[PassportModule,UsersModule,
     JwtModule.register({
      secret: "akshatkey",
      signOptions:{expiresIn:'120s'}
  })],
  controllers: [],
  providers: [LocalStrategy,UsersService,AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
