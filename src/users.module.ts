import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class UserModule {
  constructor(){
    console.log('user module')
  }
}
